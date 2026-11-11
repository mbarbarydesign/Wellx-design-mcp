/**
 * Wellx Unified Design System — MCP server factory.
 *
 * Serves the design system to AI agents: rules by topic, component recipes,
 * token values, full-text search, and a static lint (`validate`) that checks
 * code against the guardrails. Reads everything from the hub repo's /spec and
 * /tokens directories, so a `git pull` (or redeploy) is the only update step.
 *
 * Shared by both transports:
 *   - mcp/server.mjs — stdio (local: npx github:mbarbarydesign/Wellx-design-mcp)
 *   - api/mcp.mjs    — Streamable HTTP on Vercel (claude.ai custom connector)
 */
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { z } from "zod";
import { readFileSync, readdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const SPEC = join(ROOT, "spec");
const tokens = JSON.parse(readFileSync(join(ROOT, "tokens", "wellx-tokens.json"), "utf8"));
const labsTokens = JSON.parse(readFileSync(join(ROOT, "tokens", "wellx-labs-tokens.json"), "utf8"));
const labsV2Tokens = JSON.parse(readFileSync(join(ROOT, "tokens", "labs-v2-tokens.json"), "utf8"));
const labsV2Components = JSON.parse(readFileSync(join(ROOT, "tokens", "labs-v2-components.json"), "utf8"));

const TOPICS = readdirSync(SPEC)
  .filter((f) => f.endsWith(".md"))
  .map((f) => f.replace(/\.md$/, ""))
  .sort();
const readTopic = (t) => readFileSync(join(SPEC, `${t}.md`), "utf8");
const text = (s) => ({ content: [{ type: "text", text: s }] });

// every known token hex, for the validate() allowlist message
const KNOWN_HEX = new Set();
(function collect(v) {
  if (typeof v === "string" && /^#[0-9a-fA-F]{3,8}$/.test(v)) KNOWN_HEX.add(v.toLowerCase());
  else if (typeof v === "string") for (const m of v.matchAll(/#[0-9a-fA-F]{6}/g)) KNOWN_HEX.add(m[0].toLowerCase());
  else if (v && typeof v === "object") Object.values(v).forEach(collect);
})(tokens);
(function collectLabs(v) {
  if (typeof v === "string") for (const m of v.matchAll(/#[0-9a-fA-F]{6}/g)) KNOWN_HEX.add(m[0].toLowerCase());
  else if (v && typeof v === "object") Object.values(v).forEach(collectLabs);
})(labsTokens);

// The MCP server's own maturity — independent of the design-system content
// version (tokens.$meta.version), which keeps evolving on its 2.x line.
const MCP_VERSION = "1.0.0-beta";

export function createServer() {
  const server = new McpServer(
    {
      name: "wellx-design-system",
      title: "Wellx Design System (Beta)",
      version: MCP_VERSION,
      websiteUrl: "https://wellx-design-mcp.vercel.app",
      icons: [
        { src: "https://wellx-design-mcp.vercel.app/assets/wellx-logo-mark-512.png", mimeType: "image/png", sizes: ["512x512"] },
        { src: "https://wellx-design-mcp.vercel.app/assets/wellx-logo-mark.svg", mimeType: "image/svg+xml", sizes: ["any"] },
      ],
    },
    {
      instructions:
        "Wellx Unified Design System (Beta). " +
        "ALWAYS consult this server before building or restyling UI for any Wellx tool: " +
        "start with get_principles, then get_rules for the area you are touching (topics: " + TOPICS.join(", ") + "), " +
        "get_component_spec for concrete recipes, and get_tokens for values. " +
        "THREE SEPARATE BRAND SYSTEMS live here: the Wellx portal system (violet accent, Manrope, --wx-* tokens; the non-prefixed topics), " +
        "the Wellx Labs v1 brand system (spectral identity, Figtree + IBM Plex Mono, --wl-* tokens; the labs-* topics + get_labs_tokens), " +
        "and LABS DESIGN SYSTEM V2 (rose #C42663 accent, Figtree + IBM Plex Mono for NUMBERS ONLY, DARK-FIRST with elevated surfaces, 2px Lucide icons, --wl2-* tokens; get_labs_v2_tokens + get_labs_v2_component_spec). " +
        "Pick one per product and never mix them. " +
        "IF THE USER HAS NOT SPECIFIED which system their product uses, ASK THEM FIRST — offer exactly these three options: \"Wellx design system\", \"Wellx Labs design system\" or \"Labs Design System V2\" — before fetching rules or writing any UI. Never assume or silently default. " +
        "DEFAULT THEME: light in the portal and Labs v1 systems (dark is opt-in: .dark class / data-theme=\"dark\"), but Labs Design System V2 is DARK-FIRST — :root carries the dark elevated theme and data-theme=\"light\" opts into the light twin. " +
        "In code, import @wellx/design-tokens (CSS variables + Tailwind preset) instead of typing values. " +
        "ALL USER-FACING TEXT FOLLOWS THE VOICE GUIDELINES: before writing any copy — UI labels, notifications, onboarding, errors, emails, health content — read get_rules(\"copy-voice\") (Wellx products) or get_rules(\"labs-voice\") (Wellx Labs) and follow it exactly. " +
        "ALWAYS PULL THE LOGO: any product, screen, prototype or document you create carries the official Wellx logo — call get_logo for the real asset URLs and placement rules, and embed those files. Never redraw the mark, never typeset the wordmark in a font, never ship a placeholder logo. " +
        "BEFORE PRESENTING ANY UI YOU BUILD, run the design audit: call get_audit_checklist, walk every category, and report the verdict (blockers / warnings / polish). A design with open Blockers is not done — fix them first. " +
        "Also run validate on your markup/styles to catch guardrail violations.",
    },
  );

  server.tool(
    "get_principles",
    "The five core principles of the Wellx design system. Read this first before building any UI.",
    {},
    async () => text(readTopic("principles")),
  );

  server.tool(
    "get_rules",
    "Full rules for one area of the design system.",
    { topic: z.enum(TOPICS) },
    async ({ topic }) => text(readTopic(topic)),
  );

  server.tool(
    "get_component_spec",
    "Spec + recipe for a specific component or pattern (e.g. button, table, sidebar, topbar, dialog, input, toggle, alert, toast, kpi, tabs, filter bar, avatar, empty state, nav item).",
    { name: z.string().min(2) },
    async ({ name }) => {
      const q = name.toLowerCase();
      const sections = [];
      for (const topic of TOPICS) {
        const body = readTopic(topic);
        for (const section of body.split(/\n(?=## )/)) {
          const heading = (section.match(/^#+ (.+)/) || [])[1] || "";
          if (heading.toLowerCase().includes(q) || (q.length > 3 && section.toLowerCase().includes(q))) {
            sections.push(`[from spec/${topic}.md]\n${section.trim()}`);
          }
        }
      }
      if (!sections.length) return text(`No spec section matches "${name}". Available topics: ${TOPICS.join(", ")}. Try get_rules or search.`);
      return text(sections.slice(0, 4).join("\n\n---\n\n"));
    },
  );

  server.tool(
    "get_tokens",
    "Design token values. category: semantics | primitives | radius | radiusComponents | spacing | widths | typography | charts | gradients | all. For semantics pass mode light|dark (default both).",
    {
      category: z.enum(["semantics", "primitives", "radius", "radiusComponents", "spacing", "widths", "typography", "charts", "gradients", "all"]),
      mode: z.enum(["light", "dark"]).optional(),
    },
    async ({ category, mode }) => {
      let out;
      if (category === "all") out = tokens;
      else if (category === "semantics") out = mode ? tokens.semantics[mode] : tokens.semantics;
      else out = tokens[category];
      return text(JSON.stringify(out, null, 2));
    },
  );

  server.tool(
    "get_labs_tokens",
    "Wellx Labs design token values (--wl-*; semantic dual-theme roles for the Labs brand system — NOT the portal --wx-* set). category: color | gradient | radius | shadow | font | type | typeScale | focusRing | chart | motion | space | grid | density | all.",
    { category: z.enum(["color", "gradient", "radius", "shadow", "font", "type", "typeScale", "focusRing", "chart", "motion", "space", "grid", "density", "all"]) },
    async ({ category }) => text(JSON.stringify(category === "all" ? labsTokens : labsTokens[category], null, 2)),
  );

  server.tool(
    "get_labs_v2_tokens",
    "Labs Design System V2 foundations tokens (the THIRD standalone system — separate from --wx-* and --wl-*). Identity: rose #C42663 accent, Figtree + IBM Plex Mono (numbers only), DARK-FIRST with elevated dark surfaces, 2px Lucide icons, content capped at 1440. Code layer: tokens/labs-v2.css (--wl2-*, :root = dark) + labs-v2-tailwind-preset.cjs. category: color | typography | rtl | spacing | radius | elevation | focus | motion | icons | layout | meta | all.",
    { category: z.enum(["color", "typography", "rtl", "spacing", "radius", "elevation", "focus", "motion", "icons", "layout", "meta", "all"]) },
    async ({ category }) => text(JSON.stringify(category === "all" ? labsV2Tokens : labsV2Tokens[category], null, 2)),
  );

  // Flat slug → spec index across the three atomic levels of the V2 library.
  const V2_LEVELS = ["atoms", "molecules", "organisms"];
  const V2_INDEX = {};
  for (const level of V2_LEVELS) {
    for (const [slug, spec] of Object.entries(labsV2Components[level])) V2_INDEX[slug] = spec;
  }

  server.tool(
    "get_labs_v2_component_spec",
    "Component spec for the Wellx Labs V2 library (the standalone 2026-09 rebuild — NOT the portal or Labs v1 systems). " +
      "Every spec declares its atomic level, composes: list, variants, properties, component tokens (the '6 · Components' layer), a11y contract, and do/don't rules. " +
      "Call without `name` for the full inventory grouped by level plus the shared conventions (control heights, radius ladder, focus, elevation, icons, motion). " +
      "Components: " + Object.keys(V2_INDEX).join(", ") + ".",
    { name: z.string().min(2).optional() },
    async ({ name }) => {
      if (!name) {
        const index = Object.fromEntries(
          V2_LEVELS.map((lvl) => [lvl, Object.keys(labsV2Components[lvl])]),
        );
        return text(JSON.stringify({ $notes: labsV2Components.$notes, conventions: labsV2Components.conventions, components: index }, null, 2));
      }
      const q = name.toLowerCase().trim().replace(/\s+/g, "-");
      const slug =
        (q in V2_INDEX && q) ||
        Object.keys(V2_INDEX).find((s) => s === q.replace(/s$/, "")) ||
        Object.keys(V2_INDEX).find((s) => (V2_INDEX[s].aliases || []).some((a) => a === q || a === q.replace(/s$/, ""))) ||
        Object.keys(V2_INDEX).find((s) => s.includes(q) || q.includes(s)) ||
        Object.keys(V2_INDEX).find((s) => (V2_INDEX[s].aliases || []).some((a) => a.includes(q) || q.includes(a))) ||
        Object.keys(V2_INDEX).find((s) => V2_INDEX[s].name.toLowerCase().includes(name.toLowerCase().trim()));
      if (!slug) {
        return text(`No V2 component matches "${name}". Available: ${Object.keys(V2_INDEX).join(", ")}.`);
      }
      return text(JSON.stringify({ slug, conventions: labsV2Components.conventions, spec: V2_INDEX[slug] }, null, 2));
    },
  );

  server.tool(
    "search",
    "Full-text search across the entire design system spec. Returns matching lines with their topic.",
    { query: z.string().min(2) },
    async ({ query }) => {
      const q = query.toLowerCase();
      const hits = [];
      for (const topic of TOPICS) {
        const lines = readTopic(topic).split("\n");
        lines.forEach((line, i) => {
          if (line.toLowerCase().includes(q)) hits.push(`spec/${topic}.md:${i + 1}  ${line.trim()}`);
        });
      }
      return text(hits.length ? hits.slice(0, 40).join("\n") : `No matches for "${query}".`);
    },
  );

  server.tool(
    "validate",
    "Static lint of markup/CSS/JSX against the design-system guardrails: hardcoded hex, stray shadows, physical direction utilities, arbitrary color classes, wrong fonts. Returns findings with the rule each violates.",
    { code: z.string().min(1) },
    async ({ code }) => {
      const findings = [];
      const push = (rule, match, fix) => findings.push({ rule, match, fix });

      for (const m of code.matchAll(/#[0-9a-fA-F]{6}\b|#[0-9a-fA-F]{3}\b/g)) {
        const hex = m[0].toLowerCase();
        push(
          "no-hardcoded-hex",
          m[0],
          KNOWN_HEX.has(hex)
            ? `This is a known token value — replace with its CSS variable / Tailwind class from @wellx/design-tokens.`
            : `Unknown color. Use a token from @wellx/design-tokens; if it genuinely doesn't exist, request a token addition — do not invent values.`,
        );
      }
      for (const m of code.matchAll(/\b(?:bg|text|border|ring|fill|stroke)-\[#[^\]]+\]/g))
        push("no-arbitrary-color-classes", m[0], "Use semantic classes from the Tailwind preset (bg-primary, text-muted-foreground, border-border…).");
      for (const m of code.matchAll(/\bshadow-(?:sm|md|lg|xl|2xl|\[[^\]]+\])/g))
        push("shadows-restricted", m[0], "Shadows are allowed only on dialogs, drawers, toasts, and auth cards. Cards/panels use 1px borders.");
      for (const m of code.matchAll(/\b(?:pl|pr|ml|mr)-\d+|\b(?:left|right)-\d+|\bborder-[lr]\b|\btext-(?:left|right)\b|\brounded-[lr]\b/g))
        push("logical-properties-only", m[0], "Use logical utilities for RTL: ps-*/pe-*, ms-*/me-*, start-*/end-*, border-s/border-e, text-start/text-end.");
      for (const m of code.matchAll(/font-family:\s*(?!['"]?(?:Manrope|Alexandria|Figtree|IBM Plex Mono))['"]?([A-Za-z ]+)/g))
        push("fonts", m[0], "Portal UI uses Manrope (Latin) / Alexandria (Arabic); Wellx Labs uses Figtree / IBM Plex Mono. Other families are off-system.");
      for (const mt of code.matchAll(/\bfocus:(?:ring|outline|border|shadow)[\w[\]/-]*/g))
        push("focus-visible-only", mt[0], "Focus styling fires only for keyboard/AT navigation — use focus-visible: variants, never focus: (no ring on mouse click).");
      for (const mt of code.matchAll(/:focus(?!-visible|-within)\b[^{}]*\{[^}]*(?:outline|box-shadow|border)[^}]*\}/g))
        push("focus-visible-only", mt[0].slice(0, 60), "Style :focus-visible, not :focus — rings are for keyboard and screen-reader users only.");
      if ((/outline:\s*none|\boutline-none\b/.test(code)) && !/focus-visible/.test(code))
        push("focus-ring-removed", "outline removed without focus-visible replacement", "Never remove the ring without restyling it on :focus-visible — keyboard users lose their position.");
      if (/hover:(?:bg|text|border)-(?:primary|brand|violet|indigo)/.test(code))
        push("monochrome-chrome", "accent color on hover", "Hovers are neutral gray (hover:bg-muted). Accent appears only on actions, links, focus, and active pills/tabs.");
      for (const m of code.matchAll(/\b(?:[Oo]ops|[Uu]h-oh)\b/g))
        push("voice-error-copy", m[0], "Errors say what happened in plain terms — 'We couldn't load this…' — never 'Oops'. See get_rules('copy-voice').");
      for (const m of code.matchAll(/\breach(?:ing)? out\b/gi))
        push("voice-terminology", m[0], "'Reach out' reads informal in GCC contexts — use 'contact support' / 'get in touch'.");
      for (const m of code.matchAll(/\bwell-?being\b/gi))
        push("voice-terminology", m[0], "The term is 'wellness' — single, ownable, consistent across markets.");
      for (const m of code.matchAll(/\b(?:Amazing|Awesome|Incredible)[!.]|crushing it|superstar|You did it!|🎉/g))
        push("voice-hollow-praise", m[0], "No hollow praise; celebrate quietly and match the scale of the action — 'Done. Your details have been saved.'");
      for (const m of code.matchAll(/[\w"”’)]\s?—\s?[\w"“‘(]/g))
        push("voice-em-dash", m[0], "Avoid em dashes in UI copy and notifications — replace with a comma or split the sentence (editorial long-form only).");

      if (!findings.length) return text("PASS — no guardrail violations detected. (Static lint only: also verify accent scope, dark-mode twins, and 1440px content cap by eye.)");
      return text(JSON.stringify({ verdict: "FAIL", count: findings.length, findings }, null, 2));
    },
  );

  const LOGO_FILES = {
    "logo-light-svg": ["docs/assets/wellx-logo-light.svg", "image/svg+xml"],
    "logo-dark-svg": ["docs/assets/wellx-logo-dark.svg", "image/svg+xml"],
    "logo-mark-svg": ["docs/assets/wellx-logo-mark.svg", "image/svg+xml"],
    "logo-mark-png": ["docs/assets/embed/wellx-logo-mark-256.png", "image/png"],
    "labs-lockup-dark": ["docs/assets/labs/embed/wellx-labs-lockup-dark.png", "image/png"],
    "labs-lockup-light": ["docs/assets/labs/embed/wellx-labs-lockup-light.png", "image/png"],
    "labs-bionic-dark": ["docs/assets/labs/embed/wellx-bionic-dark.png", "image/png"],
    "labs-bionic-light": ["docs/assets/labs/wellx-bionic-light.png", "image/png"],
    "labs-icon-tile": ["docs/assets/labs/wellx-labs-icon-tile.png", "image/png"],
  };

  server.tool(
    "get_logo",
    "The official Wellx logo assets — REQUIRED in every product UI you create. Without `file`: returns publicly served URLs plus placement rules for the chosen system. If your environment cannot fetch those URLs (sandboxed network, host allowlist), call again with `file` to receive the asset INLINE over MCP — SVGs as markup to paste, PNGs as base64 to decode or use as a data: URI. Never redraw the mark, never typeset the wordmark, never substitute a placeholder.",
    {
      system: z.enum(["wellx", "wellx-labs"]),
      file: z.enum(["logo-light-svg", "logo-dark-svg", "logo-mark-svg", "logo-mark-png", "labs-lockup-dark", "labs-lockup-light", "labs-bionic-dark", "labs-bionic-light", "labs-icon-tile"]).optional(),
    },
    async ({ system, file }) => {
      if (file) {
        const [rel, mimeType] = LOGO_FILES[file];
        const buf = readFileSync(join(ROOT, rel));
        if (mimeType === "image/svg+xml") {
          return text(JSON.stringify({ file, mimeType, usage: "Paste this SVG markup inline, or save it as a .svg file. Do not modify the drawing.", svg: buf.toString("utf8") }));
        }
        return text(JSON.stringify({ file, mimeType, encoding: "base64", usage: "Decode to a .png file, or embed directly as data:" + mimeType + ";base64,<data>. Do not modify the image.", data: buf.toString("base64") }));
      }
      const SITE = "https://wellx-design-mcp.vercel.app";
      const out = system === "wellx"
        ? {
            system: "Wellx design system",
            files: {
              "logo-for-light-backgrounds": `${SITE}/assets/wellx-logo-light.svg`,
              "logo-for-dark-backgrounds": `${SITE}/assets/wellx-logo-dark.svg`,
              "mark-only-svg": `${SITE}/assets/wellx-logo-mark.svg`,
              "mark-only-png-512": `${SITE}/assets/wellx-logo-mark-512.png`,
            },
            rules: [
              "Every product UI carries the logo — sidebar header by default: 24px tall, top-left, next to the product name.",
              "Minimum lockup size is 24px; below that use the mark alone. The collapsed sidebar rail shows no logo at all.",
              "Switch files with the theme: the light file on light backgrounds, the dark file on dark.",
              "Never redraw, recolor, stretch, or add effects; never typeset 'wellx' in a font — always use these files.",
              "Cannot fetch these URLs from your environment? Call get_logo again with file=logo-light-svg | logo-dark-svg | logo-mark-svg | logo-mark-png to receive the asset inline over MCP.",
            ],
          }
        : {
            system: "Wellx Labs design system",
            files: {
              "lockup-for-dark-fields": `${SITE}/assets/labs/wellx-labs-lockup-dark.png`,
              "lockup-for-light-fields": `${SITE}/assets/labs/wellx-labs-lockup-light.png`,
              "bionic-mark-dark": `${SITE}/assets/labs/wellx-bionic-dark.png`,
              "bionic-mark-light": `${SITE}/assets/labs/wellx-bionic-light.png`,
              "icon-tile": `${SITE}/assets/labs/wellx-labs-icon-tile.png`,
            },
            rules: [
              "Every surface carries the lockup — top-left default in product chrome; ship the PNG files (the SVG is editable source only).",
              "Minimum sizes: full lockup 180px · mark + chip 96px · mark alone 28px · below 20px the terminal loop alone.",
              "Dark files on fields below 30% luminance, light files above. On imagery, always on a solid plate.",
              "Clear space = 1x LABS-chip height on all sides. Never redraw the ribbon, never stroke it at even weight, never retypeset the wordmark.",
              "Product surfaces use the naming lockup: mark + wellx + 1px accent rule + TOOL NAME in mono caps (see labs-brand).",
              "Cannot fetch these URLs from your environment? Call get_logo again with file=labs-lockup-dark | labs-lockup-light | labs-bionic-dark | labs-bionic-light | labs-icon-tile to receive the asset inline over MCP.",
            ],
          };
      return text(JSON.stringify(out, null, 2));
    },
  );

  server.tool(
    "get_audit_checklist",
    "The mandatory Wellx design audit gate. Call this BEFORE presenting any UI you build — walk every category (brand/tokens, themes, copy & tone, RTL, completeness, states, composition, accessibility), then report a verdict: 'Not ready — N blockers open' / 'Ready with warnings' / 'Passed', listing each fail as what + where + fix. Never present a design with open Blockers.",
    {},
    async () => text(readTopic("audit")),
  );

  server.tool(
    "get_changelog",
    "The design system changelog — check what changed between versions.",
    {},
    async () => text(readFileSync(join(ROOT, "CHANGELOG.md"), "utf8")),
  );

  return server;
}
