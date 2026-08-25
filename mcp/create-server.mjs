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
        "TWO SEPARATE BRAND SYSTEMS live here: the Wellx portal system (violet accent, Manrope, --wx-* tokens; the non-prefixed topics) " +
        "and the Wellx Labs brand system (spectral identity, Figtree + IBM Plex Mono, --wl-* tokens; the labs-* topics + get_labs_tokens). " +
        "Pick one per product and never mix them. " +
        "IF THE USER HAS NOT SPECIFIED which system their product uses, ASK THEM FIRST — offer exactly these two options: \"Wellx design system\" or \"Wellx Labs design system\" — before fetching rules or writing any UI. Never assume or silently default. " +
        "DEFAULT THEME IS LIGHT in both systems: build and present UIs in light mode unless the user asks for dark. Dark mode is an explicit opt-in (.dark class in the portal system, data-theme=\"dark\" in Labs) — still define its token twins, just don't ship it as the default. " +
        "In code, import @wellx/design-tokens (CSS variables + Tailwind preset) instead of typing values. " +
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
      if (/hover:(?:bg|text|border)-(?:primary|brand|violet|indigo)/.test(code))
        push("monochrome-chrome", "accent color on hover", "Hovers are neutral gray (hover:bg-muted). Accent appears only on actions, links, focus, and active pills/tabs.");

      if (!findings.length) return text("PASS — no guardrail violations detected. (Static lint only: also verify accent scope, dark-mode twins, and 1440px content cap by eye.)");
      return text(JSON.stringify({ verdict: "FAIL", count: findings.length, findings }, null, 2));
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
