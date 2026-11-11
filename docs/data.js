/* Wellx Unified Design System — docs site data.
   To ship an update: add an entry to WHATS_NEW (newest first) and bump VERSION.
   Token values mirror tokens/wellx-tokens.json — regenerate together. */

var VERSION = "2.22.0";

/* The MCP server's own maturity — independent of the design-system content
   version above. Mirrors MCP_VERSION in mcp/create-server.mjs. */
var MCP_VERSION = "1.0.0-beta";

var WHATS_NEW = [
  {
    version: "2.22.0", date: "2026-11-11", kind: "minor",
    items: [
      "Labs Design System V2 lands as the third standalone system: rose #C42663 accent (signal magenta #F0366B is AI/identity only), Figtree + IBM Plex Mono for numbers only, DARK-FIRST with elevated surfaces (card #18181B), optional resting shadow in light, 2px Lucide icons, content capped at 1440. Tokens 1.0.0 with the audited contrast numbers baked in; new --wl2-* CSS + Tailwind preset; get_labs_v2_tokens serves every category and get_labs_v2_component_spec covers the 90-component atomic library including the Maze-style Table and the new filter family.",
    ],
  },
  {
    version: "2.17.0", date: "2026-08-26", kind: "minor",
    items: [
      "get_logo can now deliver the logo files inline over MCP: pass file=\u2026 to receive SVG markup or base64 PNG directly \u2014 for agent environments whose sandbox blocks fetching the asset URLs (claude.ai code execution, host allowlists). Slim embed-sized PNGs added for this path.",
    ],
  },
  {
    version: "2.16.0", date: "2026-08-25", kind: "minor",
    items: [
      "The Wellx Copy & Tone of Voice guidelines (v1.0) now live in the system as the copy-voice topic: four voice traits, tone by context with rewrites, fixed terminology, GCC / Philippines / Canada guidance, and the punctuation rules.",
      "Agents must follow them for every piece of user-facing text they write, and validate() now catches the mechanical violations \u2014 \u201cOops\u201d errors, hollow praise, \u201creach out\u201d, \u201cwellbeing\u201d, em dashes in copy.",
    ],
  },
  {
    version: "2.15.0", date: "2026-08-25", kind: "minor",
    items: [
      "Agents now always pull the official logo into anything they create: a new get_logo tool serves the real asset URLs (both systems, light/dark, mark-only cuts) with placement rules, and the MCP instructions require embedding them \u2014 never a redrawn mark, retypeset wordmark, or placeholder.",
    ],
  },
  {
    version: "2.14.0", date: "2026-08-25", kind: "minor",
    items: [
      "The site now opens on an Introduction page \u2014 what the design system MCP is, its three surfaces, the two libraries, and how agents work with it \u2014 implemented from the approved design canvas (the Get-connected section was cut per review; install steps stay on How to install).",
      "What\u2019s new left the sidebar; the full release history remains at #/whats-new and in the changelog.",
    ],
  },
  {
    version: "2.13.0", date: "2026-08-20", kind: "minor",
    items: [
      "Aligned to the frozen System Manual (Final v1): Signal\u2192Possibility rules renumbered WX-N-19\u201321, the six-level authority register (Soul \u00b7 Constitution \u00b7 Doctrine \u00b7 Grammar \u00b7 Implementation \u00b7 Governance, with proposed outside the levels), Sound classified proposed at design-grammar, and the manual recorded as frozen at Release 01 (131 folios).",
      "From the companion book \u201cThe Possibility Within\u201d (not governing): the provenance-before-confidence vocabularies for operating surfaces (confidence: measured / modelled / judgment / insufficient; underwriting states: renewing / open / referred / declined), the book application pattern (297\u00d7210 spreads, edge-law marginalia), and the narrative copy devices (Better / Earlier / In context, We bring / You bring / Together, the timing line, the value cascade).",
    ],
  },
  {
    version: "2.12.0", date: "2026-08-20", kind: "minor",
    items: [
      "Wellx Labs updated from the System Manual (Release 01, 133 pages): a new Soul & constitution tab \u2014 the Brand Soul, the eight canonical WX-L laws, the Value Loop, and the six-layer authority model that governs everything below it.",
      "Position gains the eighth principle (WX-P-08: authority in tone, never dogma), precedence rules, and the practitioners stance.",
      "Sound is now marked Proposed \u00b7 R01 candidate (only its WX-S-00 principles are canonical) and gains the telephony / IVR / hold specification.",
      "Glow gains the living-surface rules (direction determines geometry; spectrum follows meaning; RTL may reverse). Data visualisation gains the Signal \u2192 Possibility progressions (WX-N-40\u201342).",
      "Refinements: below-20px lockup fallback, Operating-Core-carries-no-accent, business-card 700gsm + 1mm spectrum edge, co-branding ordering, no-error-animation rule, and the levels-of-authority register under Implementation rules.",
    ],
  },
  {
    version: "2.11.0", date: "2026-08-20", kind: "minor",
    items: [
      "Wellx Labs rebuilt against the Brand Book, Release 01 \u00b7 2026 (164 pages, four volumes) \u2014 the library grows from 12 to 19 tabs.",
      "Seven new tabs: Position (the eight laws, seven principles, what we are not), Fragments (crest / loop / taper, seven sanctioned uses, denials), Grid & spacing, Motion, Sound (the full sonic identity), Data visualisation (the 7-colour chart palette), and Voice & tone (principles, yes/no copy, banned words).",
      "Existing tabs updated with the book\u2019s exact values: spectrum stops 0/35/68/100 and five permitted uses, ink & paper ramps, 7-step tint scale, 4% saturated-pixel ceiling, contrast pairs, lockup construction and minimum-size ladder, misuse denials, icon safe-margin rules, texture rename (loop field), material system, interface laws, applications (stationery to co-branding), and governance.",
      "Release 01 retirements honoured: rose #A0175E and electric #3D7BFD are gone; the accent family is #C42663 / #A71E53 / #8C1745.",
      "MCP: four new labs topics (labs-position, labs-fragments, labs-sound, labs-voice; ten total), and get_labs_tokens gains chart, motion, space, grid, density and typeScale registers.",
    ],
  },
  {
    version: "2.10.2", date: "2026-08-20", kind: "patch",
    items: [
      "The which-library question now uses the official names: agents offer exactly \u201cWellx design system\u201d or \u201cWellx Labs design system\u201d as the two options.",
    ],
  },
  {
    version: "2.10.1", date: "2026-08-20", kind: "patch",
    items: [
      "How to install simplified to just the Claude routes: the connector URL (recommended) and the local npx MCP, plus what agents get \u2014 the tokens/fonts/Figma sections moved out.",
    ],
  },
  {
    version: "2.10.0", date: "2026-08-20", kind: "minor",
    items: [
      "Design audit gate built into the MCP: new get_audit_checklist tool (also served as the audit rules topic) carrying the full Wellx audit checklist \u2014 brand/tokens, themes, copy & tone, RTL, completeness, states, composition, accessibility \u2014 with Blocker / Warning / Polish severities.",
      "Agents are now instructed to audit everything they build before presenting it and to withhold hand-off while any Blocker is open, reporting a verdict: Not ready / Ready with warnings / Passed.",
    ],
  },
  {
    version: "2.9.7", date: "2026-08-20", kind: "minor",
    items: [
      "Light is the default theme in both systems: agents build and present UIs in light mode unless the user asks for dark \u2014 dark stays an explicit opt-in (.dark in the portal, data-theme=\"dark\" in Labs) with token twins still defined.",
    ],
  },
  {
    version: "2.9.6", date: "2026-08-20", kind: "minor",
    items: [
      "New agent rule: when the user has not specified which library to use (Wellx portal vs Wellx Labs), the agent must ask before building \u2014 enforced in the MCP instructions, get_principles, and the pointer skill.",
    ],
  },
  {
    version: "2.9.5", date: "2026-08-19", kind: "patch",
    items: [
      "All visible version numbers replaced with Beta: the sidebar chip, release headings, the Creator export text, and the MCP instructions now present the system as beta. Internal build numbers remain in the changelog and tooltips.",
    ],
  },
  {
    version: "2.9.4", date: "2026-08-19", kind: "patch",
    items: [
      "Beta status surfaced in the docs: the sidebar chip and a note atop What\u2019s new both flag the system as beta.",
    ],
  },
  {
    version: "2.9.3", date: "2026-08-19", kind: "patch",
    items: [
      "The MCP server now reports itself as 1.0.0-beta with the title \u201cWellx Design System (Beta)\u201d.",
    ],
  },
  {
    version: "2.9.2", date: "2026-08-19", kind: "patch",
    items: [
      "The MCP now presents the Wellx logo mark: serverInfo carries icons (512px PNG + SVG), the display title \u201cWellx Design System\u201d, and the site URL \u2014 clients that render connector icons show the mark.",
      "Docs site favicon is now the Wellx mark (SVG + PNG), replacing the placeholder W tile.",
    ],
  },
  {
    version: "2.9.1", date: "2026-08-19", kind: "patch",
    items: [
      "How-to-install now shows the live connector URL: https://wellx-design-mcp.vercel.app/api/mcp \u2014 paste it into Claude \u2192 Settings \u2192 Connectors \u2192 Add custom connector (no auth fields needed).",
    ],
  },
  {
    version: "2.9.0", date: "2026-08-19", kind: "minor",
    items: [
      "The MCP is now a remote Claude connector: a stateless Streamable HTTP endpoint at /api/mcp, deployed on Vercel next to this site \u2014 add the URL once in Claude \u2192 Settings \u2192 Connectors, nothing to install.",
      "Same server core for both transports (stdio npx + HTTP), so tools and content are identical everywhere and every push to main updates all of them.",
      "How-to-install page updated: connector URL is now option A; local npx stays as option B.",
    ],
  },
  {
    version: "2.8.0", date: "2026-08-19", kind: "minor",
    items: [
      "Docs sidebar gains a collapse button, built to the system's own sidebar spec: panel icon in the 64px header that mirrors when collapsed, 64px icon-only rail with no logo, 200ms ease-out, state remembered.",
      "Opening a section from the collapsed rail expands the sidebar and unfolds that section in one click.",
    ],
  },
  {
    version: "2.7.1", date: "2026-08-19", kind: "patch",
    items: [
      "Labs docs polish: rule cards, the implementation-rules list, and the asset-index trees now have proper card padding.",
    ],
  },
  {
    version: "2.7.0", date: "2026-08-19", kind: "minor",
    items: [
      "Library reorganized: the sidebar now has a Wellx section (Color tokens + Components) and a new Wellx Labs section.",
      "Wellx Labs brand system added — 12 pages mirroring the brand book: architecture, lockup, color, typography, glow, iconography, textures, applications, tokens, components, implementation rules, and the asset index.",
      "Labs assets shipped with the site: the lockup (dark/light), bionic mark, all 69 line icons, and the 6 spectral textures in both variants.",
      "Labs tokens published as tokens/wellx-labs-tokens.json; the MCP server gains get_labs_tokens and six labs-* rule topics so agents can build Labs UIs against the right system.",
    ],
  },
  {
    version: "2.6.0", date: "2026-07-27", kind: "minor",
    items: [
      "Toasts restyled and re-specced: radius-16 card, 20px padding, dialog shadow, top-end stack, 6s auto-dismiss, 420px width, 15px SemiBold title + 13px description, 20px tone icons, always-present close button.",
      "New notification toast variant for live events: no action button \u2014 the whole card is the click target (dismisses, then navigates); keyboard-accessible.",
    ],
  },
  {
    version: "2.5.0", date: "2026-07-27", kind: "minor",
    items: [
      "Design System Creator now exports a single design-system.json \u2014 the full guidelines (agent-facing markdown) and all tokens in one self-contained file, replacing the three separate downloads.",
    ],
  },
  {
    version: "2.4.1", date: "2026-07-27", kind: "patch",
    items: [
      "Sidebar logo reduced to 24px tall; minimum lockup size is 24px \u2014 below that, remove it.",
      "Collapsed sidebar shows no logo at all \u2014 the rail header keeps only the centered collapse button.",
    ],
  },
  {
    version: "2.4.0", date: "2026-07-27", kind: "minor",
    items: [
      "Logo shipped as a component: light and dark SVG variants plus a mark-only cut, with size, clear-space, and theme-switching rules.",
    ],
  },
  {
    version: "2.3.0", date: "2026-07-27", kind: "minor",
    items: [
      "Search & filters is now a standalone toolbar component, always separated from the table card (12\u201316px gap, never inside the table container).",
      "Toolbar composition extended: dropdown filter buttons (current-value label + chevron) and toggle filters (bordered pill with switch) join the search pill and quick chips.",
    ],
  },
  {
    version: "2.2.0", date: "2026-07-27", kind: "minor",
    items: [
      "Documentation site shipped: sidebar navigation, per-component pages with usage guidance and code, color token reference, install guide.",
      "Design System Creator: enter primary + secondary colors to generate full 25\u2013950 scales and export design.md, tokens.css, and tokens.json.",
    ],
  },
  {
    version: "2.1.1", date: "2026-07-27", kind: "patch",
    items: [
      "Search input icon fixed at 14×14 (stroke 1.5); added to the icon size scale.",
      "Button hover states specified: primary→Brand/600, outline/ghost/icon→Gray/100, destructive→Error/700; 150ms ease-out transition.",
      "Destructive button row added to the interaction-states matrix.",
    ],
  },
  {
    version: "2.1.0", date: "2026-07-27", kind: "minor",
    items: [
      "Initial unified release — patterns from the first Wellx portal, tokens from the Figma \"Foundations\" library (Wellx mode).",
      "Tokens: Brand violet #5043ED scale, Untitled-UI Gray/Error/Warning/Success primitives, Semantics light/dark layer, radius scale (card 16 / button 12 / input 8), 4px spacing ladder, content cap 1440.",
      "Type: Manrope ramp (Alexandria for Arabic).",
      "Components: buttons, search & filters, tabs, default table (two-line ~76px, caps header, no checkboxes), KPI card, dialog, neutral-gray avatars, empty states, sidebar (8 rules + nav states), topbar (utilities only), forms, feedback, states matrix, charts, motion & RTL, guardrails.",
    ],
  },
];

var SCALES = {
  Brand:     { "25":"#f6f5fe","50":"#eeecfd","100":"#dcd9fb","200":"#cbc7fa","300":"#a8a1f6","400":"#968ef4","500":"#5043ed","600":"#483cd5","700":"#4036be","800":"#30288e","900":"#201b5f","950":"#100d2f" },
  Secondary: { "25":"#feecf2","50":"#fdd8e6","100":"#fcc5d9","200":"#fb9ec0","300":"#f977a7","400":"#f8639a","500":"#f63c81","600":"#dd3674","700":"#c53067","800":"#ac2a5a","900":"#621834","950":"#19060d" },
  Gray:      { "25":"#fdfdfd","50":"#fafafa","100":"#f5f5f5","200":"#e9eaeb","300":"#d5d7da","400":"#a4a7ae","500":"#717680","600":"#535862","700":"#414651","800":"#252b37","900":"#181d27","950":"#0a0d12" },
  Error:     { "25":"#fffbfa","50":"#fef3f2","100":"#fee4e2","200":"#fecdca","300":"#fda29b","400":"#f97066","500":"#f04438","600":"#d92d20","700":"#b42318","800":"#912018","900":"#7a271a","950":"#55160c" },
  Warning:   { "25":"#fffcf5","50":"#fffaeb","100":"#fef0c7","200":"#fedf89","300":"#fec84b","400":"#fdb022","500":"#f79009","600":"#dc6803","700":"#b54708","800":"#93370d","900":"#7a2e0e","950":"#4e1d09" },
  Success:   { "25":"#f6fef9","50":"#ecfdf3","100":"#dcfae6","200":"#abefc6","300":"#75e0a7","400":"#47cd89","500":"#17b26a","600":"#079455","700":"#067647","800":"#085d3a","900":"#074d31","950":"#053321" },
  Grayblue:  { "25":"#fcfcfd","50":"#f8f9fc","100":"#eaecf5","200":"#d5d9eb","300":"#b3b8db","400":"#717bbc","500":"#4e5ba6","600":"#3e4784","700":"#363f72","800":"#293056","900":"#101323","950":"#0d0f1c" },
  Teal:      { "25":"#f6fefc","50":"#f0fdf9","100":"#ccfbef","200":"#99f6e0","300":"#5fe9d0","400":"#2ed3b7","500":"#15b79e","600":"#0e9384","700":"#107569","800":"#125d56","900":"#134e48","950":"#0a2926" },
  Violet:    { "25":"#fbfaff","50":"#f5f3ff","100":"#ece9fe","200":"#ddd6fe","300":"#c3b5fd","400":"#a48afb","500":"#875bf7","600":"#7839ee","700":"#6927da","800":"#5720b7","900":"#491c96","950":"#2e125e" },
  Gold:      { "25":"#fffbf5","50":"#fef6e7","100":"#f9dd8f","200":"#f7d366","300":"#f5c93f","400":"#f4bb29","500":"#e8b800","600":"#c89a00","700":"#9e7700","800":"#705400","900":"#4a3700","950":"#261c00" },
  Silver:    { "25":"#f9fafa","50":"#f6f8f9","100":"#f3f6f7","200":"#e7ecee","300":"#ced3d9","400":"#a4adb3","500":"#7c858b","600":"#5e676e","700":"#444c52","800":"#2e353a","900":"#1e2326","950":"#101314" },
  Bronze:    { "25":"#fffaf7","50":"#fef3ec","100":"#f9e2d0","200":"#f6d3b6","300":"#f3c19c","400":"#d08342","500":"#b36a2d","600":"#8f5224","700":"#6a3c1a","800":"#4e2c13","900":"#331d0c","950":"#1a0e06" },
};

var SEMANTICS_ROWS = [
  ["backgrounds/screen-bg",        "#ffffff","#FFFFFF",          "#0a0d12","Gray/950 #0A0D12", "Page canvas (--background)"],
  ["backgrounds/primary",          "#ffffff","#FFFFFF",          "#181d27","Gray/900 #181D27", "Cards & panels (--card)"],
  ["Text/primary",                 "#0a0d12","Gray/950 #0A0D12", "#ffffff","#FFFFFF",          "Headings & body ink (--foreground)"],
  ["Text/secondary · tertiary",    "#414651","Gray 700 / 500",   "#d5d7da","Gray 300 / 400",   "Supporting text, labels, meta"],
  ["backgrounds/Active · inactive","#f5f5f5","Gray 100 / 50",    "#252b37","Gray/800 #252B37", "Gray fills: chips, trays, hovers (--muted)"],
  ["borders/tertiary",             "#e9eaeb","Gray/200 #E9EAEB", "#414651","Gray/700 #414651", "Default hairlines (--border)"],
  ["borders/secondary",            "#d5d7da","Gray/300 #D5D7DA", "#535862","Gray/600 #535862", "Input borders (--input)"],
  ["states/active + Text/link",    "#5043ed","Brand 500 / 600",  "#a8a1f6","Brand/300 #A8A1F6","Accent + links (--primary, --ring)"],
  ["states/error · warning · success","#f04438","#F04438 · #F79009 · #17B26A","#f79009","same 500s both modes","Feedback; pair with *-light bgs"],
  ["backgrounds/brand-light",      "#eeecfd","Brand/50 #EEECFD", "#201b5f","Brand/900 #201B5F","Active pills, selected rows (--accent)"],
];

/* ---------------- component docs ----------------
   Each entry: slug, name, lede, demo (html), spec [[k,v]], dos[], donts[], code (html/tailwind snippet) */
var COMPONENTS = [
{
  slug: "logo", name: "Logo",
  lede: "The Wellx lockup in two theme variants — ink wordmark for light surfaces, white wordmark for dark — plus the mark alone for compact contexts. The gradient mark itself never changes: same colors in both modes and every tenant.",
  demo: '<div style="display:flex;flex-direction:column;gap:12px;width:100%"><div style="display:flex;flex-wrap:wrap;gap:12px"><div style="flex:1;min-width:240px;background:#ffffff;border:1px solid var(--border);border-radius:12px;padding:26px;display:grid;place-items:center"><img src="assets/wellx-logo-light.svg" alt="Wellx" style="height:40px;width:auto"></div><div style="flex:1;min-width:240px;background:#0a0d12;border-radius:12px;padding:26px;display:grid;place-items:center"><img src="assets/wellx-logo-dark.svg" alt="Wellx (dark)" style="height:40px;width:auto"></div></div><div style="display:flex;gap:16px;align-items:center;flex-wrap:wrap"><img src="assets/wellx-logo-mark.svg" alt="" style="height:32px;width:auto"><img src="assets/wellx-logo-mark.svg" alt="" style="height:28px;width:auto"><span style="font-size:12px;color:var(--muted-fg-soft)">mark only — compact contexts, min 24px · never in the collapsed rail</span></div></div>',
  spec: [["Variants","light (ink wordmark) · dark (white wordmark) · mark only"],["Mark","full-color gradients — identical in both modes and every tenant"],["Sidebar","lockup 24px tall · collapsed: NO logo — rail shows only the collapse button"],["Auth pages","48px"],["Minimum size","24px — below that, remove the logo instead of shrinking"],["Clear space","\u2265 half the mark height on all sides"],["Format","SVG only — assets/wellx-logo-*.svg"],["Theme switching","picture + prefers-color-scheme, or .dark-class toggle"]],
  dos: ["Use the dark variant on Gray/900+ surfaces and on gradients","Scale by height only — the SVG keeps its own aspect ratio","Remove the logo entirely when the sidebar collapses","Use the mark alone in compact contexts (\u2265 24px) like favicons and app tiles"],
  donts: ["Never recolor, outline, or add shadows to the mark","Don\u2019t place the ink wordmark on dark or gradient surfaces","Don\u2019t rebuild the logo in text — always the SVG asset","Never shrink the lockup below 24px or squeeze it into the collapsed rail"],
  code: '<!-- theme-aware (OS preference) -->\n<picture>\n  <source srcset="/assets/wellx-logo-dark.svg" media="(prefers-color-scheme: dark)" />\n  <img src="/assets/wellx-logo-light.svg" alt="Wellx" class="h-6 w-auto" />\n</picture>\n\n<!-- class-based theming (.dark on <html>) -->\n<img src="/assets/wellx-logo-light.svg" alt="Wellx" class="h-6 w-auto dark:hidden" />\n<img src="/assets/wellx-logo-dark.svg" alt="Wellx" class="h-6 w-auto hidden dark:block" />\n\n<!-- collapsed sidebar: NO logo — render nothing -->\n{!collapsed && (\n  <img src="/assets/wellx-logo-light.svg" alt="Wellx" className="h-6 w-auto dark:hidden" />\n)}'
},
{
  slug: "buttons", name: "Buttons",
  lede: "Four variants, one shape: 40px tall, radius-xl 12, 14px SemiBold. Hovers transition 150ms ease-out. The primary button is one of the few legitimate uses of the brand accent.",
  demo: '<button class="btn btn-primary">Create</button><button class="btn btn-outline">Export</button><button class="btn btn-ghost">Cancel</button><button class="btn btn-destructive">Delete</button><button class="btn btn-outline btn-icon" aria-label="More options" title="More options">⋯</button><button class="btn btn-primary" disabled>Disabled</button>',
  spec: [["Height","40px · 36px sm"],["Radius","12 (radius-xl)"],["Label","14px SemiBold"],["Icon size","16px, stroke 1.75"],["Primary hover / active","Brand/600 / Brand/700"],["Outline & ghost hover","Gray/100 fill"],["Destructive","Error/600 · hover Error/700"],["Disabled","Gray/200 fill · Gray/400 text"],["Transition","background 150ms ease-out"]],
  dos: ["One primary button per view section — everything else outline or ghost","Destructive actions get the destructive variant plus a confirm step","Icon-only buttons always carry aria-label and title"],
  donts: ["No gradients, shadows, or hover lifts on buttons","Don't gray out a colored button with opacity — use the disabled tokens","Don't use accent color for secondary actions"],
  code: '<button class="h-10 px-4 rounded-xl bg-primary text-primary-foreground text-sm font-semibold\n  hover:bg-primary-hover transition-colors">Create</button>\n\n<button class="h-10 px-4 rounded-xl border border-border bg-card text-sm font-semibold\n  hover:bg-muted transition-colors">Export</button>\n\n<button class="h-10 px-4 rounded-xl text-sm font-semibold hover:bg-muted transition-colors">Cancel</button>\n\n<button class="h-10 px-4 rounded-xl bg-destructive text-white text-sm font-semibold\n  hover:bg-destructive-hover transition-colors">Delete</button>'
},
{
  slug: "search-filters", name: "Search & filters",
  lede: "A standalone toolbar component — always separated from the table card it controls: search pill + dropdown filters + optional toggle filters + quick chips. The toolbar sits above the table with its own 12–16px gap and is never rendered inside the table container. Search lives here, never in the topbar.",
  demo: '<div style="display:flex;flex-direction:column;gap:12px;width:100%"><div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center"><span class="search-pill" style="flex:1;min-width:220px;max-width:400px"><svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="6" cy="6" r="4.4" stroke="currentColor" stroke-width="1.5"/><path d="m9.4 9.4 3 3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>Search member, category, ID…</span><span class="filter-pill" style="height:36px;gap:6px">Open <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="m4 5.5 3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="filter-pill" style="height:36px;gap:6px">All priorities <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="m4 5.5 3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="filter-pill" style="height:36px;gap:8px">Follow-up <span class="tg on" style="transform:scale(.85)"></span></span></div><div style="border:1px dashed var(--border);border-radius:16px;padding:14px 16px;font-size:12.5px;color:var(--muted-fg-soft)">Table card — a separate component, 12–16px below the toolbar</div></div>',
  spec: [["Placement","standalone toolbar ABOVE the table card — never inside it"],["Gap to table","spacing-lg 12 / spacing-xl 16"],["Search pill","36px, rounded-full, Gray/100 bg, borderless, 14px icon"],["Search focus","brand ring (2px @35%)"],["Dropdown filter","36px rounded-full, 1px border, 13px Medium current-value label + 14px chevron"],["Toggle filter","bordered pill: 13px label + 36×20 toggle"],["Quick chips","32px single-select pills"],["Applied filter","brand-light bg + Brand/700 SemiBold"]],
  dos: ["Keep the toolbar one shared component reused across list screens","Dropdown filters read as their current value (\u201cOpen\u201d, \u201cAll priorities\u201d)","Reflect active filters in the results count line"],
  donts: ["Never render search or filters inside the table card","No search in the topbar — search is contextual per page","Don\u2019t use the accent for more than applied filters"],
  code: '<!-- Toolbar: its own component, ABOVE the table card -->\n<div class="flex items-center gap-2.5 flex-wrap">\n  <label class="flex items-center gap-2 h-9 px-4 rounded-full bg-muted text-muted-foreground grow max-w-md\n    focus-within:ring-2 focus-within:ring-ring/35">\n    <Search size={14} strokeWidth={1.5} />\n    <input class="bg-transparent outline-none text-[13.5px] w-full" placeholder="Search member, category, ID…" />\n  </label>\n  <button class="h-9 px-3.5 rounded-full border border-border text-[13px] font-medium hover:bg-muted\n    inline-flex items-center gap-1.5">Open <ChevronDown size={14} /></button>\n  <label class="h-9 px-3.5 rounded-full border border-border text-[13px] font-medium inline-flex items-center gap-2">\n    Follow-up <Switch />\n  </label>\n</div>\n\n<!-- Table: separate card, 12–16px below -->\n<div class="mt-3 rounded-2xl border border-border bg-card overflow-hidden"> … </div>'
},
{
  slug: "tabs", name: "Tabs",
  lede: "Underline tabs on a hairline baseline. The 2px brand underline marks the active tab — the only accent on the row.",
  demo: '<div class="tabs"><span class="tab active">Overview</span><span class="tab">Activity</span><span class="tab">Details</span><span class="tab">Settings</span></div>',
  spec: [["Item","14px Medium, Gray/500"],["Active item","ink text, SemiBold, 2px Brand/500 underline"],["Row","22px gap, 1px hairline baseline"],["Padding","10px vertical per item"]],
  dos: ["Use tabs for peer views of one entity; use the sidebar for navigation between entities","Keep to 2–6 tabs; collapse extras into a \"More\" menu"],
  donts: ["No pill-style or boxed tabs — underline only","Don't color inactive tabs with the accent"],
  code: '<div class="flex gap-[22px] border-b border-border px-1">\n  <button class="py-2.5 text-sm font-semibold text-foreground border-b-2 border-primary -mb-px">Overview</button>\n  <button class="py-2.5 text-sm font-medium text-muted-foreground border-b-2 border-transparent -mb-px\n    hover:text-foreground">Activity</button>\n</div>'
},
{
  slug: "pills", name: "Pills & badges",
  lede: "Status carried in form: the light-tint recipe — 50-tint background, 700 text, 500 dot (dark mode: 900 background, 300 text). Tone maps are fixed across tenants; centralize them in one module.",
  demo: '<span class="pill" style="background:var(--t-brand-bg);color:var(--t-brand-fg)"><span class="dot" style="background:var(--t-brand-dot)"></span>Active</span><span class="pill" style="background:var(--t-warn-bg);color:var(--t-warn-fg)"><span class="dot" style="background:var(--t-warn-dot)"></span>Pending</span><span class="pill" style="background:var(--t-err-bg);color:var(--t-err-fg)"><span class="dot" style="background:var(--t-err-dot)"></span>Overdue</span><span class="pill" style="background:var(--t-succ-bg);color:var(--t-succ-fg)"><span class="dot" style="background:var(--t-succ-dot)"></span>Done</span><span class="pill" style="background:var(--t-gblue-bg);color:var(--t-gblue-fg)"><span class="dot" style="background:var(--t-gblue-dot)"></span>Medium</span><span class="pill" style="background:var(--t-gray-bg);color:var(--t-gray-fg)"><span class="dot" style="background:var(--t-gray-dot)"></span>Low</span>',
  spec: [["Shape","rounded-full, 3.5px × 10px padding"],["Text","12px SemiBold"],["Dot","6px, the 500 of the scale"],["Recipe (light)","bg 50 · text 700 · dot 500"],["Recipe (dark)","bg 900 · text 300 · dot 500"],["Priority tones","Critical=Error · High=Warning · Medium=Grayblue · Low=Gray"]],
  dos: ["Import pills from the shared module — one tone map per app","Pair every tone with its dark twin"],
  donts: ["Never hand-pick new status colors","No borders on pills (border variant exists only for priority chips if needed)"],
  code: '<span class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full\n  bg-warning-50 text-warning-700 dark:bg-warning-900 dark:text-warning-300 text-xs font-semibold">\n  <i class="w-1.5 h-1.5 rounded-full bg-warning-500"></i> Pending\n</span>'
},
{
  slug: "avatars", name: "Avatars",
  lede: "Neutral gray for all people: Gray/300 fill with Gray/500 Bold two-letter initials. Personal color is deliberately absent — data, not decoration.",
  demo: '<span class="avatar">FA</span><span class="avatar">AA</span><span class="avatar avatar-40">SA</span><span class="avatar" style="width:24px;height:24px;font-size:9px">MQ</span><span class="avatar" style="background:linear-gradient(135deg,#15b79e,#067647);color:#fff">SA</span>',
  spec: [["Fill / initials","Gray/300 #D5D7DA · Gray/500 #717680 Bold"],["Dark mode","Gray/700 fill · Gray/400 initials"],["Sizes","24 sm · 32 default · 40 table rows"],["Initials","always 2 letters, Bold"],["Staff exception","Teal/500→Success/700 gradient — sidebar user block only"]],
  dos: ["Use initials() consistently (first letters of first + last name)","Keep the staff gradient exclusively in the sidebar footer"],
  donts: ["No per-person hashed colors","No photos without explicit product need — initials are the default","No shadows or borders on avatars"],
  code: '<span class="w-8 h-8 rounded-full grid place-items-center bg-gray-300 text-gray-500\n  dark:bg-gray-700 dark:text-gray-400 text-[10.5px] font-bold">FA</span>'
},
{
  slug: "table", name: "Table",
  lede: "The default data surface: two-line rows (~76px) inside a radius-16 card, uppercase caps header on a Gray/50 band, no checkboxes. A single-line ~52px compact variant survives for dashboard widgets.",
  demo: '<div class="card scroll-x" style="width:100%"><table class="demo-table"><thead><tr><th>User</th><th>Contact</th><th>Status</th><th>Assigned to</th></tr></thead><tbody><tr><td><span class="cell-person"><span class="avatar avatar-40">FA</span><span><span class="cell-name">Fatimah Al-Harbi</span><span class="cell-ids">ID 1098234571 · REF-100234</span></span></span></td><td style="font-size:13.5px;color:var(--muted-fg)">+966 50 112 2334<br>fatimah@example.com</td><td><span class="pill" style="background:var(--t-warn-bg);color:var(--t-warn-fg)"><span class="dot" style="background:var(--t-warn-dot)"></span>Pending</span></td><td style="color:var(--muted-fg)">Sarah A.</td></tr><tr><td><span class="cell-person"><span class="avatar avatar-40">AA</span><span><span class="cell-name">Abdullah Al-Ghamdi</span><span class="cell-ids">ID 1076554320 · REF-100311</span></span></span></td><td style="font-size:13.5px;color:var(--muted-fg)">+966 55 223 3445<br>abdullah@example.com</td><td><span class="pill" style="background:var(--t-succ-bg);color:var(--t-succ-fg)"><span class="dot" style="background:var(--t-succ-dot)"></span>Active</span></td><td style="color:var(--muted-fg)">Sarah A.</td></tr></tbody></table><div class="table-foot"><span class="tabular">Showing 1 to 2 of 248</span><span class="pager"><button>‹</button><button class="on">1</button><button>2</button><button>›</button></span></div></div>',
  spec: [["Container","card radius-2xl 16, 1px border, clipped"],["Toolbar","separate component above the card — 12–16px gap"],["Header","11px SemiBold UPPERCASE +7%, Gray/500, on Gray/50 band"],["Rows","two-line ~76px · compact 52px"],["Identity cell","40px avatar + name 15px SemiBold + ID line 13px Gray/500"],["Row hover","muted/60 wash"],["Selection","no checkboxes by default"],["Footer","\"Showing X to Y of Z\" tabular + 30px pager chips"]],
  dos: ["Right-align numeric/meta columns; keep all numbers tabular","Collapse secondary data into the two-line cells instead of adding columns","Cap the table's card at the 1440px content width"],
  donts: ["Never embed the search/filter toolbar inside the table card — it\u2019s a separate component above it","No zebra striping — hairlines and hover do the work","Don't add checkboxes unless bulk actions ship with them","No horizontal scroll on desktop for primary tables — cut columns instead"],
  code: '<div class="rounded-2xl border border-border overflow-hidden bg-card">\n  <table class="w-full text-sm">\n    <thead><tr class="bg-muted-soft text-muted-foreground">\n      <th class="text-start px-5 py-3 text-[11px] font-semibold uppercase tracking-wider">User</th>\n      …\n    </tr></thead>\n    <tbody>\n      <tr class="border-t border-border hover:bg-muted/60">\n        <td class="px-5 py-3.5"> <!-- avatar + two-line identity --> </td>\n      </tr>\n    </tbody>\n  </table>\n</div>'
},
{
  slug: "kpi", name: "KPI card",
  lede: "Label, one big tabular number, a tinted delta chip, and a brand sparkline. The metric is the hero — everything else stays quiet.",
  demo: '<div class="card kpi"><span class="kpi-label">Active users</span><div style="display:flex;align-items:center;justify-content:space-between;gap:12px"><div style="display:flex;align-items:center;gap:10px"><span class="kpi-value tabular">248</span><span class="kpi-delta">▲ 12%</span></div><svg width="96" height="32" viewBox="0 0 96 32"><polyline points="0,24 12,20 24,22 36,14 48,17 60,10 72,12 84,6 96,8" fill="none" stroke="var(--primary)" stroke-width="1.75" stroke-linecap="round"/><circle cx="96" cy="8" r="2.5" fill="var(--primary)"/></svg></div></div>',
  spec: [["Label","13px Medium Gray/600"],["Number","display-sm 30px Bold, tabular"],["Delta chip","12px SemiBold, success/error light recipe"],["Sparkline","Brand/500, 1.75 stroke, endpoint dot"],["No data","\"No data\" gray pill instead of an empty chart"]],
  dos: ["Compare deltas against a stated period (\"vs last week\")","Use the error tone for negative deltas of bad metrics only — direction ≠ color"],
  donts: ["No secondary axes or legends inside a KPI card","Don't animate numbers counting up"],
  code: '<div class="rounded-2xl border border-border bg-card p-5 flex flex-col gap-2">\n  <span class="text-[13px] font-medium text-muted-foreground">Active users</span>\n  <div class="flex items-center gap-2.5">\n    <span class="text-[30px] font-bold tabular-nums tracking-tight">248</span>\n    <span class="px-2 py-0.5 rounded-full bg-success-50 text-success-700 text-xs font-semibold">▲ 12%</span>\n  </div>\n</div>'
},
{
  slug: "dialog", name: "Dialog",
  lede: "Radius-16 card with the system's one big shadow. Title, labeled fields, actions right-aligned — ghost then primary.",
  demo: '<div class="dialog-demo"><h3>Invite a user</h3><div class="field"><label for="dlg-email">Email</label><input id="dlg-email" class="input" value="name@company.com" readonly></div><div style="display:flex;justify-content:flex-end;gap:8px"><button class="btn btn-ghost btn-sm">Cancel</button><button class="btn btn-primary btn-sm">Invite</button></div></div>',
  spec: [["Container","radius-2xl 16, 1px border, max-w 400–480"],["Shadow","0 16px 48px rgba(10,13,18,.16) — allowed here"],["Title","20px Bold (text-xl)"],["Fields","13px SemiBold label above 40px input"],["Actions","right-aligned, ghost + primary, 36px"],["Motion","200ms fade + scale from 0.98"]],
  dos: ["One primary action per dialog; destructive confirms use the destructive button","Focus the first field on open; Esc closes; trap focus inside"],
  donts: ["No stacked dialogs","Don't use dialogs for content that deserves a page or drawer"],
  code: '<div class="rounded-2xl border border-border bg-card shadow-dialog max-w-md p-6 flex flex-col gap-3.5">\n  <h3 class="text-xl font-bold">Invite a user</h3>\n  <label class="text-[13px] font-semibold">Email\n    <input class="mt-1.5 h-10 w-full rounded-lg border border-input px-3 text-sm\n      focus:border-primary focus:ring-2 focus:ring-ring/35 outline-none" />\n  </label>\n  <div class="flex justify-end gap-2">\n    <button class="h-9 px-3.5 rounded-xl text-sm font-semibold hover:bg-muted">Cancel</button>\n    <button class="h-9 px-3.5 rounded-xl bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary-hover">Invite</button>\n  </div>\n</div>'
},
{
  slug: "inputs", name: "Inputs",
  lede: "One input frame everywhere: 40px, radius-md 8, Gray/300 border. Labels sit above; help and errors sit below; focus is the brand ring.",
  demo: '<div class="field"><label>Default</label><input class="input" placeholder="Full name"><span class="help">Help text — 12.5px Gray/500.</span></div><div class="field"><label>Error</label><input class="input is-error" value="05x-badphone" readonly><span class="field-error">Enter a valid phone number.</span></div><div class="field"><label>Disabled</label><input class="input" value="REF-100234" disabled></div>',
  spec: [["Frame","40px · radius-md 8 · 1px Gray/300 (borders/secondary)"],["Text","14px · placeholder Gray/500"],["Label","13px SemiBold, above"],["Help / error","12.5px below · error text Error/600"],["Focus","brand border + 2px ring @35%"],["Disabled","Gray/50 fill · Gray/400 text"],["Selects & pickers","identical frame"]],
  dos: ["Validate on blur, not per keystroke","Keep forms single-column, capped at 768px"],
  donts: ["Never use placeholders as labels","Don't color help text — gray only; the error state owns red"],
  code: '<label class="flex flex-col gap-1.5 text-[13px] font-semibold">Full name\n  <input placeholder="e.g. Sarah" class="h-10 rounded-lg border border-input bg-card px-3 text-sm font-normal\n    placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-ring/35 outline-none\n    disabled:bg-muted-soft disabled:text-muted-foreground" />\n  <span class="text-[12.5px] font-normal text-muted-foreground">Help text.</span>\n</label>'
},
{
  slug: "selection", name: "Selection controls",
  lede: "Checkbox, radio, and toggle share the accent-when-on rule: Brand/500 fill or track when selected, neutral gray frames otherwise.",
  demo: '<span class="ctl-row"><span class="cb on">✓</span>Checkbox</span><span class="ctl-row"><span class="cb"></span>Unchecked</span><span class="ctl-row"><span class="radio on"></span>Radio</span><span class="ctl-row"><span class="radio"></span>Unselected</span><span class="ctl-row"><span class="tg on"></span>On</span><span class="ctl-row"><span class="tg"></span>Off</span>',
  spec: [["Checkbox","18px, radius-xs 4; checked = Brand/500 + white check"],["Radio","18px; selected = brand ring + 8px dot"],["Toggle","36×20 full-radius; on = Brand/500 track, off = Gray/200"],["Label","14px, 10px gap"],["Focus","2px brand ring @35%"]],
  dos: ["Toggle = instant effect; checkbox = takes effect on save","Click targets include the label"],
  donts: ["No indeterminate radios; use a checkbox for tri-state","Don't mix toggles and checkboxes in one group"],
  code: '<label class="inline-flex items-center gap-2.5 text-sm">\n  <input type="checkbox" class="w-[18px] h-[18px] rounded border-input text-primary\n    focus:ring-2 focus:ring-ring/35" />\n  Email me updates\n</label>'
},
{
  slug: "feedback", name: "Alerts & toasts",
  lede: "Inline alerts use the light-tint recipe in four tones. Toasts share one card anatomy — radius-16, 20px padding, the dialog shadow, top-end stack, 6s auto-dismiss — in two kinds: standard tone toasts, and the notification toast where the whole card is the click target.",
  demo: '<div style="display:flex;flex-direction:column;gap:10px;width:100%"><div class="alert" style="background:var(--accent-tint);color:var(--accent-tint-fg)"><span>◆</span><span><strong>Info</strong> — sync runs nightly at 02:00 AST.</span></div><div class="alert" style="background:var(--t-succ-bg);color:var(--t-succ-fg)"><span>✓</span><span><strong>Success</strong> — 24 records imported.</span></div><div class="alert" style="background:var(--t-warn-bg);color:var(--t-warn-fg)"><span>▲</span><span><strong>Warning</strong> — 3 records are missing required fields.</span></div><div class="alert" style="background:var(--t-err-bg);color:var(--t-err-fg)"><span>✕</span><span><strong>Error</strong> — import failed, file exceeds 10 MB.</span></div><div class="toast"><span style="color:#079455;font-size:17px;line-height:1.2">✓</span><span style="min-width:0"><span class="toast-title">Changes saved</span><span class="toast-desc" style="display:block">Notification preferences updated.</span></span><span class="toast-x" aria-hidden="true">✕</span></div><div class="toast clickable" role="button" tabindex="0"><span style="color:var(--primary);font-size:17px;line-height:1.2">◆</span><span style="min-width:0"><span class="toast-title">New message from Sarah A.</span><span class="toast-desc" style="display:block">The whole card is the tap target — click dismisses and opens the conversation.</span></span><span class="toast-x" aria-hidden="true">✕</span></div></div>',
  spec: [["Alert","radius 10 · 12\u201314px padding · 13px text"],["Alert tones","Info=brand-light · Success/Warning/Error = 50 bg + 700 text"],["Toast card","card bg · radius-2xl 16 · 1px border · 20px padding · width 420"],["Toast shadow","0 16px 48px @16% — the dialog shadow (allowed)"],["Position","top-end · 20px offset · 12px stack gap · dir-aware (RTL)"],["Duration","6s auto-dismiss · 24px close button always, top end corner"],["Toast type","title 15px SemiBold + description 13px muted · 20px tone icon (600, dark 400)"],["Notification toast","no CTA — whole card clickable · hover muted/40 · Enter/Space activate"]],
  dos: ["Errors say what went wrong and how to fix it","Toast for confirmations; alert for state the user must act on","Use the notification toast for live events — click dismisses, then navigates; keep the X independent (stopPropagation)"],
  donts: ["No full-width page banners for transient events","Never auto-dismiss errors","Don\u2019t add action buttons to a notification toast — the card itself is the action"],
  code: '// Toaster — once at app root (sonner)\n<Toaster position="top-right" dir="auto" offset={20} gap={12} duration={6000} closeButton\n  style={{ "--width": "420px" }} />\n\n// standard tones\ntoast.success("Changes saved", { description: "Notification preferences updated." });\n\n// notification toast — the WHOLE card is the click target (no CTA)\nnotifyToast({\n  title: "New message from Sarah A.",\n  description: "Tap to open the conversation.",\n  onClick: () => navigate("/inbox/" + id),\n});\n\n// card recipe: rounded-2xl border border-border bg-card p-5 pe-11\n//   shadow-[0_16px_48px_rgba(10,13,18,0.16)] · icon 20px tone-600 (dark 400)\n//   title text-[15px] font-semibold · description text-[13px] text-muted-foreground'
},
{
  slug: "loading", name: "Loading & empty states",
  lede: "Skeletons for content that is coming; a muted spinner for regions; a friendly empty state when nothing matches. Never a blank pane.",
  demo: '<div style="display:flex;flex-direction:column;gap:16px;width:100%"><div style="display:flex;flex-direction:column;gap:8px;max-width:420px"><div class="skel" style="width:60%"></div><div class="skel" style="width:85%"></div><div class="skel" style="width:40%"></div></div><span class="ctl-row" style="color:var(--muted-fg)"><span class="spin"></span>Loading…</span><div class="card empty"><div class="empty-icon">◎</div><b>No results match these filters</b><span>Try widening the date range or clearing a filter.</span></div></div>',
  spec: [["Skeleton","12px bars, radius 6, muted fill, 1.6s shimmer"],["Spinner","Loader2 18px, muted, centered in its region"],["Empty state","44px muted icon circle + 14px Bold heading + 13px gray hint"],["Reduced motion","shimmer and pulses disabled"]],
  dos: ["Skeletons mirror the final layout (same heights)","Empty states offer the next action (clear filters, create item)"],
  donts: ["No full-screen spinners for partial loads","Don't stack a spinner on top of skeletons"],
  code: '<div class="h-3 w-3/5 rounded-md bg-muted animate-pulse"></div>\n\n<div class="flex flex-col items-center gap-2.5 py-10 text-center">\n  <span class="w-11 h-11 rounded-full bg-muted grid place-items-center text-muted-foreground">\n    <SearchX size={20} strokeWidth={1.75} />\n  </span>\n  <b class="text-sm font-bold">No results match these filters</b>\n  <span class="text-[13px] text-muted-foreground">Try widening the date range.</span>\n</div>'
},
{
  slug: "sidebar", name: "Sidebar",
  lede: "The sidebar owns the brand and the user identity. 224px (64px collapsed), white, one hairline, monochrome states — this site's own sidebar is the reference implementation.",
  demo: '<div style="display:flex;gap:16px;align-items:flex-start"><div style="width:200px;border:1px solid var(--border);border-radius:12px;overflow:hidden;background:var(--card)"><div style="height:56px;display:flex;align-items:center;justify-content:space-between;padding:0 14px;border-bottom:1px solid var(--border)"><span class="sb-logo" style="height:28px;font-size:12px">Logo</span><svg width="18" height="18" viewBox="0 0 18 18" fill="none" style="color:var(--muted-fg-soft)"><rect x="2.25" y="2.25" width="13.5" height="13.5" rx="1.5" stroke="currentColor" stroke-width="1.3"/><path d="M6.75 2.25v13.5" stroke="currentColor" stroke-width="1.3"/><path d="M12 11.25 9.75 9 12 6.75" stroke="currentColor" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"/></svg></div><div style="padding:10px;display:flex;flex-direction:column;gap:2px"><span class="sb-group-label" style="padding:0 10px 5px">Section</span><span class="nav-item active" style="height:36px;font-size:13.5px">Item</span><span class="nav-item" style="height:36px;font-size:13.5px">Item</span></div><div style="border-top:1px solid var(--border);padding:10px;display:flex;align-items:center;gap:9px"><span class="avatar" style="background:linear-gradient(135deg,#15b79e,#067647);color:#fff;width:28px;height:28px;font-size:10px">SA</span><span style="font-size:12.5px;font-weight:600">Sarah A.<span style="display:block;font-size:10.5px;font-weight:400;color:var(--muted-fg-soft)">Title</span></span></div></div></div>',
  spec: [["Width","224px · 64px collapsed · 200ms transition"],["Header","64px, bottom hairline; logo 24px · collapsed: collapse button only, no logo"],["Groups","24px apart; 11px caps labels, hidden when collapsed"],["Nav item","40px, radius-lg 10, 18px icon, 14px Medium"],["States","hover Gray/50 · active Gray/100 pill + Gray/900 ink"],["Collapse button","32×32, panel icon mirrors when collapsed"],["User block","bottom-pinned: 32px gradient avatar + name + role + ⋮ menu (Log out inside)"],["Content cap","tab content max 1440px centered"]],
  dos: ["The mark carries the brand — no product-name text on the rail","Collapsed items get tooltips; spacing alone separates collapsed groups"],
  donts: ["Never accent-color the active item — gray pill only","No 'Powered by' rows or extra footers"],
  code: '<aside class="w-56 h-screen sticky top-0 flex flex-col bg-card border-e border-border\n  transition-[width] duration-200">\n  <div class="h-16 flex items-center justify-between px-4 border-b border-border">\n    {!collapsed && <img src={logo} alt={appName} class="h-6 w-auto" />}\n    <button aria-label="Collapse" class="w-8 h-8 rounded-lg grid place-items-center text-muted-foreground hover:bg-muted">\n      <PanelLeftClose size={18} strokeWidth={1.75} />\n    </button>\n  </div>\n  <nav class="flex-1 p-3 flex flex-col gap-6 overflow-y-auto"> … </nav>\n  <footer class="border-t border-border p-3"> <!-- user block --> </footer>\n</aside>'
},
{
  slug: "topbar", name: "Topbar",
  lede: "56px of utilities and nothing else: language and notifications on the end side. No search, no theme switcher, no brand, no avatar.",
  demo: '<div style="width:100%;height:56px;display:flex;align-items:center;justify-content:flex-end;gap:6px;padding:0 16px;background:var(--card);border:1px solid var(--border);border-radius:12px"><span style="height:28px;padding:0 10px;border-radius:9999px;background:var(--muted);font-size:12px;font-weight:600;color:var(--muted-fg);display:inline-flex;align-items:center">EN · ع</span><span style="width:32px;height:32px;border-radius:8px;display:grid;place-items:center;color:var(--muted-fg-soft);position:relative">🔔&#xFE0E;<i style="position:absolute;top:6px;right:6px;width:7px;height:7px;border-radius:50%;background:#f04438;border:1.5px solid var(--card)"></i></span></div>',
  spec: [["Height","56px · bottom hairline"],["End cluster","language pill (28px) + bell (32px icon button)"],["Badge","7px Error/500 dot, ringed in card color"],["Excluded","search · theme switcher · brand · avatar"]],
  dos: ["Keep it stable across every page — the topbar never changes per route","Theme switching lives in Settings → Appearance"],
  donts: ["No page titles in the topbar — titles belong to the page header","No global search here; search is per-page"],
  code: '<header class="h-14 flex items-center justify-end gap-1.5 px-4 border-b border-border bg-card">\n  <button class="h-7 px-2.5 rounded-full bg-muted text-xs font-semibold text-muted-foreground">EN · ع</button>\n  <button aria-label="Notifications" class="relative w-8 h-8 rounded-lg grid place-items-center\n    text-muted-foreground hover:bg-muted">\n    <Bell size={18} strokeWidth={1.75} />\n    <i class="absolute top-1.5 end-1.5 w-[7px] h-[7px] rounded-full bg-error-500 ring-2 ring-card"></i>\n  </button>\n</header>'
},
];


/* ===================== Wellx Labs — brand system ===================== */
/* 12 sections mirroring the Wellx Labs Brand Book (v1, July 2026).
   Assets live in docs/assets/labs/; tokens in tokens/wellx-labs-tokens.json. */

var LABS_ICONS = ["accounting", "agents", "ai-suggest", "approved", "assistant", "audit", "automate", "billing", "bind-issue", "brokers", "calendar", "claims", "close", "collapse", "compliance", "copilot", "copy", "customers", "dashboard", "delete", "distribution", "doc-centre", "download", "edit", "endorsement", "expand", "filter", "finance", "flagged", "fraud-risk", "general", "health-tpa", "home", "ifrs-17", "in-review", "loss-ratio", "mailbox", "marine", "member-exp", "modular-core", "more", "motor", "new", "notifications", "overview", "party-and-data", "pending", "policy", "premium", "products", "property", "quote", "refresh", "renewals", "reporting", "reserves", "retakaful", "search", "send", "settings", "share", "signal", "sort", "star", "tat-sla", "templates", "treaties", "underwriting", "upload"];

var LABS_SPECTRUM = "linear-gradient(100deg,#F7941D,#F0366B,#7A2BE2,#2D9CFD)";

var LABS = [
{
  slug: "soul", num: "00", name: "Soul & constitution",
  lede: "The doctrine above the design system. The Brand Soul and the Constitution are canonical: they change extremely rarely, by the founders, and a visual rule never silently replaces them. If a page appears to contradict them, the page is wrong.",
  body: "<section class=\"doc\"><h2>The Brand Soul</h2><p class=\"hint\">WX-L-00 \u2014 canonical. Not a campaign line; never rewritten to suit a surface. For people managing risk: intelligence creates greater understanding and foresight. For people living with risk: protection becomes proactive, adaptive and valuable without demanding more attention from life.</p><div class=\"labs-dark\" style=\"padding:34px 28px\"><div style=\"font-family:Figtree,sans-serif;font-weight:800;font-size:26px;letter-spacing:-0.4px;color:#F5F6FA;max-width:26ch\">Insurance becomes invisible. Humans become alive.</div><p style=\"margin:14px 0 0;font-size:13px;line-height:1.7;color:#B7BDCC;max-width:64ch\">Insurance is the business of risk \u2014 complex because risk is complex, regulated because consequences matter. Labs exists to help understand complexity: better \u00b7 earlier \u00b7 with greater context \u00b7 through the lens of possibility. Risk management moves behind the scenes. Life comes forward.</p></div></section><section class=\"doc\"><h2>The Constitution \u2014 eight canonical laws</h2><p class=\"hint\">WX-L-01\u202608. Meta-rules: a constitutional law is never overridden by a design rule, token, component or deadline (WX-L-09); where a specification and a law disagree, the law governs and the specification is withdrawn (WX-L-10); new work is tested against the eight laws before it is tested against the system (WX-L-11).</p><div class=\"card\"><ol class=\"labs-ol\"><li><b>Value before technology.</b> Technology is the means; human value is the measure.</li><li><b>Build with. Never for.</b> Build what neither could create alone.</li><li><b>Know deeply. Question constantly.</b> Curiosity without expertise is uncertainty; expertise without curiosity becomes constraint.</li><li><b>Mould to possibility.</b> Build where possibility creates outcomes that matter.</li><li><b>Carry complexity. Reveal possibility.</b> The purpose of understanding risk is not simply to take less of it \u2014 it is to know where we can take more.</li><li><b>Bridge, don\u2019t disrupt.</b> Scale, trust, regulatory experience, underwriting knowledge, capital and institutional memory are not baggage.</li><li><b>Intelligence, not AI.</b> Never ask \u201cWhere can we insert AI?\u201d \u2014 ask \u201cWhat needs to be understood to make this possibility real?\u201d</li><li><b>Multiply value.</b> Value moves outward and compounds. Do not merely capture value \u2014 multiply it.</li></ol></div></section><section class=\"doc\"><h2>The Value Loop</h2><p class=\"hint\">WX-L-12 \u2014 doctrine: drawn as a closed loop, in this order, with equal weight on every stage; learning feeds back into a richer understanding of risk. WX-L-13 \u00b7 DENY: never drawn as a growth curve, a funnel, a product diagram or a consultancy flywheel.</p><div style=\"display:flex;gap:6px;flex-wrap:wrap;align-items:center\"><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">RISK</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">INTELLIGENCE</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">INSIGHT</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">POSSIBILITY</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">VALUE</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">LEARNING</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">\u21ba</span></div></section><section class=\"doc\"><h2>Six layers of authority</h2><p class=\"hint\">Each layer governs the one below. A visual implementation rule never silently replaces a constitutional belief.</p><div class=\"spec-grid\"><div class=\"spec-item\"><span>00 \u00b7 Brand Soul</span><span>Canonical</span></div><div class=\"spec-item\"><span>01 \u00b7 Constitution \u2014 the eight laws</span><span>Canonical</span></div><div class=\"spec-item\"><span>02 \u00b7 Design principles</span><span>Canonical</span></div><div class=\"spec-item\"><span>03 \u00b7 Design grammar \u2014 colour, type, signal, motion, data, density, voice, sound, composition</span><span>System specification</span></div><div class=\"spec-item\"><span>04 \u00b7 Implementation rules \u2014 tokens, components, denials</span><span>System specification</span></div><div class=\"spec-item\"><span>05 \u00b7 Governance</span><span>Canonical</span></div></div></section>"
},
{
  slug: "position", num: "01", name: "Position",
  lede: "Before the mark, the argument. The identity carries the operating layer of insurance without decorating it. Calm by default, coloured only where the machine has something to say. From the Brand Book, Release 01 \u00b7 2026 \u2014 governing, supersedes all prior guidance.",
  body: "<section class=\"doc\"><h2>The eight laws</h2><p class=\"hint\">A law is not a preference. If a design breaks one, the design is wrong.</p><div class=\"card\"><ol class=\"labs-ol\"><li><b>Calm is the default state.</b> Nothing moves, glows or saturates unless it carries information the operator needs now.</li><li><b>One signal per view.</b> A single element may claim priority. If two elements glow, the operator trusts neither.</li><li><b>Colour is evidence, not decoration.</b> Saturated colour means the system has computed something. Chrome, layout and body copy stay neutral, always.</li><li><b>The mark is fixed.</b> The geometry, proportion and width modulation of the bionic mark and wordmark never change.</li><li><b>Density is a courtesy.</b> Operators read faster than they scroll. Compress rows, never words.</li><li><b>Provenance travels with the number.</b> Any figure the machine produced shows where it came from and how sure it is.</li><li><b>Silence is a design decision.</b> Absence of sound, motion or colour is specified as deliberately as their presence.</li><li><b>The system expands by registration.</b> New products take a slot in the existing system. They do not earn new hues, faces or marks.</li></ol></div></section><section class=\"doc\"><h2>The seven principles</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>WX-P-01</span><span>Legibility before beauty. If a choice reduces reading speed for an operator, it loses.</span></div><div class=\"spec-item\"><span>WX-P-02</span><span>Hierarchy by weight, not by hue. Size, weight and space carry structure; colour carries meaning.</span></div><div class=\"spec-item\"><span>WX-P-03</span><span>Borders on dark, shadows on light. Separation technique follows the field, never taste.</span></div><div class=\"spec-item\"><span>WX-P-04</span><span>Mono measures. Anything countable, timestamped or identified is set in IBM Plex Mono.</span></div><div class=\"spec-item\"><span>WX-P-05</span><span>Motion explains causality. An element moves only to show where it came from.</span></div><div class=\"spec-item\"><span>WX-P-06</span><span>Round numbers are suspicious. Display real precision; never pad a figure to look tidy.</span></div><div class=\"spec-item\"><span>WX-P-07</span><span>Every surface names itself. A screenshot out of context still says which product it is.</span></div><div class=\"spec-item\"><span>WX-P-08</span><span>Authority in tone, never dogma. The book states what is decided and names what is still being learned.</span></div></div></section><section class=\"doc\"><h2>What we are not</h2><div class=\"card dd dont\"><h3><span class=\"mark\" style=\"background:var(--destructive)\"></span>Five declined positions</h3><ul><li><b>Not a wellness brand</b> \u2014 no soft gradients, no lifestyle warmth, no rounded optimism.</li><li><b>Not a consumer fintech</b> \u2014 no neobank grammar: cards, confetti, illustrated mascots.</li><li><b>Not an enterprise incumbent</b> \u2014 no navy, no serif, no columned facade, no handshake.</li><li><b>Not an AI novelty</b> \u2014 the spectrum is not a sparkle; intelligence shows through provenance and confidence.</li><li><b>Not a design showcase</b> \u2014 this is a constraint document; nothing exists to demonstrate craft.</li></ul></div></section><section class=\"doc\"><h2>Rule identifiers</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Scheme</span><span>WX-M mark \u00b7 WX-C colour \u00b7 WX-T typography \u00b7 WX-S sound \u00b7 WX-N motion/icons/material \u00b7 WX-I interface \u00b7 WX-A applications \u00b7 WX-P principles</span></div><div class=\"spec-item\"><span>\u00b7 DENY</span><span>Suffix marking a prohibition \u2014 denials are as binding as specifications and the fastest way to review work.</span></div><div class=\"spec-item\"><span>Retirement</span><span>An identifier never changes meaning. A withdrawn rule is retired, not reused.</span></div></div></section><section class=\"doc\"><h2>Precedence & practitioners</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Precedence</span><span>The Constitution governs the system laws; a law governs a principle (the principle is amended next release). Where two principles disagree, the lower number wins.</span></div><div class=\"spec-item\"><span>Citation etiquette</span><span>\u201cThis fails WX-P-02\u201d is a review. \u201cThis feels busy\u201d is not.</span></div><div class=\"spec-item\"><span>Practitioners</span><span>Practitioners first, curious always, partners by design \u2014 Labs\u2019 foundations are products Wellx built and operated. Modes: co-build \u00b7 discovery \u00b7 observation \u00b7 experimentation \u00b7 learning \u00b7 adaptation.</span></div></div></section>"
},
{
  slug: "architecture", num: "02", name: "Brand architecture",
  lede: "One masterbrand, one descriptor layer. Wellx Labs is the Wellx masterbrand plus a technical descriptor \u2014 and the system expands by registration: four audiences, one flexing accent, no new marks.",
  body: "<section class=\"doc\"><div class=\"labs-dark\" style=\"display:flex;align-items:center;justify-content:center;padding:44px 24px\"><img src=\"assets/labs/wellx-labs-lockup-dark.png\" alt=\"Wellx Labs lockup\" style=\"width:280px;max-width:80%\"></div></section><section class=\"doc\"><h2>The four fixed points</h2><div class=\"labs-rule-grid\"><div class=\"card\"><h3>The bionic mark is fixed</h3><p>Never redraw, recolor, outline, rotate, or mirror. The ribbon\u2019s width modulation is part of the drawing \u2014 never stroke it at even weight.</p></div><div class=\"card\"><h3>The wordmark is fixed</h3><p>Never retypeset it, change its case, or alter letterspacing.</p></div><div class=\"card\"><h3>Labs is always the chip</h3><p>IBM Plex Mono 500, tracked caps (0.18em), 1px border, 4px radius, 5px gradient dot. Never in the wordmark\u2019s typeface, never stacked.</p></div><div class=\"card\"><h3>The spectrum is identity, not decoration</h3><p>It appears only in the divider, the dot, and glow fields.</p></div></div></section><section class=\"doc\"><h2>The four audiences \u2014 same system, read from four distances</h2><p class=\"hint\">Only four things flex per product: field, accent, density, name. Accent order follows distance from the person \u2014 warm nearest to life, cool nearest to the model.</p><div class=\"card scroll-x\"><table class=\"tok-table\"><thead><tr><th>Audience</th><th>Field</th><th>Density</th><th>Accent</th><th>Tool</th><th>Copy stance</th></tr></thead><tbody><tr><td>MEMBER</td><td>Dark, warm</td><td>Editorial</td><td><span class=\"sw-pair\"><span class=\"sw\" style=\"background:#F7941D\"></span><span class=\"mono\">#F7941D</span></span></td><td>Care Connect</td><td>Plain language; no ratios, no jargon</td></tr><tr><td>CORPORATE</td><td>Light, neutral</td><td>Balanced</td><td><span class=\"sw-pair\"><span class=\"sw\" style=\"background:#F0366B\"></span><span class=\"mono\">#F0366B</span></span></td><td>Workforce Console</td><td>Outcomes and cost; population, not individuals</td></tr><tr><td>INSURER</td><td>Dark, structured</td><td>Operating</td><td><span class=\"sw-pair\"><span class=\"sw\" style=\"background:#7A2BE2\"></span><span class=\"mono\">#7A2BE2</span></span></td><td>Command Center</td><td>Evidence first; confidence and provenance visible</td></tr><tr><td>BROKER</td><td>Light, structured</td><td>Operating</td><td><span class=\"sw-pair\"><span class=\"sw\" style=\"background:#2D9CFD\"></span><span class=\"mono\">#2D9CFD</span></span></td><td>Broker Desk</td><td>Position, movement, next action</td></tr></tbody></table></div><p class=\"hint\" style=\"margin-top:10px\">The Operating Core itself carries no accent \u2014 it is the field. \u201cWorkforce Console\u201d and \u201cBroker Desk\u201d are working names: the slot is fixed, the name is not. Future slots: reseller, regulator, provider, government.</p></section><section class=\"doc\"><h2>The naming lockup</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Pattern</span><span>mark + wellx + 1px accent rule + TOOL NAME in mono caps; audience label right-aligned in mono.</span></div><div class=\"spec-item\"><span>The rule</span><span>On a product surface the spectrum divider becomes a single accent rule in the audience colour. One line, one pixel, full opacity \u2014 everything else unchanged.</span></div><div class=\"spec-item\"><span>Descriptors</span><span>A product descriptor beneath a master lockup may be set in the spectrum gradient \u2014 the wordmark never is.</span></div><div class=\"spec-item\"><span>Ownership</span><span>Action accents per governance: Care Connect owns rose; Command Center owns purple (#6A2BD8 light / #9B6DFF dark). Nothing else is overridden.</span></div></div></section><section class=\"doc\"><h2>Adding a segment</h2><p class=\"hint\">1 \u00b7 Name the reader and their distance from the risk. 2 \u00b7 Choose field and density from session length, not taste. 3 \u00b7 Name the tool as a plain two-word descriptor. 4 \u00b7 Register it \u2014 nothing else in the system is edited.</p><div class=\"codeblock\"><button class=\"copy-btn\" data-copy>Copy</button><pre>WX-LABS / SEGMENT / &lt;NEXT&gt;\naccent   next unused point on the spectrum\nfield    dark | light\ndensity  editorial | balanced | operating\nlockup   wellx + accent rule + &lt;tool name&gt;\nsound    selects from the alert family. Never adds\ninherits all 8 laws \u00b7 all 7 principles \u00b7 both token sets\ndeny     new hue \u00b7 new typeface \u00b7 new mark \u00b7 second accent\ntest     does the surface still read as wellx with the name removed?</pre></div></section>"
},
{
  slug: "lockup", num: "03", name: "The Labs lockup",
  lede: "Bionic mark \u2192 wordmark \u2192 spectrum divider \u2192 LABS chip. One arrangement, two colour modes, no exceptions \u2014 and a construction that is described, not redrawn.",
  body: "<section class=\"doc\"><h2>Two colour modes</h2><p class=\"hint\">Dark files on fields below 30% luminance (#050509 \u2192 #101119); light files above (#FFFFFF \u2192 #F6F7FB). No fourth form: no tint, no knockout, no outline. The spectrum symbol is identity art only \u2014 never in a lockup.</p><div class=\"labs-pair\"><div class=\"labs-dark\" style=\"display:flex;align-items:center;justify-content:center;padding:36px 20px\"><img src=\"assets/labs/wellx-labs-lockup-dark.png\" alt=\"Lockup on dark\" style=\"width:240px;max-width:85%\"></div><div class=\"labs-light\" style=\"display:flex;align-items:center;justify-content:center;padding:36px 20px\"><img src=\"assets/labs/wellx-labs-lockup-light.png\" alt=\"Lockup on light\" style=\"width:240px;max-width:85%\"></div></div></section><section class=\"doc\"><h2>Anatomy</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Order</span><span>Mark \u2192 wordmark \u2192 divider \u2192 chip. Left to right, always.</span></div><div class=\"spec-item\"><span>Spacing</span><span>18px at 26px mark height; scales proportionally. Wordmark baseline aligns to the ribbon axis.</span></div><div class=\"spec-item\"><span>Divider</span><span>1px wide, mark height \u2212 2px, vertical spectrum gradient.</span></div><div class=\"spec-item\"><span>Chip</span><span>1px border, 4px radius, 5px gradient dot, \u201cLABS\u201d in Plex Mono 500 tracked 0.18em.</span></div></div></section><section class=\"doc\"><h2>Construction (described, never rebuilt)</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Cage</span><span>16 \u00d7 10 units; ribbon inscribed in 14 \u00d7 7.5. 1 unit = cage height \u00f7 10.</span></div><div class=\"spec-item\"><span>Ribbon</span><span>Width modulates 0.4 \u2192 1.9 units \u2014 thinnest at the left taper, widest at the second crest.</span></div><div class=\"spec-item\"><span>Crossings</span><span>Two, at 4.6 and 9.2 units \u2014 always visible overlaps, never merged.</span></div><div class=\"spec-item\"><span>Loop</span><span>Spans 4.1 units, closes to a 0.5-unit aperture \u2014 never fully closed.</span></div><div class=\"spec-item\"><span>Axis</span><span>Align the mark to the ribbon axis, not its bounding box.</span></div><div class=\"spec-item\"><span>Files</span><span>Use the released files. A redrawn ribbon is a wrong mark even when the numbers agree.</span></div></div></section><section class=\"doc\"><h2>Clear space & minimum size</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Clear space</span><span>1\u00d7 chip height on all sides, measured from the cage. Neighbours\u2019 glow and shadow count as intrusion.</span></div><div class=\"spec-item\"><span>Minimums</span><span>Full lockup 180px / 45mm \u00b7 mark + chip 96px / 24mm \u00b7 mark alone 28px / 7mm \u00b7 loop only 16px / 4mm. Below 20px the crossings fill in \u2014 use the terminal loop alone.</span></div><div class=\"spec-item\"><span>Reduction</span><span>Drop components in order (chip \u2192 divider \u2192 wordmark \u2192 ribbon, keeping the loop) \u2014 never shrink below minimums, never scale non-uniformly.</span></div><div class=\"spec-item\"><span>Placement</span><span>Top-left default \u00b7 top-centre splash/boot only \u00b7 bottom-left signature on covers \u00b7 centred-large title pages. Margin 2\u00d7X print, 1\u00d7X product; aligns to column one, never floats.</span></div></div></section><section class=\"doc\"><h2>Misuse \u2014 ten rejections</h2><div class=\"card dd dont\"><h3><span class=\"mark\" style=\"background:var(--destructive)\"></span>Never</h3><ul><li>Spectrum inside the wordmark (descriptors may carry it; the wordmark never)</li><li>Even-weight ribbon \u2014 redrawing the mark as a uniform stroke</li><li>Chip without the dot, or stacked above the wordmark</li><li>The spectrum symbol inside a lockup</li><li>Non-uniform scaling \u2014 fit the container to the lockup</li><li>Effects: drop shadow, outer glow, bevel, blur, or a drawn container</li><li>Rotation or mirroring \u2014 the ribbon runs left to right, level</li><li>Lockup directly on photography \u2014 use a solid plate at full opacity</li><li>Retypeset wordmark \u2014 use the file</li><li>A second accent on a product lockup</li></ul></div></section>"
},
{
  slug: "fragments", num: "04", name: "Fragments",
  lede: "The mark is fixed. Its parts are not. The ribbon decomposes into three licensed fragments \u2014 crest, loop, taper \u2014 with seven sanctioned uses. Fragments organise; only the lockup signs.",
  body: "<section class=\"doc\"><h2>The three fragments</h2><p class=\"hint\">A fragment is furniture, never a signature. Three fragments only \u2014 no arcs, no half-marks, no cropped ribbons.</p><div class=\"labs-rule-grid\"><div class=\"card\"><h3>The crest</h3><p>A rule that swells and thins \u2014 dividers, underlines, wayfinding routes. Monochrome.</p></div><div class=\"card\"><h3>The loop</h3><p>A container \u2014 frames, encircles, tracks a progress. Keeps its open aperture; never closed into a circle. Monochrome (a progress track may take one accent).</p></div><div class=\"card\"><h3>The taper</h3><p>A point \u2014 marks, bullets, locates. The only fragment that may carry a spectrum hue.</p></div></div></section><section class=\"doc\"><h2>Seven sanctioned uses</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>1 \u00b7 Watermark</span><span>Loop at 4\u20136% ink (light) / 5\u20138% paper (dark), bleeding off exactly two adjacent edges, min height 1.2\u00d7 page, one per page.</span></div><div class=\"spec-item\"><span>2 \u00b7 Pattern tiles</span><span>Four tiles on a 16-unit repeat: ribbon repeat, loop field, signal grid, taper field. Low-saturation spectrum allowed; never the whole mark.</span></div><div class=\"spec-item\"><span>3 \u00b7 App icon</span><span>Tile #050509, radius 22% of width, mark at 70% on the ribbon axis. 1024 / 180 / 64 / 32; at \u226416px the loop alone at 42%, 2px stroke.</span></div><div class=\"spec-item\"><span>4 \u00b7 System avatars</span><span>Non-human actors only. Loop 30% paper 3px + a taper hashed from the entity id \u2014 ten positions, five hues, fifty stable identities. Humans use photos or initials.</span></div><div class=\"spec-item\"><span>5 \u00b7 Page furniture</span><span>Section rule (16px taper + 3px modulating hairline, 55% ink) \u00b7 the spectrum identity rule once per document \u00b7 step indicators (11px tapers, current 18px) \u00b7 progress = loop as track, 1.1s/rev \u00b7 bullets are 10px tapers \u2014 never a dash, chevron, tick or emoji.</span></div><div class=\"spec-item\"><span>6 \u00b7 Environmental</span><span>Above 2m fragments may bleed and crop. Brushed aluminium, ink-black acrylic, routed reveal. Indirect light; one warm-lit taper may be the only colour in a space. Crest = 12mm wayfinding line. Lockup once per space, at eye height.</span></div><div class=\"spec-item\"><span>7 \u00b7 Animated states</span><span>IDLE mark at 40%, still \u00b7 THINKING the loop alone rotating 1.1s linear in violet \u00b7 RESOLVED ribbon fades in 240ms. Rotation and opacity only; one animated fragment per view; reduced motion = final frame.</span></div></div></section><section class=\"doc\"><h2>Denials</h2><div class=\"card dd dont\"><h3><span class=\"mark\" style=\"background:var(--destructive)\"></span>Never</h3><ul><li>No fragment as signature \u2014 a loop in a deck corner is not a logo</li><li>No new fragments \u2014 no arcs, crescents, half-ribbons, isolated crossings</li><li>No recomposition into a new mark, monogram, ligature or emblem</li><li>The loop never encircles a letter, number or initial \u2014 not a badge frame</li><li>A loop is never a chart, gauge, donut or KPI dial</li><li>Tapers repeat only to count something \u2014 never as scatter or sparkle</li><li>No surface is named after a fragment \u2014 products take descriptors, not symbols</li></ul></div></section>"
},
{
  slug: "color", num: "05", name: "Color",
  lede: "Dark chrome, spectral identity. ~90% ink and surface, ~8% text tones, ~2% saturated colour \u2014 with a hard ceiling of 4% saturated pixels on any product surface. The spectrum means identity or intelligence; nothing else.",
  body: "<section class=\"doc\"><h2>The spectrum</h2><div class=\"labs-spectrum-bar\" style=\"background:linear-gradient(100deg,#F7941D,#F0366B,#7A2BE2,#2D9CFD)\"><span>SPECTRUM \u00b7 STOPS 0 / 35 / 68 / 100 \u00b7 #F7941D \u2192 #F0366B \u2192 #7A2BE2 \u2192 #2D9CFD</span></div><div class=\"spec-grid\"><div class=\"spec-item\"><span>Angles</span><span>90deg horizontal rules \u00b7 180deg dividers \u00b7 135deg fills. Never truncate, re-order or add a stop.</span></div><div class=\"spec-item\"><span>Five permitted uses</span><span>1 the lockup divider \u00b7 2 the chip dot \u00b7 3 AI-surface frames/badges \u00b7 4 brand art & glow fields (dark only) \u00b7 5 product descriptors. Anything else takes the accent or a neutral.</span></div></div></section><section class=\"doc\"><h2>Ink \u2014 dark environment (brand + insurer)</h2><p class=\"hint\">Separation by border, never shadow.</p><div class=\"labs-swatches\"><div class=\"labs-swatch\" style=\"background:#050509;color:#fff\"><b>VOID</b><span>#050509</span></div><div class=\"labs-swatch\" style=\"background:#07070C;color:#fff\"><b>CANVAS</b><span>#07070C</span></div><div class=\"labs-swatch\" style=\"background:#101119;color:#fff\"><b>SURFACE</b><span>#101119</span></div><div class=\"labs-swatch\" style=\"background:#191A28;color:#fff\"><b>RAISED</b><span>#191A28</span></div><div class=\"labs-swatch\" style=\"background:#262837;color:#fff\"><b>BORDER</b><span>#262837</span></div><div class=\"labs-swatch\" style=\"background:#3A3C51;color:#fff\"><b>BORDER STRONG</b><span>#3A3C51</span></div><div class=\"labs-swatch\" style=\"background:#F5F6FA;color:#0B0B12;border:1px solid var(--border)\"><b>TEXT</b><span>#F5F6FA</span></div><div class=\"labs-swatch\" style=\"background:#B7BDCC;color:#0B0B12\"><b>TEXT 2ND</b><span>#B7BDCC</span></div><div class=\"labs-swatch\" style=\"background:#7E8698;color:#0B0B12\"><b>MUTED</b><span>#7E8698</span></div></div></section><section class=\"doc\"><h2>Paper \u2014 light environment (product)</h2><p class=\"hint\">Separation by shadow and hairline; textures at 6\u201312%.</p><div class=\"labs-swatches\"><div class=\"labs-swatch\" style=\"background:#F6F7FB;color:#0B0B12;border:1px solid var(--border)\"><b>CANVAS</b><span>#F6F7FB</span></div><div class=\"labs-swatch\" style=\"background:#FFFFFF;color:#0B0B12;border:1px solid var(--border)\"><b>SURFACE</b><span>#FFFFFF</span></div><div class=\"labs-swatch\" style=\"background:#EEF1F6;color:#0B0B12;border:1px solid var(--border)\"><b>SUNKEN</b><span>#EEF1F6</span></div><div class=\"labs-swatch\" style=\"background:#E4E7EE;color:#0B0B12;border:1px solid var(--border)\"><b>BORDER</b><span>#E4E7EE</span></div><div class=\"labs-swatch\" style=\"background:#CBD1DC;color:#0B0B12\"><b>BORDER STRONG</b><span>#CBD1DC</span></div><div class=\"labs-swatch\" style=\"background:#0B0B12;color:#fff\"><b>TEXT</b><span>#0B0B12</span></div><div class=\"labs-swatch\" style=\"background:#454B59;color:#fff\"><b>TEXT 2ND</b><span>#454B59</span></div><div class=\"labs-swatch\" style=\"background:#868D9D;color:#fff\"><b>MUTED</b><span>#868D9D</span></div></div></section><section class=\"doc\"><h2>Action & signal</h2><p class=\"hint\">One primary action per view. Signal magenta is AI and identity only \u2014 never a button, identical across products. Command Center overrides the action accent to #6A2BD8 light / #9B6DFF dark; Care Connect keeps rose. Release 01 retires the older #A0175E rose and the \u201celectric\u201d #3D7BFD \u2014 neither exists in the system any more.</p><div class=\"labs-swatches\"><div class=\"labs-swatch\" style=\"background:#C42663;color:#fff\"><b>ACCENT</b><span>#C42663</span></div><div class=\"labs-swatch\" style=\"background:#A71E53;color:#fff\"><b>HOVER</b><span>#A71E53</span></div><div class=\"labs-swatch\" style=\"background:#8C1745;color:#fff\"><b>ACTIVE</b><span>#8C1745</span></div><div class=\"labs-swatch\" style=\"background:#FBE7F0;color:#8C1745;border:1px solid var(--border)\"><b>SUBTLE</b><span>#FBE7F0</span></div><div class=\"labs-swatch\" style=\"background:#F0366B;color:#fff\"><b>SIGNAL \u00b7 AI</b><span>#F0366B</span></div></div></section><section class=\"doc\"><h2>Status</h2><p class=\"hint\">Subtle tints #E5F4EC \u00b7 #FBF0D9 \u00b7 #FBE6E9 \u00b7 #E7EFFC. Dark values #3FD38C \u00b7 #F0B44E \u00b7 #FF6B7D \u00b7 #5B9BFF. Status colour always accompanies a word \u2014 colour alone never carries state. Status colours never appear as chart series.</p><div class=\"labs-swatches\"><div class=\"labs-swatch\" style=\"background:#1F8A5B;color:#fff\"><b>SUCCESS</b><span>#1F8A5B</span></div><div class=\"labs-swatch\" style=\"background:#B7791F;color:#fff\"><b>WARNING</b><span>#B7791F</span></div><div class=\"labs-swatch\" style=\"background:#C4283C;color:#fff\"><b>DANGER</b><span>#C4283C</span></div><div class=\"labs-swatch\" style=\"background:#2563D6;color:#fff\"><b>INFO</b><span>#2563D6</span></div></div></section><section class=\"doc\"><h2>Tints & ratios</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Ratio</span><span>~90% ink/surface \u00b7 ~8% text tones \u00b7 ~2% saturated. Hard ceiling 4% saturated pixels; marketing glow fields may reach 15% (dark only).</span></div><div class=\"spec-item\"><span>Tint scale</span><span>Seven steps only: 06 \u00b7 12 \u00b7 24 \u00b7 40 \u00b7 60 \u00b7 80 \u00b7 100. Rows/badges use step 06 on light, 12 on dark.</span></div><div class=\"spec-item\"><span>Selected row</span><span>A selected row is a 6% tint, not a coloured row. Never tint a status colour below 06.</span></div></div></section><section class=\"doc\"><h2>Contrast & accessibility</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Floor</span><span>WCAG 2.2 AA on every product surface: 4.5:1 body, 3:1 large. Muted grey only above 19px or 600 weight.</span></div><div class=\"spec-item\"><span>Meaning</span><span>Colour never carries meaning alone \u2014 a red row without the word \u201cdeclined\u201d is a defect.</span></div><div class=\"spec-item\"><span>Focus</span><span>2px ring at 45% accent, offset 2px \u2014 never removed, never colour-change-only.</span></div><div class=\"spec-item\"><span>Touch & motion</span><span>44px minimum hit targets. prefers-reduced-motion renders every animation as its final frame \u2014 thinking state included.</span></div></div></section><section class=\"doc\"><h2>Denials</h2><div class=\"card dd dont\"><h3><span class=\"mark\" style=\"background:var(--destructive)\"></span>Never</h3><ul><li>No spectrum on data \u2014 charts have their own palette</li><li>No spectrum on body text, labels, or headings below 40px</li><li>No spectrum on chrome \u2014 buttons, headers, sidebars, tab bars, cards</li><li>No new hues \u2014 not for a campaign, not for a season</li></ul></div></section>"
},
{
  slug: "typography", num: "06", name: "Typography",
  lede: "Figtree speaks, Plex Mono measures. If a thing can be counted, timestamped or identified, it is set in mono.",
  body: "<section class=\"doc\"><div class=\"labs-pair\"><div class=\"labs-light\" style=\"padding:24px\"><span class=\"wl-eyebrow\" style=\"color:#868D9D\">FIGTREE \u00b7 400 / 600 / 700 / 800</span><div style=\"font-family:Figtree,sans-serif;font-weight:800;font-size:30px;letter-spacing:-0.5px;color:#0B0B12;margin-top:10px\">Insurance infrastructure becoming alive.</div><p style=\"margin:10px 0 0;font-size:13px;line-height:1.7;color:#454B59\">Display, headings, UI copy. Four weights only \u2014 no 300, 500 or 900, never italic. Tracking \u22120.02em above 24px, \u22120.03em above 60px. Body line height 1.6. Never used to typeset \u201cwellx\u201d.</p></div><div class=\"labs-dark\" style=\"padding:24px\"><span class=\"wl-eyebrow\" style=\"color:#98A0B3\">IBM PLEX MONO \u00b7 400 / 500</span><div style=\"font-family:'IBM Plex Mono',monospace;font-size:15px;color:#F5F6FA;margin-top:12px;line-height:1.9\">POL/2026/88431 \u00b7 MOTOR<br>0.91 CONF \u00b7 2026-08-24 14:07:22 GST</div><p style=\"margin:10px 0 0;font-size:13px;line-height:1.7;color:#B7BDCC\">Identifiers, money, ratios, confidence, timestamps, caps labels, the LABS chip, chart axes. Caps labels track +0.14 to +0.22em; lowercase mono never tracks. Never running copy or headings.</p></div></div></section><section class=\"doc\"><h2>The scale \u2014 eight steps</h2><p class=\"hint\">A design that needs a ninth step is solving a hierarchy problem with type size instead of space.</p><div class=\"card scroll-x\"><table class=\"tok-table\"><thead><tr><th>Step</th><th>Size / weight</th><th>Tracking</th><th>Use</th></tr></thead><tbody><tr><td>Display XL</td><td>96 / 800</td><td>\u22120.045em</td><td>Covers, part openers</td></tr><tr><td>Display</td><td>64 / 700</td><td>\u22120.038em</td><td>Hero statements</td></tr><tr><td>Title</td><td>44 / 700</td><td>\u22120.03em</td><td>Page titles</td></tr><tr><td>Heading</td><td>30 / 700</td><td>\u22120.024em</td><td>Subsections</td></tr><tr><td>Subhead</td><td>22 / 600</td><td>\u22120.018em</td><td>Card titles</td></tr><tr><td>Lead</td><td>19 / 400</td><td>\u22120.008em</td><td>Standfirst</td></tr><tr><td>Body</td><td>16 / 400</td><td>0</td><td>Reading copy</td></tr><tr><td>Small</td><td>14 / 400</td><td>0</td><td>Captions, notes</td></tr></tbody></table></div></section><section class=\"doc\"><h2>In print & on slides</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Print</span><span>Body min 12pt/16px \u00b7 captions 10.5pt/14px \u00b7 mono labels 8.5pt/11px tracked uppercase \u00b7 measure 62\u201378 characters.</span></div><div class=\"spec-item\"><span>Slides</span><span>24px absolute minimum at 1920\u00d71080; titles 60\u201396px.</span></div><div class=\"spec-item\"><span>Mobile</span><span>16px body minimum; 44px hit targets.</span></div></div></section><section class=\"doc\"><h2>Denials</h2><div class=\"card dd dont\"><h3><span class=\"mark\" style=\"background:var(--destructive)\"></span>Never</h3><ul><li>No third typeface \u2014 no display face, no serif, no icon font</li><li>No justified text \u2014 ragged right always; no hyphenation at display sizes</li><li>No italic Figtree; no mono running copy</li></ul></div></section><section class=\"doc\"><h2>Load the fonts</h2><div class=\"codeblock\"><button class=\"copy-btn\" data-copy>Copy</button><pre>&lt;link href=&quot;https://fonts.googleapis.com/css2?family=Figtree:wght@400;600;700;800&amp;family=IBM+Plex+Mono:wght@400;500&amp;display=swap&quot; rel=&quot;stylesheet&quot;&gt;</pre></div></section>"
},
{
  slug: "grid", num: "07", name: "Grid & spacing",
  lede: "One grid, twelve columns, everywhere \u2014 product, deck, document, page. Every vertical measurement sits on an 8px baseline.",
  body: "<section class=\"doc\"><h2>The grid</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Columns</span><span>12 columns \u00b7 12px gutter \u00b7 margins 34/44. Content spans whole columns \u2014 a half-column span means the layout has not been decided.</span></div><div class=\"spec-item\"><span>Baseline</span><span>8px \u2014 every vertical measurement is a multiple; no arbitrary margins.</span></div><div class=\"spec-item\"><span>Space scale</span><span>4 \u00b7 8 \u00b7 12 \u00b7 16 \u00b7 24 \u00b7 32 \u00b7 48 \u00b7 64 \u00b7 96 \u00b7 128</span></div><div class=\"spec-item\"><span>Radius</span><span>4 \u00b7 6 \u00b7 9 \u00b7 14 \u00b7 999. Nothing between.</span></div><div class=\"spec-item\"><span>Elevation</span><span>Three shadows on light; borders only on dark. Never both.</span></div></div></section><section class=\"doc\"><h2>The three densities</h2><p class=\"hint\">Chosen from session length, not taste. A surface picks one density and holds it \u2014 no mixed density in one route. Rows never below 32px.</p><div class=\"card scroll-x\"><table class=\"tok-table\"><thead><tr><th>Density</th><th>Rhythm</th><th>Rows</th><th>Body</th><th>Where</th></tr></thead><tbody><tr><td>Editorial</td><td>32px</td><td>56px</td><td>19px</td><td>Member surfaces, marketing, once-a-month tasks</td></tr><tr><td>Balanced</td><td>24px</td><td>44px</td><td>16px</td><td>Corporate and broker surfaces, weekly use</td></tr><tr><td>Operating</td><td>16px</td><td>36px</td><td>14px</td><td>Insurer console, claims queues, all-day use</td></tr></tbody></table></div></section>"
},
{
  slug: "glow", num: "08", name: "Glow principle",
  lede: "Glow is direction, never decoration. It marks the single next action, the active step, or a surface the machine generated. One per view, counted at the route level.",
  body: "<section class=\"doc\"><div class=\"labs-dark\" style=\"padding:26px\"><div class=\"labs-glow-grid\"><div><span class=\"wl-eyebrow\" style=\"color:#98A0B3\">NEXT ACTION</span><div style=\"margin-top:12px\"><button class=\"wl-btn\" style=\"background:#C42663;box-shadow:0 0 24px rgba(196,38,99,.45)\">Bind policy</button></div><p class=\"wl-cap\">The one action that moves the case forward carries the glow.</p></div><div><span class=\"wl-eyebrow\" style=\"color:#98A0B3\">ACTIVE STEP</span><div style=\"margin-top:12px;border:1px solid rgba(255,255,255,.14);border-radius:9px;padding:10px 14px;color:#F5F6FA;font-size:13px;box-shadow:0 0 24px rgba(255,92,134,.35);display:inline-block\">Underwriting assessment</div><p class=\"wl-cap\">Glow marks where the system is working right now.</p></div><div><span class=\"wl-eyebrow\" style=\"color:#98A0B3\">AI SIGNAL</span><div style=\"margin-top:12px;border:1px solid rgba(240,54,107,.5);border-radius:9px;padding:12px 14px;box-shadow:0 0 24px rgba(255,92,134,.3)\"><span class=\"wl-eyebrow\" style=\"background:linear-gradient(100deg,#F7941D,#F0366B,#7A2BE2,#2D9CFD);-webkit-background-clip:text;background-clip:text;color:transparent\">\u2726 SUGGESTED \u00b7 0.91</span><div style=\"color:#F5F6FA;font-size:13px;margin-top:6px\">Three claims on this policy share a repair shop.</div></div><p class=\"wl-cap\">AI surfaces are glow-framed \u2014 and always carry a confidence figure.</p></div></div></div></section><section class=\"doc\"><h2>The spec</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Shadow</span><span>box-shadow 0 0 22\u201326px at 45% of the accent \u2014 never coloured with the spectrum.</span></div><div class=\"spec-item\"><span>Count</span><span>One glow per view maximum, counted at the route level, not the component.</span></div><div class=\"spec-item\"><span>Scope</span><span>Never decorative, never on hover alone, never on more than one element.</span></div><div class=\"spec-item\"><span>Identity moments</span><span>On splash and login the glow anchors the mark instead \u2014 never both uses in one screen.</span></div><div class=\"spec-item\"><span>Token</span><span>Use --wl-glow (shadow.glow in the tokens) \u2014 never hand-rolled shadows.</span></div></div></section><section class=\"doc\"><h2>Living surfaces \u2014 direction determines geometry</h2><p class=\"hint\">WX-C-26\u202628.</p><div class=\"spec-grid\"><div class=\"spec-item\"><span>Spectrum follows meaning</span><span>On living surfaces the gradient may follow what it means: flow follows direction \u00b7 convergence follows a focal point \u00b7 orbit follows relationship \u00b7 horizon follows opportunity.</span></div><div class=\"spec-item\"><span>RTL</span><span>RTL surfaces may reverse directional behaviour where meaning requires it.</span></div><div class=\"spec-item\"><span>Static assets</span><span>Reproducible assets \u2014 the master lockup, static identity exports, controlled print \u2014 keep the fixed recipes: 90\u00b0 rules \u00b7 180\u00b0 dividers \u00b7 135\u00b0 fills.</span></div></div></section>"
},
{
  slug: "motion", num: "09", name: "Motion",
  lede: "Five durations, two easings, nothing between. Motion explains causality \u2014 an element moves only to show where it came from.",
  body: "<section class=\"doc\"><h2>Durations</h2><div class=\"card scroll-x\"><table class=\"tok-table\"><thead><tr><th>Name</th><th>Duration</th><th>Use</th></tr></thead><tbody><tr><td>Instant</td><td>0ms</td><td>State change on a control the user is touching</td></tr><tr><td>Quick</td><td>120ms</td><td>Hover, focus, tooltip, checkbox</td></tr><tr><td>Standard</td><td>200ms</td><td>Panel, drawer, dropdown, row expansion</td></tr><tr><td>Deliberate</td><td>320ms</td><td>Page transition, modal, sheet</td></tr><tr><td>Ambient</td><td>1100ms+</td><td>The thinking state and the glow only</td></tr></tbody></table></div></section><section class=\"doc\"><h2>Easing & distance</h2><p class=\"hint\">No spring, no bounce, no overshoot.</p><div class=\"spec-grid\"><div class=\"spec-item\"><span>Entering</span><span>cubic-bezier(0.2, 0, 0, 1)</span></div><div class=\"spec-item\"><span>Exiting</span><span>cubic-bezier(0.4, 0, 1, 1)</span></div><div class=\"spec-item\"><span>Distance</span><span>No element travels more than 24px \u2014 long journeys cross-fade.</span></div><div class=\"spec-item\"><span>Reduced motion</span><span>prefers-reduced-motion renders the final frame, always.</span></div></div></section><section class=\"doc\"><h2>The mark\u2019s animated states</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Idle</span><span>Mark at 40%, genuinely still \u2014 no ambient pulse, no shimmer along the ribbon.</span></div><div class=\"spec-item\"><span>Thinking</span><span>The loop alone rotates 1.1s linear infinite, in violet \u2014 the only moving violet in the system. The full mark is never the spinner.</span></div><div class=\"spec-item\"><span>Resolved</span><span>Full ribbon fades in over 240ms cubic-bezier(0.2,0,0,1). No scale, no bounce.</span></div><div class=\"spec-item\"><span>Rules</span><span>Rotation and opacity are the only animatable properties on a fragment; one animated fragment per view. There is no error animation \u2014 an error is a colour and a sentence, not a movement.</span></div></div></section><section class=\"doc\"><h2>Denials</h2><div class=\"card dd dont\"><h3><span class=\"mark\" style=\"background:var(--destructive)\"></span>Never</h3><ul><li>No parallax \u2014 no layer moves at a different rate on scroll</li><li>No scroll-triggered animation in product (marketing may fade in once, 200ms, \u226412px)</li><li>Rows never cascade \u2014 a table appears at once or not at all</li><li>Nothing loops indefinitely except the thinking state</li><li>A figure appears at its value \u2014 it never counts up</li><li>No skeleton shimmer or sweep \u2014 loading is a static 8% block or the thinking state</li></ul></div></section>"
},
{
  slug: "sound", num: "10", name: "Sound",
  lede: "The sonic identity: D minor, one bloom, three steps. The default state of the system is silent \u2014 sound is opt-in on every surface and muted by default on web.",
  body: "<section class=\"doc\"><div class=\"card\" style=\"border-color:var(--warning);padding:14px 18px\"><b style=\"font-size:13px\">Status: PROPOSED \u00b7 R01 CANDIDATE.</b><p style=\"font-size:13px;color:var(--muted-fg);margin-top:4px;line-height:1.6\">Every WX-S rule except WX-S-00 is proposed \u2014 recommended and buildable, but it does not govern until validated in production and promoted by Design. Canonical (WX-S-00): silence by default \u00b7 sound carries meaning, never delight \u00b7 no punishment sounds \u00b7 sound never replaces visible information \u00b7 every sound user-controllable \u00b7 a sound is a signal, not a brand impression.</p></div></section><section class=\"doc\"><h2>The sonic signature \u2014 1.4s</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Shape</span><span>Bloom 0\u2013620ms: one sustained D3 tone, rising amplitude and harmonics, no pitch change. Then three even descending steps A4 \u2192 F4 \u2192 D4 at 92 bpm.</span></div><div class=\"spec-item\"><span>Pitches</span><span>D3 146.83Hz \u00b7 A4 440.00 \u00b7 F4 349.23 \u00b7 D4 293.66</span></div><div class=\"spec-item\"><span>Timbre</span><span>Sine fundamental + two even harmonics at \u221218 and \u221226dB; no noise layer; reverb \u2264400ms.</span></div><div class=\"spec-item\"><span>Loudness</span><span>Signature \u221216 LUFS \u00b7 peak \u22123 dBFS \u00b7 48kHz/24-bit master \u00b7 WAV + AAC 256 + Opus 96 \u00b7 mono-safe.</span></div><div class=\"spec-item\"><span>Where</span><span>Exactly three places: Operating Core cold boot (skipped if boot <900ms), the closing lockup of a brand film, a physical installation waking. Once per session at most \u2014 never on login, navigation, refresh or notification.</span></div></div></section><section class=\"doc\"><h2>The alert family \u2014 all derive from the descent, at \u221220 LUFS</h2><p class=\"hint\">Five alerts + three status sounds. No sixth alert without a registered entry; never a new pitch.</p><div class=\"card scroll-x\"><table class=\"tok-table\"><thead><tr><th>Sound</th><th>Notes</th><th>Length</th><th>Use</th></tr></thead><tbody><tr><td>Notify</td><td>D4</td><td>180ms</td><td>Standard notification</td></tr><tr><td>Notify\u00b7high</td><td>A4 + D4</td><td>300ms</td><td>SLA breach, escalation</td></tr><tr><td>Arrive</td><td>F4 \u2192 D4</td><td>340ms</td><td>Document / quote / report landed</td></tr><tr><td>Confirm</td><td>D4 bloomed</td><td>420ms</td><td>User action completed</td></tr><tr><td>Dismiss</td><td>D4 at \u22129dB</td><td>120ms</td><td>Dismissal</td></tr><tr><td>Success</td><td>F4 \u2192 D4 warm</td><td>340ms</td><td>Bound, paid, approved</td></tr><tr><td>Warning</td><td>A4 \u00d7 2, 90ms apart</td><td>280ms</td><td>Unresolved by design</td></tr><tr><td>Error</td><td>A4 \u2192 A\u266d4</td><td>240ms</td><td>The only interval outside D minor in the system</td></tr></tbody></table></div></section><section class=\"doc\"><h2>Rules</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Never replaces</span><span>Sound never replaces a visible message. No repeats or loops \u2014 a missed alert is not re-sounded.</span></div><div class=\"spec-item\"><span>Collisions</span><span>Two events within 400ms play once at the higher priority. Error at most once per user action.</span></div><div class=\"spec-item\"><span>Silent interactions</span><span>No sound on hover, focus, scroll, keystroke, page transition \u2014 and none in tables: row-level events are silent.</span></div><div class=\"spec-item\"><span>Silence contexts</span><span>Tables, navigation, input, charts, shared/public displays \u2014 and everything after 22:00 local. A surface that cannot be silenced by one control is a defect.</span></div></div></section><section class=\"doc\"><h2>Ambient bed, haptics & segments</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Ambient bed</span><span>Command Center only: D1 36.71Hz + D2/A2 at \u221222dB, 180s low-pass sweep, \u221238 LUFS, 8-minute seamless loop \u2014 not hummable. Off by default; ducks 6dB for 2s under any alert.</span></div><div class=\"spec-item\"><span>Haptics</span><span>Fixed pairings, fire with or without sound: notify light 10ms \u00b7 arrive soft 14ms \u00b7 confirm light+medium \u00b7 warning rigid \u00d72 \u00b7 error rigid 18ms \u00b7 dismiss tick 6ms. The signature is never haptic. Honour the OS setting absolutely.</span></div><div class=\"spec-item\"><span>Segments</span><span>Sound flexes on level and density only \u2014 never pitch, timbre or melody. Ceilings: member \u221222 \u00b7 corporate \u221220 \u00b7 insurer \u221218 \u00b7 broker \u221220 LUFS. Segments select from the family, never add.</span></div><div class=\"spec-item\"><span>Assets</span><span>All 13 sonic assets are held by Design (composer brief on request). No team produces its own sound.</span></div></div></section><section class=\"doc\"><h2>Denials</h2><div class=\"card dd dont\"><h3><span class=\"mark\" style=\"background:var(--destructive)\"></span>Never</h3><ul><li>No melodic error tones \u2014 a descending fanfare on failure is a punishment</li><li>No sound-as-personality: whooshes, pops, clicks, shutters, \u201cdelightful\u201d flourishes</li><li>No third-party sound sets</li><li>No sound in a table</li></ul></div></section><section class=\"doc\"><h2>Voice & hold \u2014 telephony and IVR</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Answer</span><span>No music \u2014 2s of room tone, then the human. Greeting is one sentence, no signature.</span></div><div class=\"spec-item\"><span>Hold</span><span>The ambient bed at \u221230 LUFS with the descent every 45s at \u221224 LUFS. No message loop, no music, no advertising.</span></div><div class=\"spec-item\"><span>Transfer & voicemail</span><span>Transfer: F4\u2192D4, then silence. Voicemail: the signature once at 40%, before the recorded message.</span></div><div class=\"spec-item\"><span>IVR & voice</span><span>Spoken options only \u2014 no tone per option, no keypress confirmation. One recorded voice per language, neutral, no upward inflection; TTS one named voice per language, fixed, at 0.95 rate.</span></div></div></section>"
},
{
  slug: "icons", num: "11", name: "Iconography",
  lede: "One line system, 69 icons. 24px grid with a 2px safe margin, 1.6px stroke, round caps and joins \u2014 drawn with currentColor so one file serves both environments.",
  body: "<section class=\"doc\"><h2>The set</h2><div class=\"labs-icon-grid\"><div class=\"labs-icon-cell\" title=\"accounting\"><img src=\"assets/labs/icons/accounting.svg\" alt=\"accounting\" width=\"22\" height=\"22\" loading=\"lazy\"><span>accounting</span></div><div class=\"labs-icon-cell\" title=\"agents\"><img src=\"assets/labs/icons/agents.svg\" alt=\"agents\" width=\"22\" height=\"22\" loading=\"lazy\"><span>agents</span></div><div class=\"labs-icon-cell\" title=\"ai-suggest\"><img src=\"assets/labs/icons/ai-suggest.svg\" alt=\"ai-suggest\" width=\"22\" height=\"22\" loading=\"lazy\"><span>ai-suggest</span></div><div class=\"labs-icon-cell\" title=\"approved\"><img src=\"assets/labs/icons/approved.svg\" alt=\"approved\" width=\"22\" height=\"22\" loading=\"lazy\"><span>approved</span></div><div class=\"labs-icon-cell\" title=\"assistant\"><img src=\"assets/labs/icons/assistant.svg\" alt=\"assistant\" width=\"22\" height=\"22\" loading=\"lazy\"><span>assistant</span></div><div class=\"labs-icon-cell\" title=\"audit\"><img src=\"assets/labs/icons/audit.svg\" alt=\"audit\" width=\"22\" height=\"22\" loading=\"lazy\"><span>audit</span></div><div class=\"labs-icon-cell\" title=\"automate\"><img src=\"assets/labs/icons/automate.svg\" alt=\"automate\" width=\"22\" height=\"22\" loading=\"lazy\"><span>automate</span></div><div class=\"labs-icon-cell\" title=\"billing\"><img src=\"assets/labs/icons/billing.svg\" alt=\"billing\" width=\"22\" height=\"22\" loading=\"lazy\"><span>billing</span></div><div class=\"labs-icon-cell\" title=\"bind-issue\"><img src=\"assets/labs/icons/bind-issue.svg\" alt=\"bind-issue\" width=\"22\" height=\"22\" loading=\"lazy\"><span>bind-issue</span></div><div class=\"labs-icon-cell\" title=\"brokers\"><img src=\"assets/labs/icons/brokers.svg\" alt=\"brokers\" width=\"22\" height=\"22\" loading=\"lazy\"><span>brokers</span></div><div class=\"labs-icon-cell\" title=\"calendar\"><img src=\"assets/labs/icons/calendar.svg\" alt=\"calendar\" width=\"22\" height=\"22\" loading=\"lazy\"><span>calendar</span></div><div class=\"labs-icon-cell\" title=\"claims\"><img src=\"assets/labs/icons/claims.svg\" alt=\"claims\" width=\"22\" height=\"22\" loading=\"lazy\"><span>claims</span></div><div class=\"labs-icon-cell\" title=\"close\"><img src=\"assets/labs/icons/close.svg\" alt=\"close\" width=\"22\" height=\"22\" loading=\"lazy\"><span>close</span></div><div class=\"labs-icon-cell\" title=\"collapse\"><img src=\"assets/labs/icons/collapse.svg\" alt=\"collapse\" width=\"22\" height=\"22\" loading=\"lazy\"><span>collapse</span></div><div class=\"labs-icon-cell\" title=\"compliance\"><img src=\"assets/labs/icons/compliance.svg\" alt=\"compliance\" width=\"22\" height=\"22\" loading=\"lazy\"><span>compliance</span></div><div class=\"labs-icon-cell\" title=\"copilot\"><img src=\"assets/labs/icons/copilot.svg\" alt=\"copilot\" width=\"22\" height=\"22\" loading=\"lazy\"><span>copilot</span></div><div class=\"labs-icon-cell\" title=\"copy\"><img src=\"assets/labs/icons/copy.svg\" alt=\"copy\" width=\"22\" height=\"22\" loading=\"lazy\"><span>copy</span></div><div class=\"labs-icon-cell\" title=\"customers\"><img src=\"assets/labs/icons/customers.svg\" alt=\"customers\" width=\"22\" height=\"22\" loading=\"lazy\"><span>customers</span></div><div class=\"labs-icon-cell\" title=\"dashboard\"><img src=\"assets/labs/icons/dashboard.svg\" alt=\"dashboard\" width=\"22\" height=\"22\" loading=\"lazy\"><span>dashboard</span></div><div class=\"labs-icon-cell\" title=\"delete\"><img src=\"assets/labs/icons/delete.svg\" alt=\"delete\" width=\"22\" height=\"22\" loading=\"lazy\"><span>delete</span></div><div class=\"labs-icon-cell\" title=\"distribution\"><img src=\"assets/labs/icons/distribution.svg\" alt=\"distribution\" width=\"22\" height=\"22\" loading=\"lazy\"><span>distribution</span></div><div class=\"labs-icon-cell\" title=\"doc-centre\"><img src=\"assets/labs/icons/doc-centre.svg\" alt=\"doc-centre\" width=\"22\" height=\"22\" loading=\"lazy\"><span>doc-centre</span></div><div class=\"labs-icon-cell\" title=\"download\"><img src=\"assets/labs/icons/download.svg\" alt=\"download\" width=\"22\" height=\"22\" loading=\"lazy\"><span>download</span></div><div class=\"labs-icon-cell\" title=\"edit\"><img src=\"assets/labs/icons/edit.svg\" alt=\"edit\" width=\"22\" height=\"22\" loading=\"lazy\"><span>edit</span></div><div class=\"labs-icon-cell\" title=\"endorsement\"><img src=\"assets/labs/icons/endorsement.svg\" alt=\"endorsement\" width=\"22\" height=\"22\" loading=\"lazy\"><span>endorsement</span></div><div class=\"labs-icon-cell\" title=\"expand\"><img src=\"assets/labs/icons/expand.svg\" alt=\"expand\" width=\"22\" height=\"22\" loading=\"lazy\"><span>expand</span></div><div class=\"labs-icon-cell\" title=\"filter\"><img src=\"assets/labs/icons/filter.svg\" alt=\"filter\" width=\"22\" height=\"22\" loading=\"lazy\"><span>filter</span></div><div class=\"labs-icon-cell\" title=\"finance\"><img src=\"assets/labs/icons/finance.svg\" alt=\"finance\" width=\"22\" height=\"22\" loading=\"lazy\"><span>finance</span></div><div class=\"labs-icon-cell\" title=\"flagged\"><img src=\"assets/labs/icons/flagged.svg\" alt=\"flagged\" width=\"22\" height=\"22\" loading=\"lazy\"><span>flagged</span></div><div class=\"labs-icon-cell\" title=\"fraud-risk\"><img src=\"assets/labs/icons/fraud-risk.svg\" alt=\"fraud-risk\" width=\"22\" height=\"22\" loading=\"lazy\"><span>fraud-risk</span></div><div class=\"labs-icon-cell\" title=\"general\"><img src=\"assets/labs/icons/general.svg\" alt=\"general\" width=\"22\" height=\"22\" loading=\"lazy\"><span>general</span></div><div class=\"labs-icon-cell\" title=\"health-tpa\"><img src=\"assets/labs/icons/health-tpa.svg\" alt=\"health-tpa\" width=\"22\" height=\"22\" loading=\"lazy\"><span>health-tpa</span></div><div class=\"labs-icon-cell\" title=\"home\"><img src=\"assets/labs/icons/home.svg\" alt=\"home\" width=\"22\" height=\"22\" loading=\"lazy\"><span>home</span></div><div class=\"labs-icon-cell\" title=\"ifrs-17\"><img src=\"assets/labs/icons/ifrs-17.svg\" alt=\"ifrs-17\" width=\"22\" height=\"22\" loading=\"lazy\"><span>ifrs-17</span></div><div class=\"labs-icon-cell\" title=\"in-review\"><img src=\"assets/labs/icons/in-review.svg\" alt=\"in-review\" width=\"22\" height=\"22\" loading=\"lazy\"><span>in-review</span></div><div class=\"labs-icon-cell\" title=\"loss-ratio\"><img src=\"assets/labs/icons/loss-ratio.svg\" alt=\"loss-ratio\" width=\"22\" height=\"22\" loading=\"lazy\"><span>loss-ratio</span></div><div class=\"labs-icon-cell\" title=\"mailbox\"><img src=\"assets/labs/icons/mailbox.svg\" alt=\"mailbox\" width=\"22\" height=\"22\" loading=\"lazy\"><span>mailbox</span></div><div class=\"labs-icon-cell\" title=\"marine\"><img src=\"assets/labs/icons/marine.svg\" alt=\"marine\" width=\"22\" height=\"22\" loading=\"lazy\"><span>marine</span></div><div class=\"labs-icon-cell\" title=\"member-exp\"><img src=\"assets/labs/icons/member-exp.svg\" alt=\"member-exp\" width=\"22\" height=\"22\" loading=\"lazy\"><span>member-exp</span></div><div class=\"labs-icon-cell\" title=\"modular-core\"><img src=\"assets/labs/icons/modular-core.svg\" alt=\"modular-core\" width=\"22\" height=\"22\" loading=\"lazy\"><span>modular-core</span></div><div class=\"labs-icon-cell\" title=\"more\"><img src=\"assets/labs/icons/more.svg\" alt=\"more\" width=\"22\" height=\"22\" loading=\"lazy\"><span>more</span></div><div class=\"labs-icon-cell\" title=\"motor\"><img src=\"assets/labs/icons/motor.svg\" alt=\"motor\" width=\"22\" height=\"22\" loading=\"lazy\"><span>motor</span></div><div class=\"labs-icon-cell\" title=\"new\"><img src=\"assets/labs/icons/new.svg\" alt=\"new\" width=\"22\" height=\"22\" loading=\"lazy\"><span>new</span></div><div class=\"labs-icon-cell\" title=\"notifications\"><img src=\"assets/labs/icons/notifications.svg\" alt=\"notifications\" width=\"22\" height=\"22\" loading=\"lazy\"><span>notifications</span></div><div class=\"labs-icon-cell\" title=\"overview\"><img src=\"assets/labs/icons/overview.svg\" alt=\"overview\" width=\"22\" height=\"22\" loading=\"lazy\"><span>overview</span></div><div class=\"labs-icon-cell\" title=\"party-and-data\"><img src=\"assets/labs/icons/party-and-data.svg\" alt=\"party-and-data\" width=\"22\" height=\"22\" loading=\"lazy\"><span>party-and-data</span></div><div class=\"labs-icon-cell\" title=\"pending\"><img src=\"assets/labs/icons/pending.svg\" alt=\"pending\" width=\"22\" height=\"22\" loading=\"lazy\"><span>pending</span></div><div class=\"labs-icon-cell\" title=\"policy\"><img src=\"assets/labs/icons/policy.svg\" alt=\"policy\" width=\"22\" height=\"22\" loading=\"lazy\"><span>policy</span></div><div class=\"labs-icon-cell\" title=\"premium\"><img src=\"assets/labs/icons/premium.svg\" alt=\"premium\" width=\"22\" height=\"22\" loading=\"lazy\"><span>premium</span></div><div class=\"labs-icon-cell\" title=\"products\"><img src=\"assets/labs/icons/products.svg\" alt=\"products\" width=\"22\" height=\"22\" loading=\"lazy\"><span>products</span></div><div class=\"labs-icon-cell\" title=\"property\"><img src=\"assets/labs/icons/property.svg\" alt=\"property\" width=\"22\" height=\"22\" loading=\"lazy\"><span>property</span></div><div class=\"labs-icon-cell\" title=\"quote\"><img src=\"assets/labs/icons/quote.svg\" alt=\"quote\" width=\"22\" height=\"22\" loading=\"lazy\"><span>quote</span></div><div class=\"labs-icon-cell\" title=\"refresh\"><img src=\"assets/labs/icons/refresh.svg\" alt=\"refresh\" width=\"22\" height=\"22\" loading=\"lazy\"><span>refresh</span></div><div class=\"labs-icon-cell\" title=\"renewals\"><img src=\"assets/labs/icons/renewals.svg\" alt=\"renewals\" width=\"22\" height=\"22\" loading=\"lazy\"><span>renewals</span></div><div class=\"labs-icon-cell\" title=\"reporting\"><img src=\"assets/labs/icons/reporting.svg\" alt=\"reporting\" width=\"22\" height=\"22\" loading=\"lazy\"><span>reporting</span></div><div class=\"labs-icon-cell\" title=\"reserves\"><img src=\"assets/labs/icons/reserves.svg\" alt=\"reserves\" width=\"22\" height=\"22\" loading=\"lazy\"><span>reserves</span></div><div class=\"labs-icon-cell\" title=\"retakaful\"><img src=\"assets/labs/icons/retakaful.svg\" alt=\"retakaful\" width=\"22\" height=\"22\" loading=\"lazy\"><span>retakaful</span></div><div class=\"labs-icon-cell\" title=\"search\"><img src=\"assets/labs/icons/search.svg\" alt=\"search\" width=\"22\" height=\"22\" loading=\"lazy\"><span>search</span></div><div class=\"labs-icon-cell\" title=\"send\"><img src=\"assets/labs/icons/send.svg\" alt=\"send\" width=\"22\" height=\"22\" loading=\"lazy\"><span>send</span></div><div class=\"labs-icon-cell\" title=\"settings\"><img src=\"assets/labs/icons/settings.svg\" alt=\"settings\" width=\"22\" height=\"22\" loading=\"lazy\"><span>settings</span></div><div class=\"labs-icon-cell\" title=\"share\"><img src=\"assets/labs/icons/share.svg\" alt=\"share\" width=\"22\" height=\"22\" loading=\"lazy\"><span>share</span></div><div class=\"labs-icon-cell\" title=\"signal\"><img src=\"assets/labs/icons/signal.svg\" alt=\"signal\" width=\"22\" height=\"22\" loading=\"lazy\"><span>signal</span></div><div class=\"labs-icon-cell\" title=\"sort\"><img src=\"assets/labs/icons/sort.svg\" alt=\"sort\" width=\"22\" height=\"22\" loading=\"lazy\"><span>sort</span></div><div class=\"labs-icon-cell\" title=\"star\"><img src=\"assets/labs/icons/star.svg\" alt=\"star\" width=\"22\" height=\"22\" loading=\"lazy\"><span>star</span></div><div class=\"labs-icon-cell\" title=\"tat-sla\"><img src=\"assets/labs/icons/tat-sla.svg\" alt=\"tat-sla\" width=\"22\" height=\"22\" loading=\"lazy\"><span>tat-sla</span></div><div class=\"labs-icon-cell\" title=\"templates\"><img src=\"assets/labs/icons/templates.svg\" alt=\"templates\" width=\"22\" height=\"22\" loading=\"lazy\"><span>templates</span></div><div class=\"labs-icon-cell\" title=\"treaties\"><img src=\"assets/labs/icons/treaties.svg\" alt=\"treaties\" width=\"22\" height=\"22\" loading=\"lazy\"><span>treaties</span></div><div class=\"labs-icon-cell\" title=\"underwriting\"><img src=\"assets/labs/icons/underwriting.svg\" alt=\"underwriting\" width=\"22\" height=\"22\" loading=\"lazy\"><span>underwriting</span></div><div class=\"labs-icon-cell\" title=\"upload\"><img src=\"assets/labs/icons/upload.svg\" alt=\"upload\" width=\"22\" height=\"22\" loading=\"lazy\"><span>upload</span></div></div></section><section class=\"doc\"><h2>Rules</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Grid & stroke</span><span>24\u00d724 grid, 2px safe margin (20px live area), 1.6px stroke, round caps and joins.</span></div><div class=\"spec-item\"><span>Color</span><span>currentColor \u2014 --wl-text-secondary at rest, --wl-accent when active.</span></div><div class=\"spec-item\"><span>Form</span><span>No fills, no two-tone icons, no corner radius above 2px.</span></div><div class=\"spec-item\"><span>Exceptions</span><span>Only AI & status icons carry colour \u2014 the Copilot spark is the spectrum; states use the semantic set.</span></div><div class=\"spec-item\"><span>Provenance</span><span>No icon from an external set enters the product, ever. Icons are never the sole label for a destructive action.</span></div></div></section>"
},
{
  slug: "textures", num: "12", name: "Textures & material",
  lede: "Six spectral fields, dark & light, plus the physical material system. One texture per view; the ink or paper base stays dominant.",
  body: "<section class=\"doc\"><h2>Dark set \u2014 brand</h2><p class=\"hint\">Presence up to 40% on dark brand surfaces. Release 01 names the second field \u201cloop field\u201d (formerly orbital rings).</p><div class=\"labs-tex-grid\"><figure class=\"labs-tex\"><img src=\"assets/labs/textures/wellx-texture-aurora-mesh.png\" alt=\"AURORA MESH\" loading=\"lazy\"><figcaption>AURORA MESH</figcaption></figure><figure class=\"labs-tex\"><img src=\"assets/labs/textures/wellx-texture-orbital-rings.png\" alt=\"LOOP FIELD\" loading=\"lazy\"><figcaption>LOOP FIELD</figcaption></figure><figure class=\"labs-tex\"><img src=\"assets/labs/textures/wellx-texture-signal-grid.png\" alt=\"SIGNAL GRID\" loading=\"lazy\"><figcaption>SIGNAL GRID</figcaption></figure><figure class=\"labs-tex\"><img src=\"assets/labs/textures/wellx-texture-wave-flow.png\" alt=\"WAVE FLOW\" loading=\"lazy\"><figcaption>WAVE FLOW</figcaption></figure><figure class=\"labs-tex\"><img src=\"assets/labs/textures/wellx-texture-particle-field.png\" alt=\"PARTICLE FIELD\" loading=\"lazy\"><figcaption>PARTICLE FIELD</figcaption></figure><figure class=\"labs-tex\"><img src=\"assets/labs/textures/wellx-texture-spectral-horizon.png\" alt=\"SPECTRAL HORIZON\" loading=\"lazy\"><figcaption>SPECTRAL HORIZON</figcaption></figure></div></section><section class=\"doc\"><h2>Light set \u2014 product</h2><p class=\"hint\">Presence 6\u201312% on light product surfaces.</p><div class=\"labs-tex-grid\"><figure class=\"labs-tex light\"><img src=\"assets/labs/textures/light/wellx-texture-aurora-mesh-light.png\" alt=\"AURORA MESH light\" loading=\"lazy\"><figcaption>AURORA MESH \u00b7 LIGHT</figcaption></figure><figure class=\"labs-tex light\"><img src=\"assets/labs/textures/light/wellx-texture-orbital-rings-light.png\" alt=\"LOOP FIELD light\" loading=\"lazy\"><figcaption>LOOP FIELD \u00b7 LIGHT</figcaption></figure><figure class=\"labs-tex light\"><img src=\"assets/labs/textures/light/wellx-texture-signal-grid-light.png\" alt=\"SIGNAL GRID light\" loading=\"lazy\"><figcaption>SIGNAL GRID \u00b7 LIGHT</figcaption></figure><figure class=\"labs-tex light\"><img src=\"assets/labs/textures/light/wellx-texture-wave-flow-light.png\" alt=\"WAVE FLOW light\" loading=\"lazy\"><figcaption>WAVE FLOW \u00b7 LIGHT</figcaption></figure><figure class=\"labs-tex light\"><img src=\"assets/labs/textures/light/wellx-texture-particle-field-light.png\" alt=\"PARTICLE FIELD light\" loading=\"lazy\"><figcaption>PARTICLE FIELD \u00b7 LIGHT</figcaption></figure><figure class=\"labs-tex light\"><img src=\"assets/labs/textures/light/wellx-texture-spectral-horizon-light.png\" alt=\"SPECTRAL HORIZON light\" loading=\"lazy\"><figcaption>SPECTRAL HORIZON \u00b7 LIGHT</figcaption></figure></div></section><section class=\"doc\"><h2>Rules</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>One per view</span><span>Never layer or tile spectral fields; anchor behind one zone, never behind dense data.</span></div><div class=\"spec-item\"><span>Signature</span><span>Command Center\u2019s backdrop is spectral horizon, anchored low so the top stays calm.</span></div><div class=\"spec-item\"><span>Pattern tiles</span><span>The related fragment tiles (ribbon repeat, loop field, signal grid, taper field) repeat on the 16-unit cage \u2014 print and environmental use.</span></div></div></section><section class=\"doc\"><h2>Material \u2014 the physical system</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Paper</span><span>Uncoated 120gsm natural white (documents, letterhead); Colorplan Ebony 350gsm covers.</span></div><div class=\"spec-item\"><span>Finish</span><span>Blind deboss for the mark; matt black foil for the wordmark. No gloss, no spot UV, no lamination.</span></div><div class=\"spec-item\"><span>Metal</span><span>Brushed aluminium, natural anodised \u2014 never polished, never gold, never rose.</span></div><div class=\"spec-item\"><span>Acrylic & glass</span><span>Ink-black matt acrylic, 10mm min for wall fragments; frosted glazing at 40% using the 16-unit tile.</span></div><div class=\"spec-item\"><span>Textile</span><span>Undyed cotton canvas or charcoal wool \u2014 no polyester, no branded lanyard print.</span></div></div></section>"
},
{
  slug: "components", num: "13", name: "Components",
  lede: "Core components in both themes, built only from the semantic tokens. One primary action per view; AI surfaces carry a 1px spectrum frame and a confidence figure \u2014 no frame without a figure.",
  body: "<section class=\"doc\"><div class=\"labs-pair\"><div class=\"labs-light\" style=\"padding:22px;display:flex;flex-direction:column;gap:14px\"><span class=\"wl-eyebrow\" style=\"color:#868D9D\">LIGHT \u00b7 data-theme unset</span><div style=\"display:flex;gap:8px;flex-wrap:wrap;align-items:center\"><button class=\"wl-btn\" style=\"background:#C42663\">Bind policy</button><button class=\"wl-btn ghost-l\">Save draft</button><a href=\"javascript:void(0)\" style=\"font-family:Figtree,sans-serif;font-size:13px;color:#C42663;font-weight:600\">Cancel</a></div><input class=\"wl-input light\" style=\"font-family:'IBM Plex Mono',monospace\" value=\"POL/2026/88431\" readonly><div style=\"display:flex;gap:6px;flex-wrap:wrap\"><span class=\"wl-tag\" style=\"background:#E5F4EC;color:#1F8A5B\">BOUND</span><span class=\"wl-tag\" style=\"background:#FBF0D9;color:#B7791F\">PENDING</span><span class=\"wl-tag\" style=\"background:#FBE6E9;color:#C4283C\">DECLINED</span><span class=\"wl-tag\" style=\"background:#E7EFFC;color:#2563D6\">IN REVIEW</span></div><div style=\"border:1px solid transparent;border-radius:9px;padding:12px;background:linear-gradient(#fff,#fff) padding-box,linear-gradient(135deg,#F7941D,#F0366B,#7A2BE2,#2D9CFD) border-box\"><span class=\"wl-eyebrow\" style=\"background:linear-gradient(100deg,#F7941D,#F0366B,#7A2BE2,#2D9CFD);-webkit-background-clip:text;background-clip:text;color:transparent\">\u2726 SUGGESTED \u00b7 0.91</span><div style=\"font-size:12.5px;color:#0B0B12;margin-top:4px;font-family:Figtree,sans-serif\">Three claims on this policy share a repair shop. Review recommended.</div></div></div><div class=\"labs-dark\" style=\"padding:22px;display:flex;flex-direction:column;gap:14px\"><span class=\"wl-eyebrow\" style=\"color:#98A0B3\">DARK \u00b7 data-theme=\"dark\"</span><div style=\"display:flex;gap:8px;flex-wrap:wrap;align-items:center\"><button class=\"wl-btn\" style=\"background:#FF5C86;color:#1A0812\">Bind policy</button><button class=\"wl-btn ghost-d\">Save draft</button><a href=\"javascript:void(0)\" style=\"font-family:Figtree,sans-serif;font-size:13px;color:#FF5C86;font-weight:600\">Cancel</a></div><input class=\"wl-input dark\" style=\"font-family:'IBM Plex Mono',monospace\" value=\"POL/2026/88431\" readonly><div style=\"display:flex;gap:6px;flex-wrap:wrap\"><span class=\"wl-tag\" style=\"background:#10231A;color:#3FD38C\">BOUND</span><span class=\"wl-tag\" style=\"background:#2A2011;color:#F0B44E\">PENDING</span><span class=\"wl-tag\" style=\"background:#2A1216;color:#FF6B7D\">DECLINED</span><span class=\"wl-tag\" style=\"background:#0F1D33;color:#5B9BFF\">IN REVIEW</span></div><div style=\"border:1px solid transparent;border-radius:9px;padding:12px;background:linear-gradient(#101119,#101119) padding-box,linear-gradient(135deg,#F7941D,#F0366B,#7A2BE2,#2D9CFD) border-box\"><span class=\"wl-eyebrow\" style=\"background:linear-gradient(100deg,#F7941D,#F0366B,#7A2BE2,#2D9CFD);-webkit-background-clip:text;background-clip:text;color:transparent\">\u2726 SUGGESTED \u00b7 0.91</span><div style=\"font-size:12.5px;color:#F5F6FA;margin-top:4px;font-family:Figtree,sans-serif\">Three claims on this policy share a repair shop. Review recommended.</div></div></div></div></section><section class=\"doc\"><h2>Interface laws</h2><div class=\"card\"><ol class=\"labs-ol\"><li><b>One primary action per view.</b> Everything else is bordered or plain.</li><li>Radius from the scale only: 4 \u00b7 6 \u00b7 9 \u00b7 14 \u00b7 999.</li><li><b>Light separates with shadow; dark separates with border.</b> Never both.</li><li><b>AI surfaces carry a 1px spectrum frame and a confidence figure.</b> No frame without a figure.</li><li>A surface picks one density and holds it \u2014 no mixed density in one route.</li><li>Focus ring 2px at 45% accent, offset 2px. Never removed.</li></ol></div></section><section class=\"doc\"><h2>Recipes</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Status tags</span><span>Mono caps, pill radius, subtle-tint background + strong text \u2014 always with a word: BOUND / PENDING / DECLINED / IN REVIEW.</span></div><div class=\"spec-item\"><span>Input</span><span>Sunken field (--wl-surface-sunken); identifier values in mono; focus = white field + 2px accent ring.</span></div><div class=\"spec-item\"><span>Entity card</span><span>--wl-surface on 1px --wl-border, radius 14; title Figtree 700; the ID line is always mono caps muted.</span></div><div class=\"spec-item\"><span>AI surface</span><span>Spectrum frame + glow + \u2726 mono header with confidence + fact-first body + one action. Machine output is always distinct from system-of-record data.</span></div></div></section>"
},
{
  slug: "dataviz", num: "14", name: "Data visualisation",
  lede: "The spectrum and signal magenta are identity and AI. Data therefore has its own palette, assigned in order and never chosen for effect. The gradient is identity; a chart is evidence \u2014 they never overlap.",
  body: "<section class=\"doc\"><h2>The chart palette</h2><p class=\"hint\">Single-series charts always use the one data blue #2E6BE6 \u2014 never the action colour. Categorical series are assigned in order, 1 to 6, then \u201cother\u201d.</p><div class=\"labs-swatches\"><div class=\"labs-swatch\" style=\"background:#2E6BE6;color:#fff\"><b>CHART 1 \u00b7 SERIES</b><span>#2E6BE6</span></div><div class=\"labs-swatch\" style=\"background:#00A88F;color:#fff\"><b>CHART 2</b><span>#00A88F</span></div><div class=\"labs-swatch\" style=\"background:#8A5CF6;color:#fff\"><b>CHART 3</b><span>#8A5CF6</span></div><div class=\"labs-swatch\" style=\"background:#E0821A;color:#fff\"><b>CHART 4</b><span>#E0821A</span></div><div class=\"labs-swatch\" style=\"background:#0E8AA8;color:#fff\"><b>CHART 5</b><span>#0E8AA8</span></div><div class=\"labs-swatch\" style=\"background:#B7477A;color:#fff\"><b>CHART 6</b><span>#B7477A</span></div><div class=\"labs-swatch\" style=\"background:#9AA1B0;color:#0B0B12\"><b>OTHER</b><span>#9AA1B0</span></div></div></section><section class=\"doc\"><h2>Rules</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Status series</span><span>Reuse the semantic tokens and nothing else \u2014 a chart that happens to be green is not saying \u201csuccess\u201d.</span></div><div class=\"spec-item\"><span>Type</span><span>Axis ticks, legends and values are always IBM Plex Mono.</span></div><div class=\"spec-item\"><span>Form</span><span>No gradient fill, no drop shadow, no 3D, no donut with a figure in the hole.</span></div><div class=\"spec-item\"><span>Honesty</span><span>Axes start at zero, or the truncation is stated on the chart. A figure appears at its value \u2014 it never counts up.</span></div><div class=\"spec-item\"><span>Provenance</span><span>Any machine-produced figure shows its confidence and its source.</span></div><div class=\"spec-item\"><span>Meaning</span><span>A series is never identified by colour alone.</span></div></div></section><section class=\"doc\"><h2>Signal to possibility</h2><div style=\"display:flex;gap:6px;flex-wrap:wrap;align-items:center\"><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">FACT</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">CONTEXT</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">SIGNAL</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">INSIGHT</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid #C42663;color:#C42663\">POSSIBILITY</span></div><div style=\"height:10px\"></div><div style=\"display:flex;gap:6px;flex-wrap:wrap;align-items:center\"><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">SIGNAL</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">INSIGHT</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">IMPLICATION</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid var(--border);color:var(--muted-fg)\">POSSIBILITY</span><span style=\"color:var(--muted-fg-soft)\">\u2192</span><span style=\"font-family:'IBM Plex Mono',monospace;font-size:10px;letter-spacing:1px;padding:4px 10px;border-radius:6px;border:1px solid #C42663;color:#C42663\">ACTION</span></div><p class=\"hint\" style=\"margin-top:12px\">Intelligence is not finished when it produces a number (WX-N-19\u202621). A number is never shown without the context that makes it readable; an insight never without its implication; an implication never without the action it permits. \u00b7DENY: possibility is stated as an option with its evidence \u2014 never as a promise, a projection or a headline.</p></section><section class=\"doc\"><h2>Provenance before confidence</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Confidence vocabulary</span><span>measured \u00b7 modelled \u00b7 judgment \u00b7 insufficient \u2014 fixed; never invent a fifth.</span></div><div class=\"spec-item\"><span>Underwriting states</span><span>renewing \u00b7 open \u00b7 referred \u00b7 declined.</span></div><div class=\"spec-item\"><span>The rule</span><span>A row that cannot state its provenance does not get to state its confidence. Provenance is named beside every confidence value (claims\u00b7telematics, clinical\u00b7actuarial, engineering\u00b7survey\u2026).</span></div><div class=\"spec-item\"><span>Findings, not failures</span><span>A declined cohort is a finding, not a failure.</span></div><div class=\"spec-item\"><span>Scope</span><span>Brand-book illustrations may render data abstractly in spectral art; product charts never do \u2014 the palette above always governs product UI.</span></div></div></section>"
},
{
  slug: "applications", num: "15", name: "Applications",
  lede: "Every application specified so it can be produced without a designer in the room \u2014 stationery, decks, documents, signage, social, advertising, merchandise, and co-branding.",
  body: "<section class=\"doc\"><div class=\"labs-pair\"><div class=\"labs-dark\" style=\"display:flex;align-items:center;justify-content:center;padding:30px\"><img src=\"assets/labs/wellx-labs-icon-tile.png\" alt=\"Icon tile\" style=\"width:120px;border-radius:16px\"></div><div class=\"labs-dark\" style=\"display:flex;align-items:center;justify-content:center;padding:30px\"><img src=\"assets/labs/wellx-bionic-dark.png\" alt=\"Bionic mark\" style=\"width:100px\"></div></div></section><section class=\"doc\"><h2>Stationery</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Letterhead</span><span>A4, 20mm margins, lockup 40mm top-left, watermark loop at 5% bleeding off the lower-right. Uncoated 120gsm, single colour black.</span></div><div class=\"spec-item\"><span>Business card</span><span>85\u00d755mm, 700gsm duplexed; ink-black front with the mark blind-debossed (no foil); natural-white reverse with the mark alone at 22mm on the ribbon axis and a 1mm spectrum edge at the foot.</span></div></div></section><section class=\"doc\"><h2>Deck & document</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Deck</span><span>1920\u00d71080, 96px margin, 12-col grid with 24px gutter. Title slides dark with one texture; content slides light \u2014 never mixed within a section. Type min 24px, titles 60\u201396px; slide numbers mono, foot right. One spectrum rule per deck section.</span></div><div class=\"spec-item\"><span>Document</span><span>A4 portrait, 22mm margins, body 11pt Figtree at 1.55. Wordmark only in the running head \u2014 never the full lockup. All figures mono; table heads sunken. Footer carries classification and page number \u2014 never a tagline.</span></div></div></section><section class=\"doc\"><h2>Signage & environment</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Reception</span><span>The lockup once per space, at eye height \u2014 1.5m from floor to mark centre.</span></div><div class=\"spec-item\"><span>Rooms & wayfinding</span><span>Room names in mono caps tracked 0.2em with the loop as the room glyph; the crest as a 12mm route line, ink on white.</span></div><div class=\"spec-item\"><span>Backdrops & glazing</span><span>One texture anchored low, lockup bottom-left, never centred; glazing manifestation = 16-unit tile at 40% frost.</span></div><div class=\"spec-item\"><span>Never</span><span>No branded floor vinyl, no step-and-repeat, no pull-up banners.</span></div></div></section><section class=\"doc\"><h2>Social & advertising</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Formats</span><span>Square 1080 \u00b7 OG 1200\u00d7630 \u00b7 LinkedIn banner 1584\u00d7396 \u00b7 avatar 400 \u00b7 favicon 64 \u00b7 splash 1440\u00d7900.</span></div><div class=\"spec-item\"><span>Marks</span><span>Wordmark only on posts; full lockup on banners and OG images. Dark posts carry one texture; light posts none.</span></div><div class=\"spec-item\"><span>Advertising</span><span>One sentence, one number, one action \u2014 never three claims in one frame. Figures are real, sourced and dated. No stock photography \u2014 product surfaces, texture fields or type alone. Lockup bottom-left on a solid plate. Legal in mono, 8pt minimum, 60% ink.</span></div><div class=\"spec-item\"><span>Never</span><span>No handshakes, lawns or models pointing at screens \u00b7 no \u201cworld-leading\u201d / \u201crevolutionary\u201d / \u201cseamless\u201d \u00b7 no timers or scarcity framing \u00b7 no emoji anywhere \u2014 ads, product copy, documents or email.</span></div></div></section><section class=\"doc\"><h2>Merchandise</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Principle</span><span>Objects a person would own anyway. If it is only wanted because it is free, it is not made.</span></div><div class=\"spec-item\"><span>Items</span><span>A5 black notebook, blind-debossed mark \u00b7 undyed cotton tote, 60mm screen print \u00b7 charcoal/black apparel, 40mm left chest \u00b7 matt black stainless drinkware, laser-etched \u00b7 plain charcoal lanyard (the card carries the identity) \u00b7 die-cut matt stickers \u2014 the one item where the spectrum symbol is permitted.</span></div><div class=\"spec-item\"><span>Never</span><span>Single colour only \u2014 no spectrum on an object. No stress balls, fidget toys, branded sweets or printed umbrellas.</span></div></div></section><section class=\"doc\"><h2>Co-branding</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Patterns</span><span>Endorsement \u2014 Wellx leads, partner follows at equal cap height after a hairline \u00b7 Partnership \u2014 equal weight, alphabetical order \u00b7 Powered by \u2014 partner leads, Wellx wordmark only preceded by \u201cPowered by\u201d in mono.</span></div><div class=\"spec-item\"><span>Separator</span><span>1px hairline at 20% ink, height of the taller mark; clear space between marks 2\u00d7X.</span></div><div class=\"spec-item\"><span>The chip</span><span>The LABS chip is dropped in every co-branded lockup.</span></div><div class=\"spec-item\"><span>Never</span><span>A partner mark inside the loop, or the two marks locked into one shape.</span></div></div></section><section class=\"doc\"><h2>The book \u2014 \u201cThe Possibility Within\u201d pattern</h2><p class=\"hint\">A companion narrative artifact (not governing \u2014 the System Manual wins wherever they disagree): 297\u00d7210mm landscape spreads; dark spectral cover carrying a Figtree Extrabold question and a mono metadata line; the eight laws run as edge marginalia and are indexed at the close; chapters walk the Value Loop. House style for future Wellx Labs books.</p></section>"
},
{
  slug: "voice", num: "16", name: "Voice & tone",
  lede: "Say the number. Say where it came from. Stop. Wellx writes like a competent colleague sending a short message: what happened, what it means, what to do.",
  body: "<section class=\"doc\"><h2>Five principles</h2><div class=\"card\"><ol class=\"labs-ol\"><li><b>Lead with the fact.</b> \u201cThree claims share a repair shop.\u201d \u2014 not \u201cWe noticed something interesting.\u201d</li><li><b>Name the actor.</b> \u201cThe model flagged this\u201d or \u201cSara approved this.\u201d Never a passive \u201cthis was flagged.\u201d</li><li><b>Give the confidence.</b> If the machine is guessing, say how much \u2014 a number, not a hedge.</li><li><b>One instruction.</b> An empty state, an error and a notification each contain exactly one next action.</li><li><b>No exclamation marks.</b> Anywhere. Including in celebration. No emoji in product copy, documents, email or advertising.</li></ol></div></section><section class=\"doc\"><h2>In practice</h2><div class=\"card scroll-x\"><table class=\"tok-table\"><thead><tr><th>Surface</th><th>Yes</th><th>No</th></tr></thead><tbody><tr><td>Empty state</td><td>No claims in this queue. Assign one from Unallocated.</td><td>You\u2019re all caught up! \ud83c\udf89 Nothing to see here.</td></tr><tr><td>Error</td><td>Bind failed. The policy start date is in the past. Change the date and retry.</td><td>Oops! Something went wrong. Please try again later.</td></tr><tr><td>AI output</td><td>Flagged for review \u00b7 confidence 0.74. Three claims on this policy share a repair shop.</td><td>Our AI thinks this might be worth a look!</td></tr><tr><td>Confirmation</td><td>Policy POL/2026/88431 bound. Documents sent to the broker.</td><td>Success! You did it. Great job!</td></tr></tbody></table></div></section><section class=\"doc\"><h2>Tone by audience</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Member</span><span>Second person, present tense, no jargon. \u201cWe are reviewing your claim\u201d \u2014 never \u201cclaim adjudication\u201d. No ratios.</span></div><div class=\"spec-item\"><span>Corporate</span><span>Population, not individuals; cost and outcome. Never name an employee in a report a manager can read.</span></div><div class=\"spec-item\"><span>Insurer</span><span>Terse and technical \u2014 attritional, IBNR, treaty year, combined ratio are expected and correct.</span></div><div class=\"spec-item\"><span>Broker</span><span>Position and movement: what changed in the book, what needs an action today.</span></div><div class=\"spec-item\"><span>Regulator</span><span>Complete sentences, full provenance, no marketing adjectives anywhere.</span></div></div></section><section class=\"doc\"><h2>Banned words</h2><div class=\"card dd dont\"><h3><span class=\"mark\" style=\"background:var(--destructive)\"></span>Struck from every surface</h3><ul><li>seamless \u00b7 effortless \u00b7 revolutionary \u00b7 world-class \u00b7 leverage \u00b7 synergy \u00b7 journey \u00b7 unlock \u00b7 empower \u00b7 delight \u00b7 simply \u00b7 just \u00b7 easy \u00b7 robust \u00b7 best-in-class \u00b7 game-changing \u00b7 disrupt \u00b7 holistic</li></ul></div></section><section class=\"doc\"><h2>Narrative devices \u2014 from \u201cThe Possibility Within\u201d</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Better / Earlier / In context</span><span>\u201cThe same exposure, understood with more of what actually drives it\u201d \u00b7 \u201cUnderstanding that arrives while a decision is still open\u201d \u00b7 \u201cA number read against the conditions that produced it.\u201d</span></div><div class=\"spec-item\"><span>We bring / You bring / Together</span><span>Practiced products \u00b7 portfolio, distribution, regulation, institutional memory \u00b7 \u201cbuild what neither could create alone.\u201d</span></div><div class=\"spec-item\"><span>The timing line</span><span>Exposure begins \u2192 signal available \u2192 decision still open. \u201cEverything to the right of the third mark is a claim; everything to the left of it is a choice.\u201d</span></div><div class=\"spec-item\"><span>The value cascade</span><span>Insurer prices with more confidence \u2192 partner reaches a new market \u2192 customer protected before the loss \u2192 a population becomes reachable \u2192 the next cohort begins with what this one learned.</span></div></div><p class=\"hint\" style=\"margin-top:8px\">Companion-book copy \u2014 reference patterns for brand and marketing surfaces; the System Manual governs the rules.</p></section>"
},
{
  slug: "tokens", num: "17", name: "Semantic tokens",
  lede: "Build against role names, never raw hex. Default theme is light; set data-theme=\u201cdark\u201d on <html> to flip. Ships as tokens/wellx-labs-tokens.json \u2014 now including the chart, motion, space, grid and density registers.",
  body: "<section class=\"doc\"><h2>Color roles \u2014 light / dark</h2><div class=\"card scroll-x\"><table class=\"tok-table\"><thead><tr><th>Token</th><th>Light</th><th>Dark</th></tr></thead><tbody><tr><td><code>--wl-canvas</code></td><td>#F6F7FB</td><td>#07070C</td></tr><tr><td><code>--wl-surface</code></td><td>#FFFFFF</td><td>#101119</td></tr><tr><td><code>--wl-surface-raised</code></td><td>#FFFFFF</td><td>#191A28</td></tr><tr><td><code>--wl-surface-sunken</code></td><td>#EEF1F6</td><td>#0B0B12</td></tr><tr><td><code>--wl-border</code></td><td>#E4E7EE</td><td>#262837</td></tr><tr><td><code>--wl-border-strong</code></td><td>#CBD1DC</td><td>#3A3C51</td></tr><tr><td><code>--wl-text-primary</code></td><td>#0B0B12</td><td>#F5F6FA</td></tr><tr><td><code>--wl-text-secondary</code></td><td>#454B59</td><td>#B7BDCC</td></tr><tr><td><code>--wl-text-muted</code></td><td>#868D9D</td><td>#7E8698</td></tr><tr><td><code>--wl-accent</code></td><td>#C42663</td><td>#FF5C86</td></tr><tr><td><code>--wl-accent-hover</code></td><td>#A71E53</td><td>#FF789B</td></tr><tr><td><code>--wl-accent-active</code></td><td>#8C1745</td><td>#EA466F</td></tr><tr><td><code>--wl-accent-subtle</code></td><td>#FBE7F0</td><td>#2A121E</td></tr><tr><td><code>--wl-signal</code> (AI only)</td><td>#F0366B</td><td>#F0366B</td></tr><tr><td><code>--wl-success</code></td><td>#1F8A5B</td><td>#3FD38C</td></tr><tr><td><code>--wl-warning</code></td><td>#B7791F</td><td>#F0B44E</td></tr><tr><td><code>--wl-danger</code></td><td>#C4283C</td><td>#FF6B7D</td></tr><tr><td><code>--wl-info</code></td><td>#2563D6</td><td>#5B9BFF</td></tr></tbody></table></div></section><section class=\"doc\"><h2>The other registers</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Shape</span><span>Radius 4 \u00b7 6 \u00b7 9 \u00b7 14 \u00b7 999. Shadows sm/md/lg on light; borders on dark. Glow 0 0 22\u201326px @45% accent. Focus ring rgba at 45\u201350%.</span></div><div class=\"spec-item\"><span>Type</span><span>Figtree (display + UI) \u00b7 IBM Plex Mono (measures). Eight-step scale 96/64/44/30/22/19/16/14 \u2014 see Typography.</span></div><div class=\"spec-item\"><span>Space & grid</span><span>8px baseline \u00b7 scale 4\u2013128 \u00b7 12 columns, 12px gutter \u00b7 densities editorial/balanced/operating.</span></div><div class=\"spec-item\"><span>Motion</span><span>Durations 0/120/200/320/1100ms \u00b7 enter cubic-bezier(0.2,0,0,1) \u00b7 exit cubic-bezier(0.4,0,1,1) \u00b7 max travel 24px.</span></div><div class=\"spec-item\"><span>Charts</span><span>chart-1\u20136 + other + the single-series blue \u2014 see Data visualisation.</span></div><div class=\"spec-item\"><span>Access</span><span>Agents: get_labs_tokens(category) \u2014 color \u00b7 gradient \u00b7 radius \u00b7 shadow \u00b7 font \u00b7 type \u00b7 typeScale \u00b7 focusRing \u00b7 chart \u00b7 motion \u00b7 space \u00b7 grid \u00b7 density \u00b7 all.</span></div></div></section>"
},
{
  slug: "rules", num: "18", name: "Implementation rules",
  lede: "The contract every Labs product follows \u2014 plus the governance that keeps the book authoritative.",
  body: "<section class=\"doc\"><div class=\"card\"><ol class=\"labs-ol\"><li>Load the tokens once, globally. Default = light; add <code>data-theme=\"dark\"</code> on <code>&lt;html&gt;</code> to flip. Never hard-code hex \u2014 reference <code>var(--wl-*)</code>.</li><li><b>Accent = action.</b> One primary action per view; secondary actions are bordered/neutral.</li><li><b>Spectrum + <code>--wl-signal</code> are identity &amp; AI only</b> \u2014 five permitted spectrum uses; never on data, charts, chrome, or body text.</li><li><b>Glow = direction, one per view</b> (route-level), 0 0 22\u201326px @45% accent \u2014 never spectrum-coloured, never decorative.</li><li><b>Icons</b> inherit currentColor; no external icons, ever; never the sole label for a destructive action.</li><li><b>Textures</b> \u2014 one per view; 6\u201312% light, up to 40% dark brand.</li><li><b>Type</b> \u2014 Figtree 400/600/700/800 for UI/display; IBM Plex Mono 400/500 for everything countable, timestamped or identified. Never retypeset the wordmark.</li><li><b>Layout</b> \u2014 12-col grid, 8px baseline, radius 4/6/9/14/999, one density per route, rows \u226532px.</li><li><b>Motion</b> \u2014 five durations, two easings, \u226424px travel; reduced motion renders the final frame.</li><li><b>Focus</b> is always the 2px @45% ring, offset 2px \u2014 visible, never removed. WCAG 2.2 AA everywhere.</li><li><b>AI output</b> \u2014 spectrum frame + confidence figure + provenance, always visually distinct from system-of-record data.</li></ol></div></section><section class=\"doc\"><h2>Governance</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>The book governs</span><span>Where it conflicts with a file, a Figma library, a slide or a memory of a meeting, the book wins. Release 01 \u00b7 2026; reviewed twice yearly.</span></div><div class=\"spec-item\"><span>Ownership</span><span>Design owns the system; changes ship as numbered releases. No local overrides.</span></div><div class=\"spec-item\"><span>Named overrides only</span><span>Command Center owns the purple action accent and the ambient bed; Care Connect owns rose. Nothing else is overridden.</span></div><div class=\"spec-item\"><span>New rules</span><span>Take the next identifier. If it is not in the register, it is not a rule.</span></div><div class=\"spec-item\"><span>Review</span><span>Review against the denials first \u2014 the fastest audit is looking for violations; everything else is judgement.</span></div></div></section><section class=\"doc\"><h2>Levels of authority</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>00 \u00b7 Soul</span><span>Why Wellx Labs exists. Founders. Canonical; changes rarely.</span></div><div class=\"spec-item\"><span>01 \u00b7 Constitution</span><span>The eight laws. Founders. Canonical; never amended for design.</span></div><div class=\"spec-item\"><span>02 \u00b7 Doctrine</span><span>Principles and System Laws. Design. Canonical design doctrine.</span></div><div class=\"spec-item\"><span>03 \u00b7 Grammar</span><span>Colour, type, signal, motion, data. Design. Specification.</span></div><div class=\"spec-item\"><span>04 \u00b7 Implementation</span><span>Tokens, geometry, components, denials. Design/Product. Specification.</span></div><div class=\"spec-item\"><span>05 \u00b7 Governance</span><span>Ownership, versioning, change. Founders. Canonical.</span></div><div class=\"spec-item\"><span>Proposed</span><span>Sits outside the six levels; does not govern until promoted. At Release 01, Sound (WX-S-01 onward) is proposed at level design-grammar \u2014 its WX-S-00 philosophy is canonical.</span></div><div class=\"spec-item\"><span>Register record</span><span>id WX-{L|P|M|C|T|S|N|I|A}-{nn} \u00b7 level (soul | constitution | design-doctrine | design-grammar | implementation | governance) \u00b7 status (canonical | system-specification | proposed | retired) \u00b7 owner \u00b7 version \u00b7 scope \u00b7 rationale \u00b7 inherits \u00b7 validation. Retired: none.</span></div></div></section><section class=\"doc\"><h2>For AI agents</h2><p class=\"hint\">The MCP serves all of this: <code>get_rules</code> topics <code>labs-position</code>, <code>labs-brand</code>, <code>labs-fragments</code>, <code>labs-color</code>, <code>labs-typography</code>, <code>labs-glow-motion</code>, <code>labs-sound</code>, <code>labs-voice</code>, <code>labs-icons-textures</code>, <code>labs-components</code> \u2014 plus <code>get_labs_tokens</code>. The Wellx design system and the Wellx Labs design system are separate; never mix them in one product.</p></section>"
},
{
  slug: "files", num: "19", name: "Asset index",
  lede: "Delivered files \u2014 where everything lives, and who to ask.",
  body: "<section class=\"doc\"><h2>In this repo</h2><div class=\"card\"><pre class=\"labs-tree\">docs/assets/labs/\n  wellx-labs-lockup-dark.png \u00b7 wellx-labs-lockup-light.png \u00b7 wellx-labs-icon-tile.png\n  wellx-bionic-dark.png \u00b7 wellx-bionic-light.png\n  icons/            \u00b7 69 line icons \u00b7 SVG \u00b7 currentColor\n  textures/         \u00b7 6 spectral fields \u00b7 dark + light/ \u00b7 1600\u00d7900 PNG\ntokens/wellx-labs-tokens.json \u00b7 semantic dual-theme tokens + chart/motion/space/grid/density\nspec/labs-*.md      \u00b7 ten rule topics, served by the MCP</pre></div></section><section class=\"doc\"><h2>The brand book</h2><div class=\"card\"><pre class=\"labs-tree\">Wellx Labs System Manual \u00b7 RELEASE 01 \u00b7 2026 \u00b7 FROZEN \u00b7 131 folios \u00b7 A4 \u00b7 section-sewn\n  Vol I    Position          \u00b7 the problem, the thesis, the eight laws, the principles\n  Vol II   The Mark          \u00b7 construction, clear space, lockup, misuse, fragments\n  Vol III  Colour, Type, Sound\n  Vol IV   Interface, Applications, Voice &amp; Register\nCompanion: \u201cThe Possibility Within\u201d \u00b7 Edition 01 \u00b7 297\u00d7210mm \u00b7 28 spreads \u2014 not governing\nStatus: frozen at Release 01 \u2014 governs at the levels set out in 9.5; supersedes all prior guidance. Amendments as 01.1, 01.2.</pre></div></section><section class=\"doc\"><h2>Full brand kit (source)</h2><div class=\"card\"><pre class=\"labs-tree\">wellx-brand-kit/\n  01-brand-guide/   \u00b7 BRAND.md \u00b7 BRAND-RULES.md \u00b7 the printable brand book\n  02-tokens/        \u00b7 tokens.css \u00b7 tokens.json\n  03-logo/          \u00b7 master wellx marks \u2014 logo, symbol, bionic + wordmark\n  04-lockups/       \u00b7 wellx-labs lockup dark/light \u00b7 PNG + SVG \u00b7 icon tile\n  05-social/        \u00b7 avatar-400 \u00b7 favicon-64 \u00b7 og-1200\u00d7630 \u00b7 linkedin-1584\u00d7396\n  06-brand-art/     \u00b7 splash-1440\u00d7900 \u00b7 backdrop-1920\u00d71080\n  07-icons/         \u00b7 69 line icons \u00b7 SVG\n  08-textures/      \u00b7 6 spectral fields \u00b7 dark + light\n  09-designs/       \u00b7 every screen designed to date (live HTML)\n  10-handoff-kits/  \u00b7 per-product developer packages</pre></div></section><section class=\"doc\"><h2>Contact</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>System</span><span>design@wellx.ai \u2014 rules, tokens, new sanctioned uses. If a use is not shown, ask: the answer is often yes, and always recorded.</span></div><div class=\"spec-item\"><span>Sound</span><span>All thirteen sonic assets on request, with the composer brief.</span></div></div></section>"},
];



/* ---------- Labs Design System V2 — the third standalone system (rose · Figtree + mono numerals · dark-first) ---------- */
var LABS_V2_ROSE = "#C42663";
var LABS_V2 = [
{
  slug: "overview", num: "00", name: "Overview",
  lede: "The third standalone system — separate from the portal (--wx-*) and Labs v1 (--wl-*). Rose accent, Figtree with IBM Plex Mono for numbers only, dark-first with elevated surfaces, 2px Lucide icons. Built agent-first: strict recipes, hard validation, values mirrored live from the Figma source file.",
  body: "<section class=\"doc\"><h2>Identity at a glance</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Accent</span><span>Rose <code>#C42663</code> — hover <code>#A71E53</code>, active <code>#8C1745</code>, subtle <code>#FBE7F0</code>. Signal magenta <code>#F0366B</code> is AI and identity only — never a button.</span></div><div class=\"spec-item\"><span>Type</span><span>Figtree 400/600/700/800 (no 300, 500, 900; never italic) + IBM Plex Mono 400/500 for NUMBERS ONLY. Arabic: Noto Sans Arabic, +20pp leading in RTL.</span></div><div class=\"spec-item\"><span>Theme</span><span>DARK-FIRST: <code>:root</code> carries the elevated dark theme (cards #18181B on canvas #0B0B0C); <code>data-theme=\"light\"</code> opts into the light twin.</span></div><div class=\"spec-item\"><span>Icons</span><span>Lucide, 2px absolute stroke at every size · 16 / 20 / 24 · always currentColor.</span></div><div class=\"spec-item\"><span>Layout</span><span>4px grid · content always capped at 1440 and centered · sidebar 256 · controls 32/36/40.</span></div><div class=\"spec-item\"><span>Tokens</span><span><code>--wl2-*</code> CSS variables + Tailwind preset; JSON served by <code>get_labs_v2_tokens</code>; components by <code>get_labs_v2_component_spec</code>.</span></div></div></section><section class=\"doc\"><h2>Architecture</h2><p class=\"hint\">Three one-directional layers: primitives (private ramps) → semantics (the only public API — flat role names shared with the wx convention) → modes (dark default / light twin). Components follow Atomic Design — tokens → atoms → molecules → organisms, each spec declaring its level and a composes list so agents assemble bottom-up.</p><div class=\"codeblock\"><button class=\"copy-btn\" data-copy>Copy</button><pre>/* app entry */\n@import \"tokens/labs-v2.css\";   /* :root = dark · [data-theme=light] = twin */\n\n/* tailwind.config.js */\nmodule.exports = { presets: [require(\"./tokens/labs-v2-tailwind-preset.cjs\")] };</pre></div></section>"
},
{
  slug: "space", num: "03", name: "Space & shape",
  lede: "A 4px grid with pair-wise gaps borrowed from Apple’s proximity principle — spacing is defined between specific elements, not just as a scale.",
  body: "<section class=\"doc\"><h2>Scale & radius</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Spacing</span><span><code>space-1…16</code> = 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64. Off-grid values do not exist.</span></div><div class=\"spec-item\"><span>Radius</span><span>sm 6 (checkboxes) · md 8 (buttons, inputs) · lg 12 (cards, popovers) · xl 16 (dialogs) · full (pills, tags, avatars).</span></div><div class=\"spec-item\"><span>Controls</span><span>32 / 36 (default) / 40. Hit targets ≥ 24×24; 40+ on touch.</span></div><div class=\"spec-item\"><span>Shell</span><span>Sidebar 256 · topbar 56 · gutters 24/32 · dialogs 480/640 · content capped at 1440, always, centered.</span></div></div></section><section class=\"doc\"><h2>Pair-wise gaps (HIG-informed)</h2><p class=\"hint\">Related sits ≥ 2× closer than unrelated.</p><div class=\"card scroll-x\"><table class=\"tok-table\"><thead><tr><th>Pair</th><th>Gap</th></tr></thead><tbody><tr><td>icon ↔ label · label → input · button ↔ button · card title → body</td><td class=\"mono\">8</td></tr><tr><td>title ↔ subtitle · input ↔ helper · sidebar item ↔ item</td><td class=\"mono\">4</td></tr><tr><td>field → field · section title → content · card body → actions · cell padding-x</td><td class=\"mono\">16</td></tr><tr><td>page title → content · dialog content → footer · sidebar group ↔ group · min column gap</td><td class=\"mono\">24</td></tr><tr><td>form section → section</td><td class=\"mono\">32</td></tr><tr><td>section → section</td><td class=\"mono\">40</td></tr></tbody></table></div></section>"
},
{
  slug: "depth", num: "04", name: "Elevation · focus · motion",
  lede: "Hairlines first; one optional resting shadow in light; dark expresses depth through surface colour. Motion is feedback, never decoration.",
  body: "<section class=\"doc\"><h2>Elevation</h2><div class=\"spec-grid\"><div class=\"spec-item\"><span>Resting</span><span>Hairline border; LIGHT may add the optional <code>shadow-resting</code> (0 1 2 ink/6% + 0 3 8 ink/5%) — always with the border. DARK uses the elevated surface ladder (#18181B cards) and never resting shadows.</span></div><div class=\"spec-item\"><span>Floating</span><span><code>shadow-float</code> 0 4 16 ink/8% + 0 1 2 ink/5% — menus, popovers, tooltips, command bar.</span></div><div class=\"spec-item\"><span>Overlay</span><span><code>shadow-overlay</code> 0 16 40 ink/12% + scrim (ink/40% light · black/60% dark) — dialogs, sheets.</span></div></div></section><section class=\"doc\"><h2>Focus</h2><div class=\"card\"><ul><li>Ring 2px <code>#E0528B</code> with 2px offset — <code>:focus-visible</code> only; pointer clicks never flash it.</li><li>Inputs: ring-colour border + 3px spread halo at 20%.</li><li>The ring is never removed, only restyled — <code>outline:none</code> without replacement fails validation. Dialogs trap and return focus. Form controls must inherit <code>color</code>.</li></ul></div></section><section class=\"doc\"><h2>Motion</h2><p class=\"hint\">Durations 100 / 150 / 200, hard ceiling 300. Enter ease-out, exit ease-in (exits faster), move in-out. Transform + opacity only; reduced-motion = instant; nothing loops but progress.</p></section>"
}
];


var V2_SCALES = {
  Rose:  { "50":"#FBE7F0","100":"#F8D3E2","200":"#F2A8C6","300":"#EA7BA7","400":"#E0528B","500":"#D23A77","600":"#C42663","700":"#A71E53","800":"#8C1745","900":"#6E1136","950":"#4A0B24" },
  Gray:  { "0":"#FFFFFF","50":"#FAFAFA","100":"#F4F4F5","200":"#E9EAEC","300":"#D6D7DB","400":"#A6A8AF","500":"#71747C","600":"#565962","700":"#414449","800":"#26272B","850":"#232327","875":"#18181B","900":"#151518","950":"#0B0B0C" },
  Green: { "100":"#E2FAE9","400":"#4ADE80","600":"#16A34A","700":"#15803D" },
  Amber: { "100":"#FBEFC9","400":"#FBBF24","600":"#D97706","700":"#92610A" },
  Red:   { "100":"#FDDFDD","400":"#F87171","500":"#F04438","600":"#DC2626","700":"#B91C1C" },
  Blue:  { "100":"#DBE7FE","400":"#60A5FA","600":"#2563EB","700":"#1D4ED8" },
  Teal:  { "100":"#D3F7F5","700":"#0F766E" },
  Magenta: { "100":"#F9DCFC","700":"#A21CAF" },
  Orange:  { "100":"#FFEDE5","700":"#C2410C" }
};

var V2_SEMANTICS_ROWS = [
  ["background",        "#0B0B0C","gray/950", "#FFFFFF","gray/0",   "Page canvas"],
  ["card / popover",    "#18181B","gray/875 \u00b7 elevated", "#FFFFFF","gray/0", "Resting + floating surfaces"],
  ["muted",             "#2C2C31","gray/775", "#F4F4F5","gray/100", "Washes, hovers, header bands"],
  ["muted-soft",        "#232327","gray/850", "#FAFAFA","gray/50",  "Soft panels"],
  ["foreground",        "#FFFFFF","gray/0",   "#0B0B0C","gray/950", "Primary text"],
  ["text-secondary",    "#D6D7DB","gray/300", "#414449","gray/700", "Secondary text"],
  ["muted-foreground",  "#A6A8AF","gray/400", "#A6A8AF","gray/400", "Metadata"],
  ["border",            "#26272B","gray/800", "#E9EAEC","gray/200", "The hairline"],
  ["input",             "#414449","gray/700", "#D6D7DB","gray/300", "Control borders"],
  ["primary",           "#C42663","rose/600", "#C42663","rose/600", "The accent \u2014 white label 5.52:1"],
  ["primary-hover",     "#D23A77","rose/500", "#A71E53","rose/700", "Hover"],
  ["primary-active",    "#E0528B","rose/400", "#8C1745","rose/800", "Active"],
  ["link",              "#E0528B","rose/400", "#C42663","rose/600", "Links"],
  ["ring",              "#E0528B","rose/400", "#E0528B","rose/400", "Focus \u2014 3.65:1 light / 5.39:1 dark"],
  ["accent",            "#4A0B24","rose/950", "#FBE7F0","rose/50",  "Selected / tinted surfaces"],
  ["signal-ai",         "#F0366B","rose/signal", "#F0366B","rose/signal", "AI + identity ONLY \u2014 never a button"],
  ["destructive",       "#DC2626","red/600",  "#DC2626","red/600",  "Destructive actions"],
  ["success / warning / error / info", "#4ADE80","400s", "#16A34A","600s", "Status accents (dark uses 400s)"]
];

/* ---------- Labs V2 component demos — dark-first, Figtree + Plex Mono (both loaded in <head>) ---------- */
var V2F = "background:#0B0B0C;border:1px solid #26272B;border-radius:12px;padding:22px;font-family:Figtree,system-ui,sans-serif;width:100%;display:flex;flex-wrap:wrap;gap:12px;align-items:center;color:#FFFFFF";
var V2BTN = "display:inline-flex;align-items:center;justify-content:center;height:36px;padding:0 16px;border-radius:8px;font:600 14px Figtree,sans-serif;border:0";
var V2TAG = "display:inline-flex;align-items:center;gap:6px;padding:6px 12px;border-radius:999px;font:600 13px Figtree,sans-serif";
var V2DOT = '<span style="width:8px;height:8px;border-radius:99px;background:currentColor;display:inline-block"></span>';
var V2POP = "background:#18181B;border:1px solid #414449;border-radius:12px;box-shadow:0 4px 16px rgba(11,11,12,.5)";
var V2IN = "height:36px;background:#18181B;border:1px solid #414449;border-radius:8px;display:flex;align-items:center;gap:8px;padding:0 12px;font:400 14px Figtree";
var V2MONO = "'IBM Plex Mono',monospace";
var V2ROW = "height:32px;display:flex;align-items:center;gap:10px;padding:0 10px;border-radius:8px;font:400 14px Figtree";

/* 2px-stroke Lucide-style inline icons */
function v2ic(d, sz, col) {
  return '<svg width="' + sz + '" height="' + sz + '" viewBox="0 0 24 24" fill="none" stroke="' + col + '" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="flex:none">' + d + "</svg>";
}
var V2I = {
  search: '<circle cx="11" cy="11" r="7"/><path d="m21 21-4.3-4.3"/>',
  calendar: '<rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  chevDown: '<path d="m6 9 6 6 6-6"/>',
  chevRight: '<path d="m9 6 6 6-6 6"/>',
  chevsUpDown: '<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',
  sort: '<path d="m21 16-4 4-4-4M17 20V4M3 8l4-4 4 4M7 4v16"/>',
  check: '<path d="M20 6 9 17l-5-5"/>',
  plus: '<path d="M5 12h14M12 5v14"/>',
  x: '<path d="M18 6 6 18M6 6l12 12"/>',
  copy: '<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>',
  sparkle: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1"/>',
  home: '<path d="m3 10 9-7 9 7v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/>',
  file: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z"/><path d="M14 2v6h6"/>',
  image: '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-4-4L5 22"/>',
  zap: '<path d="M13 2 3 14h7l-1 8 11-13h-8l1-7z"/>',
  dots: '<circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/>',
  upload: '<path d="M12 15V3m0 0L7 8m5-5 5 5"/><path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4"/>',
  user: '<circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.6-6 8-6s8 2 8 6"/>',
  grid: '<rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/>',
  up: '<path d="M12 19V5m0 0-6 6m6-6 6 6"/>'
};
function v2av(n, sz) {
  return '<span style="width:' + sz + "px;height:" + sz + 'px;border-radius:999px;background:#4A0B24;color:#EA7BA7;display:inline-flex;align-items:center;justify-content:center;font:600 ' + Math.round(sz * 0.4) + 'px Figtree;flex:none">' + n + "</span>";
}
function v2chk(on) {
  return '<span style="width:16px;height:16px;border-radius:4px;' + (on ? "background:#C42663" : "border:1px solid #565962") + ';display:inline-flex;align-items:center;justify-content:center;flex:none">' + (on ? v2ic(V2I.check, 11, "#fff") : "") + "</span>";
}
function v2kbd(k) {
  return '<span style="display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 5px;background:#232327;border:1px solid #414449;border-radius:6px;font:500 11px Figtree;color:#A6A8AF">' + k + "</span>";
}
function v2spin(sz, col) {
  return '<span style="width:' + sz + "px;height:" + sz + "px;border:2px solid #2C2C31;border-top-color:" + col + ';border-radius:999px;display:inline-block;animation:wl2spin 1s linear infinite;flex:none"></span>';
}
function v2steprow(state, n, label) {
  var dot, lab;
  if (state === "done") { dot = '<span style="width:24px;height:24px;border-radius:999px;background:#C42663;display:inline-flex;align-items:center;justify-content:center">' + v2ic(V2I.check, 12, "#fff") + "</span>"; lab = '<span style="font:400 14px Figtree;color:#D6D7DB">' + label + "</span>"; }
  else if (state === "active") { dot = '<span style="width:24px;height:24px;border-radius:999px;background:#C42663;color:#fff;display:inline-flex;align-items:center;justify-content:center;font:600 12px Figtree">' + n + "</span>"; lab = '<span style="font:600 14px Figtree;color:#FFFFFF">' + label + "</span>"; }
  else { dot = '<span style="width:24px;height:24px;border-radius:999px;background:#2C2C31;color:#71747C;display:inline-flex;align-items:center;justify-content:center;font:600 12px Figtree">' + n + "</span>"; lab = '<span style="font:400 14px Figtree;color:#71747C">' + label + "</span>"; }
  return '<span style="display:inline-flex;align-items:center;gap:8px">' + dot + lab + "</span>";
}
function v2tlItem(marker, title, body, time, last) {
  return '<div style="display:flex;gap:12px"><div style="display:flex;flex-direction:column;align-items:center;gap:4px">' + marker +
    (last ? "" : '<div style="width:2px;flex:1;background:#26272B;min-height:18px"></div>') +
    '</div><div style="padding-bottom:' + (last ? 0 : 18) + 'px"><span style="font:600 14px Figtree">' + title + '</span> <span style="font:400 14px Figtree;color:#A6A8AF">' + body + '</span><div style="font:400 12px Figtree;color:#71747C;margin-top:2px">' + time + "</div></div></div>";
}
function v2histrow(state, title, time) {
  var wash = state === "rest" ? "" : "background:#232327;";
  var t = state === "active" ? "font:600 14px Figtree" : "font:400 14px Figtree;color:#D6D7DB";
  var trail = state === "hover" ? v2ic(V2I.dots, 16, "#A6A8AF") : '<span style="font:400 12px Figtree;color:#71747C">' + time + "</span>";
  return '<div style="' + V2ROW + ";width:232px;justify-content:space-between;" + wash + '"><span style="' + t + ';overflow:hidden;text-overflow:ellipsis;white-space:nowrap">' + title + "</span>" + trail + "</div>";
}

var V2_DEMOS = {};

/* ---- atoms ---- */
V2_DEMOS["button"] = '<div style="' + V2F + '">' +
  '<button style="' + V2BTN + ';background:#C42663;color:#fff">Primary</button>' +
  '<button style="' + V2BTN + ';background:#D23A77;color:#fff">Hover</button>' +
  '<button style="' + V2BTN + ';background:#E0528B;color:#fff">Active</button>' +
  '<button style="' + V2BTN + ';background:#18181B;color:#fff;border:1px solid #414449">Secondary</button>' +
  '<button style="' + V2BTN + ';background:transparent;color:#D6D7DB">Ghost</button>' +
  '<button style="' + V2BTN + ';background:#DC2626;color:#fff">Destructive</button>' +
  '<button style="' + V2BTN + ';background:#18181B;color:#565962;border:1px solid #26272B" disabled>Disabled</button></div>';

V2_DEMOS["tag"] = '<div style="' + V2F + ';background:#18181B">' +
  '<span style="' + V2TAG + ';background:#EFF0F2;color:#565962">' + V2DOT + "Neutral</span>" +
  '<span style="' + V2TAG + ';background:#E2FAE9;color:#15803D">' + V2DOT + "Success</span>" +
  '<span style="' + V2TAG + ';background:#FBEFC9;color:#92610A">' + V2DOT + "Warning</span>" +
  '<span style="' + V2TAG + ';background:#FDDFDD;color:#B91C1C">' + V2DOT + "Error</span>" +
  '<span style="' + V2TAG + ';background:#DBE7FE;color:#1D4ED8">' + V2DOT + "Info</span>" +
  '<span style="' + V2TAG + ';background:#D3F7F5;color:#0F766E">' + V2DOT + "Viewed</span>" +
  '<span style="' + V2TAG + ';background:#F9DCFC;color:#A21CAF">' + V2DOT + "Hot lead</span>" +
  '<span style="' + V2TAG + ';background:#FFEDE5;color:#C2410C">' + V2DOT + "Bounced</span></div>";

V2_DEMOS["avatar"] = '<div style="' + V2F + '">' +
  v2av("SC", 24) + v2av("AH", 32) + v2av("MP", 40) +
  '<span style="width:32px;height:32px;border-radius:999px;background:#2C2C31;display:inline-flex;align-items:center;justify-content:center">' + v2ic(V2I.user, 16, "#A6A8AF") + "</span>" +
  '<span style="font:400 12px Figtree;color:#71747C">24 cells &amp; chips · 32 nav &amp; lists · 40 record headers · icon fallback</span></div>';

V2_DEMOS["spinner"] = '<div style="' + V2F + '">' + v2spin(16, "#A6A8AF") + v2spin(20, "#A6A8AF") + v2spin(24, "#A6A8AF") +
  '<button style="' + V2BTN + ';background:#C42663;color:#fff;gap:8px">' + v2spin(16, "#fff") + "Saving…</button>" +
  '<span style="font:400 12px Figtree;color:#71747C">16 buttons · 20 controls · 24 panel loads · 1s linear</span></div>';

V2_DEMOS["skeleton"] = '<div style="' + V2F + ';align-items:flex-start"><div style="display:flex;gap:12px;align-items:flex-start;width:100%;max-width:380px">' +
  '<span style="width:40px;height:40px;border-radius:999px;background:#2C2C31;animation:wl2pulse 1.5s ease-in-out infinite;flex:none"></span>' +
  '<div style="flex:1;display:flex;flex-direction:column;gap:8px">' +
  '<span style="height:12px;border-radius:6px;background:#2C2C31;width:60%;animation:wl2pulse 1.5s ease-in-out infinite"></span>' +
  '<span style="height:12px;border-radius:6px;background:#2C2C31;width:90%;animation:wl2pulse 1.5s ease-in-out infinite"></span>' +
  '<span style="height:48px;border-radius:8px;background:#2C2C31;animation:wl2pulse 1.5s ease-in-out infinite"></span></div></div></div>';

V2_DEMOS["separator"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:16px">' +
  '<div><div style="font:400 14px Figtree;color:#D6D7DB;margin-bottom:12px">Section above</div><div style="height:1px;background:#26272B"></div><div style="font:400 14px Figtree;color:#D6D7DB;margin-top:12px">Section below</div></div>' +
  '<div style="display:flex;align-items:center;gap:12px;font:400 14px Figtree;color:#A6A8AF">Docs<span style="width:1px;height:16px;background:#26272B"></span>API<span style="width:1px;height:16px;background:#26272B"></span>Support</div></div>';

V2_DEMOS["label"] = '<div style="' + V2F + ';align-items:flex-start"><div style="min-width:240px">' +
  '<div style="font:600 14px Figtree;margin-bottom:8px">Email address</div><div style="' + V2IN + ';color:#71747C">you@company.com</div></div>' +
  '<div style="min-width:240px"><div style="font:600 14px Figtree;margin-bottom:8px">Policy number <span style="color:#F87171">*</span></div><div style="' + V2IN + ';color:#71747C">Required field</div></div></div>';

V2_DEMOS["helper-text"] = '<div style="' + V2F + ';align-items:flex-start"><div style="min-width:260px"><div style="' + V2IN + '" >sarah@wellx.ai</div>' +
  '<div style="font:400 12px Figtree;color:#A6A8AF;margin-top:4px">We never share your email.</div></div>' +
  '<div style="min-width:260px"><div style="' + V2IN + ';border-color:#DC2626">sarah@wellx</div>' +
  '<div style="font:400 12px Figtree;color:#F87171;margin-top:4px;display:flex;align-items:center;gap:4px">' + v2ic(V2I.x, 12, "#F87171") + "Enter a full email address.</div></div></div>";

V2_DEMOS["checkbox"] = '<div style="' + V2F + '">' +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 14px Figtree">' + v2chk(false) + "Unchecked</span>" +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 14px Figtree">' + v2chk(true) + "Checked</span>" +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 14px Figtree"><span style="width:16px;height:16px;border-radius:4px;background:#C42663;display:inline-flex;align-items:center;justify-content:center"><span style="width:8px;height:2px;background:#fff;border-radius:1px"></span></span>Indeterminate</span>' +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 14px Figtree;color:#565962;opacity:.7"><span style="width:16px;height:16px;border-radius:4px;border:1px solid #414449"></span>Disabled</span></div>';

V2_DEMOS["radio"] = '<div style="' + V2F + '">' +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 14px Figtree"><span style="width:16px;height:16px;border-radius:999px;border:1px solid #565962"></span>Monthly</span>' +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:600 14px Figtree"><span style="width:16px;height:16px;border-radius:999px;background:#C42663;display:inline-flex;align-items:center;justify-content:center"><span style="width:6px;height:6px;border-radius:999px;background:#fff"></span></span>Annual</span>' +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 14px Figtree;color:#565962;opacity:.7"><span style="width:16px;height:16px;border-radius:999px;border:1px solid #414449"></span>Custom</span></div>';

V2_DEMOS["switch"] = '<div style="' + V2F + '">' +
  '<span style="display:inline-flex;align-items:center;gap:10px;font:400 14px Figtree"><span style="width:36px;height:20px;border-radius:999px;background:#414449;display:inline-flex;align-items:center;padding:2px"><span style="width:16px;height:16px;border-radius:999px;background:#fff"></span></span>Notifications off</span>' +
  '<span style="display:inline-flex;align-items:center;gap:10px;font:400 14px Figtree"><span style="width:36px;height:20px;border-radius:999px;background:#C42663;display:inline-flex;align-items:center;justify-content:flex-end;padding:2px"><span style="width:16px;height:16px;border-radius:999px;background:#fff"></span></span>Auto-renew on</span></div>';

V2_DEMOS["input"] = '<div style="' + V2F + '">' +
  '<div style="' + V2IN + ';min-width:200px;color:#71747C">Placeholder…</div>' +
  '<div style="' + V2IN + ';min-width:200px">' + v2ic(V2I.search, 16, "#A6A8AF") + "With leading icon</div>" +
  '<div style="' + V2IN + ';min-width:200px;border-color:#E0528B;box-shadow:0 0 0 3px rgba(224,82,139,.2)">Focused</div>' +
  '<div style="' + V2IN + ';min-width:200px;color:#565962;background:#151518">Disabled</div></div>';

V2_DEMOS["textarea"] = '<div style="' + V2F + '"><div style="background:#18181B;border:1px solid #414449;border-radius:8px;padding:10px 12px;min-height:80px;width:100%;max-width:420px;font:400 14px Figtree;color:#D6D7DB;line-height:1.5">The repair shop on this claim matches two prior claims from different policyholders.<br><span style="color:#71747C">Min-height 80 · top-aligned · resizable in code</span></div></div>';

V2_DEMOS["tooltip"] = '<div style="' + V2F + ';padding-top:34px"><div style="position:relative;display:inline-block">' +
  '<div style="position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#151518;border:1px solid #414449;border-radius:6px;padding:5px 8px;display:flex;align-items:center;gap:6px;white-space:nowrap;box-shadow:0 4px 16px rgba(11,11,12,.5)"><span style="font:400 12px Figtree;color:#fff">Duplicate</span>' + v2kbd("⌘D") + "</div>" +
  '<button style="' + V2BTN + ';background:#18181B;color:#fff;border:1px solid #414449">Hover target</button></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">gray-900 pill in BOTH themes · 500ms open delay · never interactive content</span></div>';

V2_DEMOS["delta"] = '<div style="' + V2F + '">' +
  '<span style="' + V2TAG + ';padding:3px 10px;font-size:12px;background:#E2FAE9;color:#15803D">↑ +12.4%</span>' +
  '<span style="' + V2TAG + ';padding:3px 10px;font-size:12px;background:#FDDFDD;color:#B91C1C">↓ −3.2%</span>' +
  '<span style="' + V2TAG + ';padding:3px 10px;font-size:12px;background:#EFF0F2;color:#565962">→ 0.0%</span>' +
  '<span style="font:400 12px Figtree;color:#71747C">direction = movement, not sentiment — invert in code for down-is-good metrics</span></div>';

V2_DEMOS["kbd"] = '<div style="' + V2F + '">' +
  '<span style="display:inline-flex;gap:4px">' + v2kbd("⌘") + v2kbd("K") + "</span>" +
  '<span style="display:inline-flex;gap:4px">' + v2kbd("⇧") + v2kbd("↵") + "</span>" + v2kbd("esc") +
  '<span style="font:400 12px Figtree;color:#71747C">one key per cap · combos are sibling caps at gap 4 · never interactive</span></div>';

V2_DEMOS["progress-bar"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:16px;max-width:460px">' +
  '<div><div style="display:flex;justify-content:space-between;font:400 12px Figtree;color:#A6A8AF;margin-bottom:6px"><span>Uploading claims batch</span><span style="font-family:' + V2MONO + '">64%</span></div><div style="height:8px;border-radius:999px;background:#2C2C31"><div style="width:64%;height:8px;border-radius:999px;background:#C42663"></div></div></div>' +
  '<div style="height:8px;border-radius:999px;background:#2C2C31"><div style="width:25%;height:8px;border-radius:999px;background:#C42663"></div></div></div>';

V2_DEMOS["suggestion-chip"] = '<div style="' + V2F + '">' +
  '<span style="' + V2TAG + ';background:#18181B;border:1px solid #414449;color:#D6D7DB;font-weight:400;font-size:14px">' + v2ic(V2I.sparkle, 16, "#F0366B") + "Summarize this portfolio</span>" +
  '<span style="' + V2TAG + ';background:#18181B;border:1px solid #414449;color:#D6D7DB;font-weight:400;font-size:14px">' + v2ic(V2I.sparkle, 16, "#F0366B") + "Flag unusual claims</span>" +
  '<span style="font:400 12px Figtree;color:#71747C">2–4 chips above the prompt · verb-first · ≤ 4 words</span></div>';

V2_DEMOS["thinking-indicator"] = '<div style="' + V2F + '"><span style="display:grid;grid-template-columns:repeat(3,4px);gap:2px">' +
  [1, 0.4, 0.75, 0.55, 1, 0.3, 0.85, 0.5, 0.65].map(function (o, i) {
    return '<span style="width:4px;height:4px;border-radius:1px;background:#EA7BA7;opacity:' + o + ";animation:wl2pulse 1.2s ease-in-out " + (i * 0.07).toFixed(2) + 's infinite"></span>';
  }).join("") + "</span>" +
  '<span style="font:400 14px Figtree;color:#A6A8AF">Reading 1,204 claims…</span>' +
  '<span style="font:400 12px Figtree;color:#71747C">3×3 rose-300 blocks · 3.6s sweep cycle · shimmer → rows → columns</span></div>';

V2_DEMOS["citation-chip"] = '<div style="' + V2F + '"><span style="font:400 14px Figtree;color:#D6D7DB;line-height:1.6;max-width:520px">Loss frequency rose 14% in Q3' +
  '<span style="display:inline-flex;width:18px;height:18px;border-radius:999px;background:#2C2C31;color:#A6A8AF;font:600 11px Figtree;align-items:center;justify-content:center;vertical-align:text-bottom;margin:0 3px">1</span>' +
  "driven by the two coastal schemes" +
  '<span style="display:inline-flex;width:18px;height:18px;border-radius:999px;background:#2C2C31;color:#A6A8AF;font:600 11px Figtree;align-items:center;justify-content:center;vertical-align:text-bottom;margin:0 3px">2</span>.' +
  '</span><span style="' + V2TAG + ';background:#232327;color:#A6A8AF;font-weight:500;font-size:11px;padding:3px 8px"><span style="width:12px;height:12px;border-radius:999px;background:#414449;display:inline-block"></span>wellx.ai</span></div>';

V2_DEMOS["copy-button"] = '<div style="' + V2F + '">' +
  '<span style="font:500 13px ' + V2MONO + ';color:#D6D7DB">POL/2026/88431</span>' +
  '<span style="width:24px;height:24px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center">' + v2ic(V2I.copy, 16, "#A6A8AF") + "</span>" +
  '<span style="width:24px;height:24px;border-radius:6px;background:#2C2C31;display:inline-flex;align-items:center;justify-content:center">' + v2ic(V2I.copy, 16, "#fff") + "</span>" +
  '<span style="width:24px;height:24px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center">' + v2ic(V2I.check, 16, "#4ADE80") + "</span>" +
  '<span style="font:400 12px Figtree;color:#71747C">rest · hover · copied (~2s, then reverts)</span></div>';

/* ---- molecules ---- */
V2_DEMOS["menu-item"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:2px;max-width:280px">' +
  '<div style="' + V2ROW + '">' + v2ic(V2I.grid, 16, "#A6A8AF") + 'View settings<span style="margin-left:auto;display:inline-flex;gap:4px">' + v2kbd("⌘") + v2kbd(",") + "</span></div>" +
  '<div style="' + V2ROW + ';background:#2C2C31">' + v2ic(V2I.copy, 16, "#A6A8AF") + "Duplicate view</div>" +
  '<div style="' + V2ROW + '">Set as default<span style="margin-left:auto">' + v2ic(V2I.check, 16, "#C42663") + "</span></div>" +
  '<div style="' + V2ROW + ';background:rgba(248,113,113,.1);color:#F87171">' + v2ic(V2I.x, 16, "#F87171") + "Delete view</div></div>";

V2_DEMOS["menu"] = '<div style="' + V2F + '"><div style="' + V2POP + ';padding:6px;min-width:220px">' +
  '<div style="' + V2ROW + '">View settings</div>' +
  '<div style="' + V2ROW + ';background:#2C2C31">Import / Export</div>' +
  '<div style="height:1px;background:#26272B;margin:6px 4px"></div>' +
  '<div style="' + V2ROW + ';color:#F87171">Delete view</div></div></div>';

V2_DEMOS["tab-item"] = '<div style="' + V2F + '">' +
  '<span style="padding:10px 14px;font:600 14px Figtree;border-bottom:2px solid #C42663">Active</span>' +
  '<span style="padding:10px 14px;font:400 14px Figtree;color:#A6A8AF;border-bottom:2px solid transparent">Rest</span>' +
  '<span style="padding:10px 14px;font:400 14px Figtree;color:#FFFFFF;border-bottom:2px solid transparent">Hover</span></div>';

V2_DEMOS["tabs"] = '<div style="' + V2F + '"><div style="display:flex;gap:4px;border-bottom:1px solid #26272B;width:100%">' +
  ["Overview|1", "Claims|0", "Members|0", "Settings|0"].map(function (t) { var p = t.split("|"); var on = p[1] === "1"; return '<span style="padding:10px 14px;font:600 14px Figtree;color:' + (on ? "#FFFFFF" : "#A6A8AF") + ";border-bottom:2px solid " + (on ? "#C42663" : "transparent") + ';margin-bottom:-1px">' + p[0] + "</span>"; }).join("") + "</div></div>";

V2_DEMOS["select"] = '<div style="' + V2F + ';align-items:flex-start">' +
  '<div style="' + V2IN + ';min-width:220px;justify-content:space-between">Annual renewal' + v2ic(V2I.chevsUpDown, 16, "#A6A8AF") + "</div>" +
  '<div><div style="' + V2IN + ';min-width:220px;justify-content:space-between;border-color:#E0528B;box-shadow:0 0 0 3px rgba(224,82,139,.2)">Annual renewal' + v2ic(V2I.chevsUpDown, 16, "#A6A8AF") + "</div>" +
  '<div style="' + V2POP + ';padding:6px;min-width:220px;margin-top:6px">' +
  '<div style="' + V2ROW + ';justify-content:space-between">Annual renewal' + v2ic(V2I.check, 16, "#C42663") + "</div>" +
  '<div style="' + V2ROW + ';background:#2C2C31">Monthly</div>' +
  '<div style="' + V2ROW + '">One-off</div></div></div></div>';

V2_DEMOS["combobox"] = '<div style="' + V2F + '"><div style="' + V2POP + ';min-width:260px;overflow:hidden">' +
  '<div style="display:flex;align-items:center;gap:8px;padding:10px 12px;border-bottom:1px solid #26272B">' + v2ic(V2I.search, 16, "#A6A8AF") + '<span style="font:400 14px Figtree;color:#71747C">Search brokers…</span></div>' +
  '<div style="padding:6px">' +
  '<div style="' + V2ROW + ';background:#2C2C31">' + v2av("AC", 20) + "Acme Insurance Brokers</div>" +
  '<div style="' + V2ROW + '">' + v2av("NB", 20) + "Northwind Brokerage</div>" +
  '<div style="' + V2ROW + ';color:#71747C;font-size:13px">No more results</div></div></div></div>';

V2_DEMOS["field"] = '<div style="' + V2F + '"><div style="min-width:280px">' +
  '<div style="font:600 14px Figtree;margin-bottom:8px">Amount</div>' +
  '<div style="height:36px;background:#18181B;border:1px solid #414449;border-radius:8px;display:flex;align-items:center;padding:0 12px;font:500 14px ' + V2MONO + '">MVR 12,000.00</div>' +
  '<div style="font:400 12px Figtree;color:#A6A8AF;margin-top:4px">Safe to apply: MVR 12,000.00</div></div>' +
  '<div style="min-width:280px"><div style="font:600 14px Figtree;margin-bottom:8px">Focused</div>' +
  '<div style="height:36px;background:#18181B;border:1px solid #E0528B;box-shadow:0 0 0 3px rgba(224,82,139,.2);border-radius:8px;display:flex;align-items:center;padding:0 12px;font:400 14px Figtree;color:#A6A8AF">Enter value…</div></div>' +
  '<div style="min-width:280px"><div style="font:600 14px Figtree;margin-bottom:8px">Error</div>' +
  '<div style="height:36px;background:#18181B;border:1px solid #DC2626;border-radius:8px;display:flex;align-items:center;padding:0 12px;font:400 14px Figtree">14,200.00</div>' +
  '<div style="font:400 12px Figtree;color:#F87171;margin-top:4px">Exceeds the safe amount</div></div></div>';

V2_DEMOS["search-input"] = '<div style="' + V2F + '">' +
  '<div style="' + V2IN + ';min-width:260px;justify-content:space-between"><span style="display:inline-flex;align-items:center;gap:8px">' + v2ic(V2I.search, 16, "#A6A8AF") + '<span style="color:#71747C">Search</span></span><span style="display:inline-flex;gap:4px">' + v2kbd("⌘") + v2kbd("K") + "</span></div>" +
  '<div style="' + V2IN + ';min-width:220px">' + v2ic(V2I.search, 16, "#A6A8AF") + '<span style="color:#71747C">Filter companies…</span></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">⌘K variant is reserved for the sidebar quick-actions search</span></div>';

V2_DEMOS["alert"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch">' +
  '<div style="background:#FBEFC9;border-radius:10px;padding:14px 16px;color:#92610A"><div style="font:600 14px Figtree">This creates a credit</div><div style="font:400 13px Figtree;margin-top:2px">Applying more than the safe amount creates a credit that finance must reverse.</div></div>' +
  '<div style="background:#E2FAE9;border-radius:10px;padding:14px 16px;color:#15803D"><div style="font:600 14px Figtree">Posted to reservation RL-2091</div><div style="font:400 13px Figtree;margin-top:2px">Nothing remains on account.</div></div></div>';

V2_DEMOS["toast"] = '<div style="' + V2F + '"><div style="' + V2POP + ';padding:12px 16px;display:flex;align-items:center;gap:10px">' +
  '<span style="width:18px;height:18px;border-radius:99px;background:#E2FAE9;color:#15803D;display:inline-flex;align-items:center;justify-content:center;font:700 11px Figtree">✓</span>' +
  '<span style="font:400 14px Figtree">Renewal issued · policy <span style="font:500 13px ' + V2MONO + '">POL/2026/88431</span></span>' +
  '<span style="font:600 13px Figtree;color:#E0528B;margin-left:8px">Undo</span></div></div>';

V2_DEMOS["card"] = '<div style="' + V2F + '"><div style="flex:1;min-width:220px;background:#18181B;border:1px solid #26272B;border-radius:12px;padding:20px">' +
  '<div style="font:600 16px Figtree;margin-bottom:8px">Dark — elevated surface</div><div style="font:400 14px Figtree;color:#A6A8AF">card #18181B on canvas #0B0B0C. The surface step carries the depth — no shadow.</div></div>' +
  '<div style="flex:1;min-width:220px;background:#FFFFFF;border:1px solid #E9EAEC;border-radius:12px;padding:20px;box-shadow:0 1px 2px rgba(11,11,12,.06),0 3px 8px rgba(11,11,12,.05)">' +
  '<div style="font:600 16px Figtree;color:#0B0B0C;margin-bottom:8px">Light — optional resting shadow</div><div style="font:400 14px Figtree;color:#71747C">shadow-resting over the hairline. Optional, never required.</div></div></div>';

V2_DEMOS["kpi-tile"] = '<div style="' + V2F + '"><div style="background:#18181B;border:1px solid #26272B;border-radius:12px;padding:20px;min-width:240px">' +
  '<div style="font:400 14px Figtree;color:#A6A8AF">Events Created</div>' +
  '<div style="font:500 30px ' + V2MONO + ';letter-spacing:-0.3px;line-height:1.1;margin:6px 0">4,275,190.63</div>' +
  '<span style="' + V2TAG + ';padding:3px 10px;font-size:12px;background:#E2FAE9;color:#15803D">↑ 12% from last period</span></div>' +
  '<div style="background:#18181B;border:1px solid #26272B;border-radius:12px;padding:20px;min-width:200px">' +
  '<div style="font:400 14px Figtree;color:#A6A8AF">Loss ratio</div>' +
  '<div style="font:500 30px ' + V2MONO + ';line-height:1.1;margin:6px 0">0.91</div>' +
  '<span style="' + V2TAG + ';padding:3px 10px;font-size:12px;background:#FDDFDD;color:#B91C1C">↓ 3% from last period</span></div></div>';

V2_DEMOS["popover"] = '<div style="' + V2F + '"><div style="' + V2POP + ';padding:16px;min-width:260px">' +
  '<div style="font:600 14px Figtree;margin-bottom:4px">Share this view</div>' +
  '<div style="font:400 13px Figtree;color:#A6A8AF;margin-bottom:12px">Everyone in the workspace can open shared views.</div>' +
  '<div style="display:flex;gap:8px"><div style="' + V2IN + ';flex:1;height:32px;font-size:13px;color:#71747C">sarah@wellx.ai</div>' +
  '<button style="' + V2BTN + ';height:32px;background:#C42663;color:#fff;font-size:13px">Invite</button></div></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">interactive content — everything a Tooltip must never hold</span></div>';

V2_DEMOS["description-list"] = '<div style="' + V2F + '"><div style="min-width:320px;display:flex;flex-direction:column;gap:12px">' +
  [["Policy", 'POL/2026/88431', 1], ["Broker", "Northwind Brokerage", 0], ["Premium", "MVR 48,200.00", 1], ["Last claim", "—", 0]].map(function (r) {
    return '<div style="display:flex;gap:16px"><span style="width:120px;flex:none;font:400 14px Figtree;color:#A6A8AF">' + r[0] + '</span><span style="font:' + (r[2] ? "500 13px " + V2MONO : "400 14px Figtree") + ';color:' + (r[1] === "—" ? "#71747C" : "#FFFFFF") + '">' + r[1] + "</span></div>";
  }).join("") + "</div></div>";

V2_DEMOS["empty-state"] = '<div style="' + V2F + ';justify-content:center"><div style="text-align:center;padding:24px">' +
  '<div style="width:44px;height:44px;border:1.5px solid #414449;border-radius:12px;margin:0 auto 12px;display:flex;align-items:center;justify-content:center;color:#A6A8AF;font:400 20px Figtree">⊕</div>' +
  '<div style="font:600 18px Figtree">No segments yet</div>' +
  '<div style="font:400 14px Figtree;color:#A6A8AF;margin:6px 0 16px">Create a segment to target testers by any field.</div>' +
  '<button style="' + V2BTN + ';background:#C42663;color:#fff">Create segment</button></div></div>';

V2_DEMOS["legend"] = '<div style="' + V2F + '">' +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 12px Figtree;color:#D6D7DB"><span style="width:8px;height:8px;border-radius:999px;background:#C42663"></span>Gross written</span>' +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 12px Figtree;color:#D6D7DB"><span style="width:8px;height:8px;border-radius:999px;background:#60A5FA"></span>Net earned</span>' +
  '<span style="display:inline-flex;align-items:center;gap:8px;font:400 12px Figtree;color:#D6D7DB;opacity:.4"><span style="width:8px;height:8px;border-radius:999px;background:#4ADE80"></span>Ceded (toggled off)</span></div>';

V2_DEMOS["chart-tooltip"] = '<div style="' + V2F + '"><div style="' + V2POP + ';border-radius:8px;padding:10px 12px;min-width:180px">' +
  '<div style="font:600 12px Figtree;margin-bottom:8px">Mar 14, 2026</div>' +
  '<div style="display:flex;align-items:center;gap:8px;font:400 12px Figtree;color:#A6A8AF;margin-bottom:4px"><span style="width:8px;height:8px;border-radius:999px;background:#C42663"></span>Gross written<span style="margin-left:auto;font:500 12px ' + V2MONO + ';color:#fff">48,200</span></div>' +
  '<div style="display:flex;align-items:center;gap:8px;font:400 12px Figtree;color:#A6A8AF"><span style="width:8px;height:8px;border-radius:999px;background:#60A5FA"></span>Net earned<span style="margin-left:auto;font:500 12px ' + V2MONO + ';color:#fff">31,840</span></div></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">follows the cursor at 8px · no animation · mono values</span></div>';

V2_DEMOS["avatar-group"] = '<div style="' + V2F + '"><span style="display:inline-flex">' +
  '<span style="border:2px solid #0B0B0C;border-radius:999px">' + v2av("SC", 24) + "</span>" +
  '<span style="border:2px solid #0B0B0C;border-radius:999px;margin-left:-6px">' + v2av("AH", 24) + "</span>" +
  '<span style="border:2px solid #0B0B0C;border-radius:999px;margin-left:-6px">' + v2av("MP", 24) + "</span>" +
  '<span style="border:2px solid #0B0B0C;border-radius:999px;margin-left:-6px;width:24px;height:24px;background:#2C2C31;color:#A6A8AF;display:inline-flex;align-items:center;justify-content:center;font:600 10px Figtree;border-radius:999px">+3</span></span>' +
  '<span style="font:400 12px Figtree;color:#71747C">max 3 visible · −6px overlap · 2px canvas ring · +N opens the full list</span></div>';

V2_DEMOS["calendar-day"] = '<div style="' + V2F + '">' +
  '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:400 14px Figtree">14</span>' +
  '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:600 14px Figtree;color:#E0528B">15</span>' +
  '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:600 14px Figtree;background:#C42663;color:#fff">16</span>' +
  '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:400 14px Figtree;color:#565962">31</span>' +
  '<span style="font:400 12px Figtree;color:#71747C">default · today · selected · outside month</span></div>';

V2_DEMOS["calendar"] = (function () {
  var days = '<div style="display:grid;grid-template-columns:repeat(7,32px);gap:4px;justify-items:center">' +
    ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"].map(function (d) { return '<span style="font:600 11px Figtree;color:#71747C;height:24px;display:inline-flex;align-items:center">' + d + "</span>"; }).join("");
  for (var i = -1; i < 34; i++) {
    var n = i < 1 ? 30 + i : (i > 31 ? i - 31 : i);
    var out = i < 1 || i > 31, sel = i === 14, today = i === 11;
    days += '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:' + (sel || today ? 600 : 400) + ' 13px Figtree;' +
      (sel ? "background:#C42663;color:#fff" : today ? "color:#E0528B" : out ? "color:#565962" : "color:#D6D7DB") + '">' + n + "</span>";
  }
  days += "</div>";
  return '<div style="' + V2F + ';justify-content:center"><div style="' + V2POP + ';padding:16px">' +
    '<div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px"><span style="transform:rotate(180deg);display:inline-flex">' + v2ic(V2I.chevRight, 16, "#A6A8AF") + '</span><span style="font:600 14px Figtree">March 2026</span>' + v2ic(V2I.chevRight, 16, "#A6A8AF") + "</div>" + days + "</div></div>";
})();

V2_DEMOS["date-picker"] = '<div style="' + V2F + '">' +
  '<div style="' + V2IN + ';min-width:220px">' + v2ic(V2I.calendar, 16, "#A6A8AF") + "Mar 16, 2026</div>" +
  '<div style="' + V2IN + ';min-width:220px;border-color:#E0528B;box-shadow:0 0 0 3px rgba(224,82,139,.2)">' + v2ic(V2I.calendar, 16, "#A6A8AF") + '<span style="color:#71747C">Pick a date…</span></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">opens the Calendar popover · typing always possible · min/max disable impossible dates</span></div>';

V2_DEMOS["number-input"] = '<div style="' + V2F + '">' +
  '<div style="height:36px;background:#18181B;border:1px solid #414449;border-radius:8px;display:inline-flex;align-items:stretch;overflow:hidden">' +
  '<span style="display:inline-flex;align-items:center;padding:0 12px;font:400 14px ' + V2MONO + '">42</span>' +
  '<span style="display:inline-flex;flex-direction:column;border-left:1px solid #414449">' +
  '<span style="width:24px;flex:1;display:inline-flex;align-items:center;justify-content:center;border-bottom:1px solid #414449"><span style="transform:rotate(-90deg);display:inline-flex">' + v2ic(V2I.chevRight, 12, "#A6A8AF") + "</span></span>" +
  '<span style="width:24px;flex:1;display:inline-flex;align-items:center;justify-content:center"><span style="transform:rotate(90deg);display:inline-flex">' + v2ic(V2I.chevRight, 12, "#A6A8AF") + "</span></span></span></div>" +
  '<span style="font:400 12px Figtree;color:#71747C">↑↓ steps · ⇧ steps 10× · values tnum mono · wrap in Field</span></div>';

V2_DEMOS["tag-input"] = '<div style="' + V2F + '"><div style="min-height:36px;background:#18181B;border:1px solid #414449;border-radius:8px;display:flex;align-items:center;gap:6px;padding:4px 8px;flex-wrap:wrap;min-width:340px">' +
  ["Coastal", "Marine"].map(function (t) { return '<span style="' + V2TAG + ';background:#2C2C31;color:#D6D7DB;font-weight:500;font-size:12px;padding:3px 8px">' + t + v2ic(V2I.x, 12, "#A6A8AF") + "</span>"; }).join("") +
  '<span style="font:400 14px Figtree;color:#71747C">Add scheme…</span></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">Enter/comma commits · Backspace removes last · pills stay neutral inside the field</span></div>';

V2_DEMOS["file-upload"] = '<div style="' + V2F + ';justify-content:center"><div style="border:1px dashed #414449;border-radius:12px;padding:28px 40px;text-align:center;min-width:320px">' +
  '<div style="width:40px;height:40px;border-radius:10px;background:#2C2C31;margin:0 auto 10px;display:flex;align-items:center;justify-content:center">' + v2ic(V2I.upload, 18, "#A6A8AF") + "</div>" +
  '<div style="font:400 14px Figtree"><span style="font-weight:600;color:#E0528B">Click to upload</span> <span style="color:#A6A8AF">or drag and drop</span></div>' +
  '<div style="font:400 12px Figtree;color:#71747C;margin-top:4px">PDF, CSV or XLSX · up to 20 MB</div></div></div>';

V2_DEMOS["file-upload-item"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;max-width:460px">' +
  '<div style="display:flex;gap:10px;align-items:center"><span style="width:32px;height:32px;border-radius:8px;background:#2C2C31;display:inline-flex;align-items:center;justify-content:center;flex:none">' + v2ic(V2I.file, 16, "#A6A8AF") + "</span>" +
  '<div style="flex:1"><div style="font:600 13px Figtree">claims-q3.csv</div><div style="height:6px;border-radius:999px;background:#2C2C31;margin-top:6px"><div style="width:60%;height:6px;border-radius:999px;background:#C42663"></div></div></div>' +
  '<span style="font:500 12px ' + V2MONO + ';color:#A6A8AF">60%</span>' + v2ic(V2I.x, 16, "#A6A8AF") + "</div>" +
  '<div style="display:flex;gap:10px;align-items:center"><span style="width:32px;height:32px;border-radius:8px;background:#2C2C31;display:inline-flex;align-items:center;justify-content:center;flex:none">' + v2ic(V2I.file, 16, "#A6A8AF") + "</span>" +
  '<div style="flex:1"><div style="font:600 13px Figtree">policy-book.xlsx</div><div style="font:400 12px Figtree;color:#71747C">4.2 MB · Uploaded</div></div>' + v2ic(V2I.check, 16, "#4ADE80") + v2ic(V2I.x, 16, "#A6A8AF") + "</div></div>";

V2_DEMOS["breadcrumbs"] = '<div style="' + V2F + '"><span style="display:inline-flex;align-items:center;gap:8px">' +
  v2ic(V2I.home, 14, "#A6A8AF") + v2ic(V2I.chevRight, 14, "#565962") +
  '<span style="font:400 14px Figtree;color:#A6A8AF">Settings</span>' + v2ic(V2I.chevRight, 14, "#565962") +
  '<span style="font:600 14px Figtree">Members</span></span>' +
  '<span style="font:400 12px Figtree;color:#71747C">current page is text, never a link · &gt;3 levels collapse to …</span></div>';

V2_DEMOS["pagination-item"] = '<div style="' + V2F + '">' +
  '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:400 14px Figtree;color:#D6D7DB">1</span>' +
  '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:400 14px Figtree;background:#232327;color:#fff">2</span>' +
  '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:600 14px Figtree;background:#2C2C31">3</span>' +
  '<span style="font:400 12px Figtree;color:#71747C">rest · hover · active</span></div>';

V2_DEMOS["pagination"] = '<div style="' + V2F + ';justify-content:space-between">' +
  '<button style="' + V2BTN + ';height:32px;background:transparent;color:#565962;font-size:13px" disabled>← Previous</button>' +
  '<span style="display:inline-flex;gap:2px;align-items:center">' +
  [["1", 1], ["2", 0], ["3", 0], ["…", -1], ["8", 0], ["9", 0], ["10", 0]].map(function (p) {
    if (p[1] === -1) return '<span style="width:32px;text-align:center;font:400 14px Figtree;color:#565962">…</span>';
    return '<span style="width:32px;height:32px;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:' + (p[1] ? "600" : "400") + ' 14px Figtree;' + (p[1] ? "background:#2C2C31" : "color:#D6D7DB") + '">' + p[0] + "</span>";
  }).join("") + "</span>" +
  '<button style="' + V2BTN + ';height:32px;background:transparent;color:#D6D7DB;font-size:13px">Next →</button></div>';

V2_DEMOS["accordion-item"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:0"><div style="border-bottom:1px solid #26272B;padding-bottom:12px">' +
  '<div style="display:flex;justify-content:space-between;align-items:center;padding:12px 0 8px"><span style="font:600 14px Figtree">What counts as a pre-existing condition?</span><span style="transform:rotate(180deg);display:inline-flex">' + v2ic(V2I.chevDown, 16, "#A6A8AF") + "</span></div>" +
  '<div style="font:400 14px Figtree;color:#A6A8AF;line-height:1.5">Any condition diagnosed or treated in the 24 months before the policy start date, as recorded by a licensed provider.</div></div></div>';

V2_DEMOS["accordion"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:0">' +
  '<div style="border-bottom:1px solid #26272B;padding:12px 0"><div style="display:flex;justify-content:space-between;align-items:center"><span style="font:600 14px Figtree">What counts as a pre-existing condition?</span><span style="transform:rotate(180deg);display:inline-flex">' + v2ic(V2I.chevDown, 16, "#A6A8AF") + "</span></div>" +
  '<div style="font:400 14px Figtree;color:#A6A8AF;line-height:1.5;margin-top:8px">Any condition diagnosed or treated in the 24 months before the policy start date.</div></div>' +
  '<div style="border-bottom:1px solid #26272B;padding:12px 0;display:flex;justify-content:space-between;align-items:center"><span style="font:600 14px Figtree;color:#D6D7DB">How are renewals priced?</span>' + v2ic(V2I.chevDown, 16, "#A6A8AF") + "</div>" +
  '<div style="padding:12px 0;display:flex;justify-content:space-between;align-items:center"><span style="font:600 14px Figtree;color:#D6D7DB">Can I pause a scheme?</span>' + v2ic(V2I.chevDown, 16, "#A6A8AF") + "</div></div>";

V2_DEMOS["list-item"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:0">' +
  '<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px">' + v2av("SC", 24) +
  '<div style="flex:1"><div style="font:600 14px Figtree">Sarah Chen</div><div style="font:400 12px Figtree;color:#A6A8AF">Approved the Northwind renewal</div></div><span style="font:400 12px Figtree;color:#71747C">2h</span></div>' +
  '<div style="display:flex;align-items:center;gap:10px;padding:8px 12px;border-radius:8px;background:#232327">' + v2av("AH", 24) +
  '<div style="flex:1"><div style="font:600 14px Figtree">Ali Hassan</div><div style="font:400 12px Figtree;color:#A6A8AF">Flagged claim CLM-20419 for review</div></div><span style="font:400 12px Figtree;color:#71747C">5h</span></div></div>';

V2_DEMOS["step-item"] = '<div style="' + V2F + '">' + v2steprow("done", 1, "Scheme details") + v2steprow("active", 2, "Members") + v2steprow("todo", 3, "Review &amp; bind") + "</div>";

V2_DEMOS["stepper"] = '<div style="' + V2F + ';justify-content:center"><span style="display:inline-flex;align-items:center;gap:10px">' +
  v2steprow("done", 1, "Scheme details") + '<span style="width:48px;height:2px;background:#C42663;border-radius:1px"></span>' +
  v2steprow("active", 2, "Members") + '<span style="width:48px;height:2px;background:#2C2C31;border-radius:1px"></span>' +
  v2steprow("todo", 3, "Review &amp; bind") + "</span></div>";

V2_DEMOS["prompt-input"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;max-width:640px">' +
  '<div style="display:flex;gap:8px;flex-wrap:wrap"><span style="' + V2TAG + ';background:#18181B;border:1px solid #414449;color:#D6D7DB;font-weight:400;font-size:13px">' + v2ic(V2I.sparkle, 14, "#F0366B") + 'Summarize this portfolio</span><span style="' + V2TAG + ';background:#18181B;border:1px solid #414449;color:#D6D7DB;font-weight:400;font-size:13px">' + v2ic(V2I.sparkle, 14, "#F0366B") + "Flag unusual claims</span></div>" +
  '<div style="background:#18181B;border:1px solid #414449;border-radius:16px;min-height:120px;display:flex;flex-direction:column;justify-content:space-between;padding:14px 14px 10px">' +
  '<span style="font:400 14px Figtree;color:#71747C">Ask about this portfolio…</span>' +
  '<div style="display:flex;align-items:center;justify-content:space-between"><span style="display:inline-flex;align-items:center;gap:10px">' + v2ic(V2I.plus, 16, "#A6A8AF") + '<span style="font:400 12px Figtree;color:#71747C">Attach</span></span>' +
  '<span style="width:28px;height:28px;border-radius:999px;background:#C42663;display:inline-flex;align-items:center;justify-content:center">' + v2ic(V2I.up, 14, "#fff") + "</span></div></div>" +
  '<span style="font:400 12px Figtree;color:#71747C">fluid width — fills the thread column (min 480 / max 768) · grows to 280 then scrolls</span></div>';

V2_DEMOS["attachment-card"] = '<div style="' + V2F + '"><span style="font:400 14px Figtree;color:#D6D7DB">Compare</span>' +
  '<span style="display:inline-flex;align-items:center;gap:6px;background:#18181B;border:1px solid #414449;border-radius:8px;padding:2px 6px">' + v2ic(V2I.file, 14, "#F87171") + '<span style="font:400 14px Figtree">Treaty-2026.pdf</span>' + v2ic(V2I.x, 12, "#71747C") + "</span>" +
  '<span style="font:400 14px Figtree;color:#D6D7DB">with</span>' +
  '<span style="display:inline-flex;align-items:center;gap:6px;background:#18181B;border:1px solid #414449;border-radius:8px;padding:2px 6px">' + v2ic(V2I.image, 14, "#4ADE80") + '<span style="font:400 14px Figtree">Scan.png</span>' + v2ic(V2I.x, 12, "#71747C") + "</span>" +
  '<span style="font:400 12px Figtree;color:#71747C">text-scale pill — sits on the prompt line, never reflows the sentence</span></div>';

V2_DEMOS["slider"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:20px;max-width:420px">' +
  '<div style="position:relative;height:16px;display:flex;align-items:center"><div style="height:4px;border-radius:999px;background:#2C2C31;width:100%"></div>' +
  '<div style="position:absolute;left:0;width:60%;height:4px;border-radius:999px;background:#C42663"></div>' +
  '<span style="position:absolute;left:60%;width:16px;height:16px;border-radius:999px;background:#fff;border:1.5px solid #565962;transform:translateX(-8px)"></span></div>' +
  '<div style="position:relative;height:16px;display:flex;align-items:center"><div style="height:4px;border-radius:999px;background:#2C2C31;width:100%"></div>' +
  '<div style="position:absolute;left:25%;width:40%;height:4px;border-radius:999px;background:#C42663"></div>' +
  '<span style="position:absolute;left:25%;width:16px;height:16px;border-radius:999px;background:#fff;border:1.5px solid #565962;transform:translateX(-8px)"></span>' +
  '<span style="position:absolute;left:65%;width:16px;height:16px;border-radius:999px;background:#fff;border:1.5px solid #565962;transform:translateX(-8px)"></span></div></div>';

V2_DEMOS["otp-input"] = '<div style="' + V2F + '">' +
  ["4", "9", "2", "", "", ""].map(function (d, i) {
    var s = "width:36px;height:36px;background:#18181B;border:1px solid #414449;border-radius:8px;display:inline-flex;align-items:center;justify-content:center;font:500 16px " + V2MONO;
    if (i === 3) s += ";border-color:#E0528B;box-shadow:0 0 0 3px rgba(224,82,139,.16)";
    return '<span style="' + s + '">' + d + "</span>";
  }).join("") +
  '<span style="font:400 12px Figtree;color:#71747C">auto-advance · paste distributes · six default, four for SMS</span></div>';

V2_DEMOS["hover-card"] = '<div style="' + V2F + '"><div style="' + V2POP + ';padding:16px;width:320px">' +
  '<div style="display:flex;gap:12px;align-items:center;padding-bottom:12px;border-bottom:1px solid #26272B;margin-bottom:12px">' + v2av("SC", 40) +
  '<div><div style="font:600 14px Figtree">Sarah Chen</div><div style="font:400 12px Figtree;color:#A6A8AF">Underwriting lead · Wellx</div></div></div>' +
  '<div style="display:flex;gap:16px;font:400 13px Figtree;color:#A6A8AF;margin-bottom:6px"><span style="width:96px;flex:none">Open claims</span><span style="font:500 12px ' + V2MONO + ';color:#fff">14</span></div>' +
  '<div style="display:flex;gap:16px;font:400 13px Figtree;color:#A6A8AF"><span style="width:96px;flex:none">Last active</span><span style="color:#fff">2 hours ago</span></div></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">raised after ~500ms hover on links, chips and table cells</span></div>';

V2_DEMOS["page-banner"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;padding:0;overflow:hidden;gap:0">' +
  '<div style="display:flex;align-items:center;gap:10px;background:rgba(96,165,250,.12);color:#60A5FA;padding:10px 16px;min-height:40px"><span style="width:16px;height:16px;border-radius:999px;border:2px solid currentColor;display:inline-flex;align-items:center;justify-content:center;font:700 10px Figtree;flex:none">i</span><span style="font:400 14px Figtree;flex:1">Scheme renewal pricing updates land on March 30.</span><span style="font:600 13px Figtree">Review</span></div>' +
  '<div style="display:flex;align-items:center;gap:10px;background:#4A0B24;color:#EA7BA7;padding:10px 16px;min-height:40px">' + v2ic(V2I.sparkle, 16, "#EA7BA7") + '<span style="font:400 14px Figtree;flex:1">The portfolio copilot is now available on this workspace.</span><span style="font:600 13px Figtree">Try it</span></div></div>';

V2_DEMOS["filter-chip"] = '<div style="' + V2F + '">' +
  '<span style="' + V2TAG + ';background:transparent;border:1px solid #414449;color:#D6D7DB;font-weight:400;font-size:14px">Status' + v2ic(V2I.chevDown, 14, "#A6A8AF") + "</span>" +
  '<span style="' + V2TAG + ';background:#2C2C31;border:1px solid #414449;color:#D6D7DB;font-weight:400;font-size:14px">Status' + v2ic(V2I.chevDown, 14, "#A6A8AF") + "</span>" +
  '<span style="' + V2TAG + ';background:transparent;border:1.5px solid #E0528B;color:#fff;font-weight:400;font-size:14px">Status' + v2ic(V2I.chevDown, 14, "#A6A8AF") + "</span>" +
  '<span style="' + V2TAG + ';background:transparent;border:1px solid #414449;font-size:14px"><span style="font-weight:400;color:#A6A8AF">Status:</span><b style="font-weight:700;color:#fff">Active</b>' + v2ic(V2I.chevDown, 14, "#A6A8AF") + "</span>" +
  '<span style="' + V2TAG + ';background:transparent;border:1px dashed #414449;color:#A6A8AF;font-weight:400;font-size:14px">' + v2ic(V2I.plus, 14, "#A6A8AF") + "Add filter</span>" +
  '<span style="font:400 12px Figtree;color:#71747C;width:100%">default · hover · open (ring) · applied · add filter (dashed)</span></div>';

V2_DEMOS["filter-options-dropdown"] = '<div style="' + V2F + '"><div style="' + V2POP + ';padding:6px;min-width:220px">' +
  [["Active", 1], ["Churned", 0], ["Trial", 0]].map(function (o) {
    return '<div style="height:32px;display:flex;align-items:center;gap:10px;padding:0 10px;border-radius:6px;font:400 14px Figtree">' + v2chk(o[1]) + o[0] + "</div>";
  }).join("") +
  '<div style="height:1px;background:#26272B;margin:6px 4px"></div><div style="height:32px;display:flex;align-items:center;padding:0 10px;font:400 13px Figtree;color:#A6A8AF">Clear filter</div></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">owned by ONE chip · real checkboxes · 220w · shadow-float</span></div>';

V2_DEMOS["filter-bar"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch">' +
  '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
  '<span style="' + V2TAG + ';background:transparent;border:1px solid #414449;font-size:14px"><span style="font-weight:400;color:#A6A8AF">Status:</span><b style="font-weight:700;color:#fff">Active</b>' + v2ic(V2I.chevDown, 14, "#A6A8AF") + "</span>" +
  '<span style="' + V2TAG + ';background:transparent;border:1px solid #414449;font-size:14px"><span style="font-weight:400;color:#A6A8AF">Owner:</span><b style="font-weight:700;color:#fff">Sarah</b>' + v2ic(V2I.chevDown, 14, "#A6A8AF") + "</span>" +
  '<span style="' + V2TAG + ';background:transparent;border:1px solid #414449;color:#D6D7DB;font-weight:400;font-size:14px">Members' + v2ic(V2I.chevDown, 14, "#A6A8AF") + "</span>" +
  '<span style="' + V2TAG + ';background:transparent;border:1px dashed #414449;color:#A6A8AF;font-weight:400;font-size:14px">' + v2ic(V2I.plus, 14, "#A6A8AF") + "Add filter</span></div>" +
  '<div style="border:1px solid #26272B;border-radius:10px;height:46px;background:#18181B;display:flex;align-items:center;padding:0 16px;font:600 11px Figtree;letter-spacing:.06em;color:#A6A8AF">THE TABLE-CARD SITS DIRECTLY BELOW</div></div>';

/* ---- organisms ---- */
V2_DEMOS["dialog"] = '<div style="' + V2F + ';justify-content:center;background:rgba(0,0,0,.6);padding:32px"><div style="background:#18181B;border:1px solid #414449;border-radius:16px;padding:24px;max-width:420px;box-shadow:0 16px 40px rgba(0,0,0,.5)">' +
  '<div style="font:600 16px Figtree">Allocate guest deposit</div>' +
  '<div style="font:400 14px Figtree;color:#A6A8AF;margin-top:4px">Split <span style="font:500 13px ' + V2MONO + ';color:#D6D7DB">MVR 15,000.00</span> across the two open folios.</div>' +
  '<div style="display:flex;gap:8px;justify-content:flex-end;margin-top:24px">' +
  '<button style="' + V2BTN + ';background:transparent;color:#D6D7DB;border:1px solid #414449">Cancel</button>' +
  '<button style="' + V2BTN + ';background:#C42663;color:#fff">Apply allocation</button></div></div></div>';

V2_DEMOS["sheet"] = '<div style="' + V2F + ';padding:0;overflow:hidden;position:relative;min-height:240px;gap:0">' +
  '<div style="flex:1;padding:20px;opacity:.35"><div style="font:600 16px Figtree">Claims</div><div style="height:8px;border-radius:4px;background:#2C2C31;width:70%;margin-top:12px"></div><div style="height:8px;border-radius:4px;background:#2C2C31;width:50%;margin-top:8px"></div></div>' +
  '<div style="width:46%;min-width:240px;background:#18181B;border-left:1px solid #414449;border-radius:16px 0 0 16px;box-shadow:-16px 0 40px rgba(0,0,0,.4);display:flex;flex-direction:column">' +
  '<div style="display:flex;justify-content:space-between;align-items:center;padding:16px;border-bottom:1px solid #26272B"><span style="font:600 15px Figtree">Claim CLM-20419</span>' + v2ic(V2I.x, 16, "#A6A8AF") + "</div>" +
  '<div style="padding:16px;flex:1;font:400 13px Figtree;color:#A6A8AF">Keeps the list visible behind it. Slides from the right edge — left in RTL.</div>' +
  '<div style="padding:12px 16px;border-top:1px solid #26272B;display:flex;justify-content:flex-end;gap:8px"><button style="' + V2BTN + ';height:32px;font-size:13px;background:transparent;color:#D6D7DB;border:1px solid #414449">Close</button><button style="' + V2BTN + ';height:32px;font-size:13px;background:#C42663;color:#fff">Approve</button></div></div></div>';

V2_DEMOS["table-header-cell"] = '<div style="' + V2F + ';padding:0;overflow:hidden"><div style="display:flex;background:#2C2C31;height:42px;align-items:center;width:100%;font:600 11px Figtree;letter-spacing:.06em;color:#A6A8AF">' +
  '<span style="display:inline-flex;align-items:center;gap:6px;padding:0 16px">' + v2ic(V2I.sort, 14, "#A6A8AF") + "COMPANY</span>" +
  '<span style="display:inline-flex;align-items:center;gap:6px;padding:0 16px;color:#fff">' + v2ic(V2I.sort, 14, "#E0528B") + "OWNER · SORTED</span>" +
  '<span style="display:inline-flex;align-items:center;gap:6px;padding:0 16px">' + v2ic(V2I.sort, 14, "#A6A8AF") + "STATUS</span></div></div>";

V2_DEMOS["table-cell"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:0">' +
  '<div style="display:flex;align-items:center;height:48px;border-bottom:1px solid #26272B;font:400 14px Figtree">' +
  '<span style="flex:1.4">Plain text</span>' +
  '<span style="flex:1.6;display:inline-flex;align-items:center;gap:8px">' + v2av("SC", 24) + "Sarah Chen</span>" +
  '<span style="flex:1"><span style="' + V2TAG + ';background:#E2FAE9;color:#15803D;font-size:12px;padding:3px 10px">' + V2DOT + "Active</span></span>" +
  '<span style="flex:1;text-align:right;font:400 14px ' + V2MONO + '">4,820.00</span></div>' +
  '<div style="display:flex;align-items:center;height:48px;font:400 14px Figtree">' +
  '<span style="flex:1.4;color:#E0528B;text-decoration:underline">POL/2026/88431</span>' +
  '<span style="flex:1.6;color:#71747C">—</span>' +
  '<span style="flex:1;display:inline-flex">' + v2chk(true) + "</span>" +
  '<span style="flex:1;text-align:right;font:400 12px Figtree;color:#71747C">text · entity · tag · numeral · link · muted · checkbox</span></div></div>';

V2_DEMOS["table-toolbar"] = '<div style="' + V2F + ';justify-content:space-between">' +
  '<div style="display:flex;gap:8px;flex-wrap:wrap">' +
  '<span style="' + V2TAG + ';background:transparent;border:1px solid #414449;font-size:14px"><span style="font-weight:400;color:#A6A8AF">Status:</span><b style="font-weight:700;color:#fff">Active</b>' + v2ic(V2I.chevDown, 14, "#A6A8AF") + "</span>" +
  '<span style="' + V2TAG + ';background:transparent;border:1px dashed #414449;color:#A6A8AF;font-weight:400;font-size:14px">' + v2ic(V2I.plus, 14, "#A6A8AF") + "Add filter</span></div>" +
  '<span style="font:400 12px Figtree;color:#71747C">default context shows only the filter bar — search, sort and the primary action are slots</span></div>';

V2_DEMOS["table"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:12px">' +
  '<div style="display:flex;gap:8px"><span style="' + V2TAG + ';background:transparent;border:1px solid #414449;color:#fff;font-weight:600">Status: <b style="font-weight:700">Active</b> ▾</span><span style="' + V2TAG + ';background:transparent;border:1px dashed #414449;color:#A6A8AF;font-weight:600">+ Add filter</span></div>' +
  '<div style="border:1px solid #26272B;border-radius:10px;overflow:hidden;background:#18181B">' +
  '<div style="display:flex;background:#2C2C31;padding:0 16px;height:40px;align-items:center;font:600 11px Figtree;letter-spacing:.06em;color:#A6A8AF"><span style="flex:2">↕ COMPANY</span><span style="flex:1.4">↕ OWNER</span><span style="flex:1">↕ STATUS</span><span style="flex:1;text-align:right">↕ MEMBERS</span></div>' +
  [["Acme Corp", "Sarah Chen", "#4ADE80", "Active", "4,820"], ["Northwind", "Ali Hassan", "#4ADE80", "Active", "1,204"], ["Globex", "Maya Patel", "#F87171", "Churned", "86"]].map(function (r) { return '<div style="display:flex;padding:0 16px;height:56px;align-items:center;border-top:1px solid #26272B;font:400 14px Figtree"><span style="flex:2">' + r[0] + '</span><span style="flex:1.4;color:#A6A8AF">' + r[1] + '</span><span style="flex:1;color:' + r[2] + '">' + r[3] + '</span><span style="flex:1;text-align:right;font:400 14px ' + V2MONO + '">' + r[4] + "</span></div>"; }).join("") +
  '<div style="padding:10px 16px;border-top:1px solid #26272B;font:400 12px Figtree;color:#A6A8AF">Showing 1 – 3&nbsp;&nbsp;·&nbsp;&nbsp;Page 1</div></div></div>';

V2_DEMOS["sidebar-item"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:2px;max-width:264px">' +
  '<div style="' + V2ROW + ';color:#D6D7DB">' + v2ic(V2I.grid, 16, "#A6A8AF") + "Dashboard</div>" +
  '<div style="' + V2ROW + ';background:#232327;color:#fff">' + v2ic(V2I.file, 16, "#A6A8AF") + "Claims (hover)</div>" +
  '<div style="' + V2ROW + ';background:#4A0B24;color:#EA7BA7;font-weight:600">' + v2ic(V2I.user, 16, "#EA7BA7") + 'Members<span style="margin-left:auto;font:500 12px ' + V2MONO + '">128</span></div></div>';

V2_DEMOS["sidebar-group-label"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:2px;max-width:264px">' +
  '<div style="display:flex;align-items:center;justify-content:space-between;padding:0 10px;height:24px"><span style="font:600 11px Figtree;letter-spacing:.07em;color:#71747C">WORKSPACE</span>' + v2ic(V2I.chevDown, 12, "#71747C") + "</div>" +
  '<div style="' + V2ROW + ';color:#D6D7DB">' + v2ic(V2I.grid, 16, "#A6A8AF") + "Dashboard</div>" +
  '<div style="' + V2ROW + ';color:#D6D7DB">' + v2ic(V2I.file, 16, "#A6A8AF") + "Claims</div></div>";

V2_DEMOS["workspace-switcher"] = '<div style="' + V2F + ';max-width:300px"><div style="display:flex;align-items:center;gap:10px;width:100%;padding:6px 10px;border-radius:8px;background:#232327">' +
  '<span style="width:24px;height:24px;border-radius:6px;background:#C42663;color:#fff;display:inline-flex;align-items:center;justify-content:center;font:700 12px Figtree">W</span>' +
  '<span style="font:600 14px Figtree;flex:1">Wellx Labs</span>' + v2ic(V2I.chevsUpDown, 16, "#A6A8AF") + "</div></div>";

V2_DEMOS["sidebar-footer"] = '<div style="' + V2F + ';max-width:300px"><div style="display:flex;align-items:center;gap:10px;width:100%;padding:6px 10px;border-radius:8px">' +
  v2av("SC", 24) + '<span style="flex:1"><span style="display:block;font:600 13px Figtree">Sarah Chen</span><span style="display:block;font:400 11px Figtree;color:#71747C">sarah@wellx.ai</span></span>' + v2ic(V2I.dots, 16, "#A6A8AF") + "</div>" +
  '<span style="font:400 12px Figtree;color:#71747C">the whole row is a menu — profile, preferences, settings, sign out</span></div>';

V2_DEMOS["sidebar"] = '<div style="' + V2F + ';justify-content:center"><div style="width:256px;background:#18181B;border:1px solid #26272B;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:2px;min-height:340px">' +
  '<div style="display:flex;align-items:center;gap:10px;padding:6px 10px;border-radius:8px;margin-bottom:6px"><span style="width:24px;height:24px;border-radius:6px;background:#C42663;color:#fff;display:inline-flex;align-items:center;justify-content:center;font:700 12px Figtree">W</span><span style="font:600 14px Figtree;flex:1">Wellx Labs</span>' + v2ic(V2I.chevsUpDown, 14, "#A6A8AF") + "</div>" +
  '<div style="' + V2IN + ';height:32px;font-size:13px;justify-content:space-between;margin-bottom:8px"><span style="display:inline-flex;align-items:center;gap:8px">' + v2ic(V2I.search, 14, "#A6A8AF") + '<span style="color:#71747C">Search</span></span><span style="display:inline-flex;gap:3px">' + v2kbd("⌘") + v2kbd("K") + "</span></div>" +
  '<span style="font:600 11px Figtree;letter-spacing:.07em;color:#71747C;padding:4px 10px">WORKSPACE</span>' +
  '<div style="' + V2ROW + ';background:#4A0B24;color:#EA7BA7;font-weight:600">' + v2ic(V2I.grid, 16, "#EA7BA7") + "Dashboard</div>" +
  '<div style="' + V2ROW + ';color:#D6D7DB">' + v2ic(V2I.file, 16, "#A6A8AF") + "Claims</div>" +
  '<div style="' + V2ROW + ';color:#D6D7DB">' + v2ic(V2I.user, 16, "#A6A8AF") + 'Members<span style="margin-left:auto;font:500 12px ' + V2MONO + ';color:#71747C">128</span></div>' +
  '<div style="flex:1"></div>' +
  '<div style="display:flex;align-items:center;gap:10px;padding:6px 10px;border-top:1px solid #26272B;margin:6px -12px 0;padding:10px 20px 4px">' + v2av("SC", 24) + '<span style="flex:1"><span style="display:block;font:600 13px Figtree">Sarah Chen</span><span style="display:block;font:400 11px Figtree;color:#71747C">sarah@wellx.ai</span></span>' + v2ic(V2I.dots, 16, "#A6A8AF") + "</div></div></div>";

V2_DEMOS["app-shell"] = '<div style="' + V2F + ';padding:0;overflow:hidden;gap:0;min-height:260px;align-items:stretch">' +
  '<div style="width:88px;background:#18181B;border-right:1px solid #26272B;padding:10px;display:flex;flex-direction:column;gap:6px;flex:none">' +
  '<span style="width:20px;height:20px;border-radius:5px;background:#C42663;margin-bottom:6px"></span>' +
  '<span style="height:8px;border-radius:4px;background:#4A0B24;width:100%"></span><span style="height:8px;border-radius:4px;background:#2C2C31;width:80%"></span><span style="height:8px;border-radius:4px;background:#2C2C31;width:88%"></span></div>' +
  '<div style="flex:1;display:flex;flex-direction:column">' +
  '<div style="height:40px;border-bottom:1px solid #26272B;display:flex;align-items:center;justify-content:space-between;padding:0 16px"><span style="font:400 12px Figtree;color:#A6A8AF">Portfolio › Schemes</span><span style="display:inline-flex;gap:10px">' + v2ic(V2I.search, 16, "#A6A8AF") + v2ic(V2I.user, 16, "#A6A8AF") + "</span></div>" +
  '<div style="flex:1;padding:16px;display:flex;gap:12px"><span style="flex:1;border:1px solid #26272B;border-radius:10px;background:#18181B"></span><span style="flex:1;border:1px solid #26272B;border-radius:10px;background:#18181B"></span></div>' +
  '<div style="font:400 11px Figtree;color:#71747C;padding:0 16px 10px">256 sidebar · 56 topbar · 24px gutters · content capped at 1440, centered</div></div></div>';

/* shared SVG chart bodies */
var V2_LINE_SVG = (function () {
  var grid = [30, 70, 110].map(function (y) { return '<line x1="0" y1="' + y + '" x2="420" y2="' + y + '" stroke="#26272B" stroke-dasharray="2 4"/>'; }).join("");
  return '<svg viewBox="0 0 420 140" style="width:100%;max-width:460px;height:auto;display:block">' + grid +
    '<polyline points="0,96 60,88 120,64 180,72 240,46 300,52 360,30 420,22" fill="none" stroke="#C42663" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' +
    '<polyline points="0,112 60,104 120,98 180,90 240,84 300,92 360,70 420,64" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' +
    ["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map(function (m, i) { return '<text x="' + (6 + i * 80) + '" y="136" fill="#71747C" font-size="11" font-family="Figtree">' + m + "</text>"; }).join("") + "</svg>";
})();

V2_DEMOS["chart-container"] = '<div style="' + V2F + '"><div style="background:#18181B;border:1px solid #26272B;border-radius:12px;padding:20px;width:100%;max-width:520px">' +
  '<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px"><span style="font:600 15px Figtree">Premium over time</span>' +
  '<span style="display:inline-flex;gap:14px"><span style="display:inline-flex;align-items:center;gap:6px;font:400 12px Figtree;color:#D6D7DB"><span style="width:8px;height:8px;border-radius:999px;background:#C42663"></span>Gross</span>' +
  '<span style="display:inline-flex;align-items:center;gap:6px;font:400 12px Figtree;color:#D6D7DB"><span style="width:8px;height:8px;border-radius:999px;background:#60A5FA"></span>Net</span></span></div>' + V2_LINE_SVG + "</div></div>";

V2_DEMOS["line-chart"] = '<div style="' + V2F + '">' + V2_LINE_SVG + '<span style="font:400 12px Figtree;color:#71747C">2px rounded strokes · dotted horizontal gridlines only · unboxed 11px axes · stretches horizontally</span></div>';

V2_DEMOS["bar-chart"] = '<div style="' + V2F + '"><svg viewBox="0 0 420 140" style="width:100%;max-width:460px;height:auto;display:block">' +
  [30, 70, 110].map(function (y) { return '<line x1="0" y1="' + y + '" x2="420" y2="' + y + '" stroke="#26272B" stroke-dasharray="2 4"/>'; }).join("") +
  [[58, 88], [84, 62], [46, 96], [96, 50], [70, 78], [108, 40]].map(function (p, i) {
    var x = 16 + i * 68;
    return '<path d="M' + x + " 124 v-" + p[0] + " a3 3 0 0 1 3-3 h14 a3 3 0 0 1 3 3 v" + p[0] + ' z" fill="#C42663"/>' +
      '<path d="M' + (x + 26) + " 124 v-" + p[1] + " a3 3 0 0 1 3-3 h14 a3 3 0 0 1 3 3 v" + p[1] + ' z" fill="#60A5FA"/>';
  }).join("") + '<line x1="0" y1="124" x2="420" y2="124" stroke="#26272B"/></svg>' +
  '<span style="font:400 12px Figtree;color:#71747C">20w bars · 3px top radius · bottom-aligned pairs · gaps grow with width</span></div>';

V2_DEMOS["pie-chart"] = '<div style="' + V2F + '"><svg width="140" height="140" viewBox="0 0 140 140">' +
  (function () {
    var segs = [[0.38, "#C42663"], [0.26, "#D23A77"], [0.18, "#E0528B"], [0.12, "#EA7BA7"], [0.06, "#F2A8C6"]];
    var r = 52, c = 2 * Math.PI * r, off = 0, out = "";
    segs.forEach(function (s) {
      out += '<circle cx="70" cy="70" r="' + r + '" fill="none" stroke="' + s[1] + '" stroke-width="30" stroke-dasharray="' + (s[0] * c) + " " + c + '" stroke-dashoffset="' + (-off * c) + '" transform="rotate(-90 70 70)"/>';
      off += s[0];
    });
    return out;
  })() + "</svg>" +
  '<span style="display:inline-flex;flex-direction:column;gap:8px">' +
  [["Medical", "#C42663", "38%"], ["Dental", "#D23A77", "26%"], ["Optical", "#E0528B", "18%"], ["Wellness", "#EA7BA7", "12%"], ["Other", "#F2A8C6", "6%"]].map(function (l) {
    return '<span style="display:inline-flex;align-items:center;gap:8px;font:400 12px Figtree;color:#D6D7DB"><span style="width:8px;height:8px;border-radius:999px;background:' + l[1] + '"></span>' + l[0] + '<span style="font-family:' + V2MONO + ';color:#A6A8AF;margin-left:auto;padding-left:16px">' + l[2] + "</span></span>";
  }).join("") + "</span>" +
  '<span style="font:400 12px Figtree;color:#71747C;max-width:180px">58% donut · monochrome rose ramp, largest slice first from 12 o’clock · fixed aspect</span></div>';

V2_DEMOS["radar-chart"] = '<div style="' + V2F + '"><svg width="180" height="170" viewBox="0 0 180 170">' +
  (function () {
    function hept(cx, cy, r) { var p = []; for (var i = 0; i < 7; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / 7; p.push((cx + r * Math.cos(a)).toFixed(1) + "," + (cy + r * Math.sin(a)).toFixed(1)); } return p.join(" "); }
    var g = [68, 51, 34, 17].map(function (r) { return '<polygon points="' + hept(90, 88, r) + '" fill="none" stroke="#232327"/>'; }).join("");
    function series(vals, col, fo) { var p = []; for (var i = 0; i < 7; i++) { var a = -Math.PI / 2 + i * 2 * Math.PI / 7; var r = 68 * vals[i]; p.push((90 + r * Math.cos(a)).toFixed(1) + "," + (88 + r * Math.sin(a)).toFixed(1)); } return '<polygon points="' + p.join(" ") + '" fill="' + col + '" fill-opacity="' + fo + '" stroke="' + col + '" stroke-width="2" stroke-linejoin="round"/>'; }
    return g + series([0.9, 0.7, 0.8, 0.55, 0.75, 0.6, 0.85], "#C42663", 0.3) + series([0.6, 0.85, 0.5, 0.7, 0.45, 0.8, 0.55], "#60A5FA", 0.16);
  })() + "</svg>" +
  '<span style="font:400 12px Figtree;color:#71747C;max-width:200px">whisper-light heptagon grid · series 1 rose over soft fill, series 2 accent-blue at 16% · fixed aspect, never stretch</span></div>';

V2_DEMOS["sparkline"] = '<div style="' + V2F + '">' +
  '<svg width="96" height="32" viewBox="0 0 96 32"><polyline points="0,26 14,22 28,24 42,14 56,18 70,8 84,12 96,4" fill="none" stroke="#C42663" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/></svg>' +
  '<span style="font:500 20px ' + V2MONO + '">4,820</span>' +
  '<span style="' + V2TAG + ';padding:3px 10px;font-size:12px;background:#E2FAE9;color:#15803D">↑ +8%</span>' +
  '<span style="font:400 12px Figtree;color:#71747C">96×32 · no axes or dots · color never changes per trend — the Delta carries good/bad</span></div>';

V2_DEMOS["area-chart"] = '<div style="' + V2F + '"><svg viewBox="0 0 420 140" style="width:100%;max-width:460px;height:auto;display:block">' +
  [30, 70, 110].map(function (y) { return '<line x1="0" y1="' + y + '" x2="420" y2="' + y + '" stroke="#26272B" stroke-dasharray="2 4"/>'; }).join("") +
  '<path d="M0,96 60,88 120,64 180,72 240,46 300,52 360,30 420,22 L420,124 0,124 Z" fill="#C42663" fill-opacity="0.12"/>' +
  '<polyline points="0,96 60,88 120,64 180,72 240,46 300,52 360,30 420,22" fill="none" stroke="#C42663" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"/>' +
  ["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map(function (m, i) { return '<text x="' + (6 + i * 80) + '" y="136" fill="#71747C" font-size="11" font-family="Figtree">' + m + "</text>"; }).join("") + "</svg>" +
  '<span style="font:400 12px Figtree;color:#71747C">the Line chart’s volume twin — 2px stroke over a 12% same-hue fill</span></div>';

V2_DEMOS["command-palette"] = '<div style="' + V2F + ';justify-content:center;background:rgba(0,0,0,.6);padding:28px"><div style="' + V2POP + ';border-radius:16px;width:100%;max-width:480px;overflow:hidden">' +
  '<div style="display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid #26272B">' + v2ic(V2I.search, 16, "#A6A8AF") + '<span style="font:400 14px Figtree;flex:1">renew</span>' + v2kbd("esc") + "</div>" +
  '<div style="padding:8px"><div style="font:600 10px Figtree;letter-spacing:.08em;color:#71747C;padding:6px 10px 4px">ACTIONS</div>' +
  '<div style="' + V2ROW + ';background:#2C2C31">' + v2ic(V2I.zap, 16, "#A6A8AF") + 'Renew policy…<span style="margin-left:auto">' + v2kbd("↵") + "</span></div>" +
  '<div style="' + V2ROW + '">' + v2ic(V2I.file, 16, "#A6A8AF") + "Open renewals report</div>" +
  '<div style="font:600 10px Figtree;letter-spacing:.08em;color:#71747C;padding:10px 10px 4px">RECORDS</div>' +
  '<div style="' + V2ROW + '">' + v2av("NW", 20) + "Northwind · renewal due Apr 2</div></div>" +
  '<div style="display:flex;gap:12px;padding:10px 16px;border-top:1px solid #26272B;font:400 11px Figtree;color:#71747C;align-items:center">' + v2kbd("↑") + v2kbd("↓") + "navigate" + v2kbd("↵") + "open" + v2kbd("esc") + "close</div></div></div>";

V2_DEMOS["timeline-item"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:0">' +
  v2tlItem(v2av("SC", 24), "Sarah Chen", "approved the Northwind renewal", "Today, 14:20", false) +
  v2tlItem('<span style="width:24px;height:24px;border-radius:999px;background:#2C2C31;display:inline-flex;align-items:center;justify-content:center;flex:none">' + v2ic(V2I.zap, 12, "#A6A8AF") + "</span>", "System", "re-rated the scheme after the census upload", "Today, 13:05", true) + "</div>";

V2_DEMOS["activity-feed"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:0">' +
  v2tlItem(v2av("SC", 24), "Sarah Chen", "approved the Northwind renewal", "Today, 14:20", false) +
  v2tlItem('<span style="width:24px;height:24px;border-radius:999px;background:#2C2C31;display:inline-flex;align-items:center;justify-content:center;flex:none">' + v2ic(V2I.zap, 12, "#A6A8AF") + "</span>", "System", "re-rated the scheme after the census upload", "Today, 13:05", false) +
  v2tlItem('<span style="width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;flex:none"><span style="width:8px;height:8px;border-radius:999px;background:#565962"></span></span>', "Ali Hassan", "added a note to claim CLM-20419", "Yesterday", true) + "</div>";

V2_DEMOS["chat-message"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:20px">' +
  '<div style="display:flex;justify-content:flex-end"><span style="background:#2C2C31;border-radius:12px;padding:10px 14px;max-width:320px;font:400 14px Figtree">Which schemes drive the Q3 loss spike?</span></div>' +
  '<div><div style="font:400 14px Figtree;color:#D6D7DB;line-height:1.6">Two coastal schemes account for 71% of the increase. Northwind Marine added 14 storm claims' +
  '<span style="display:inline-flex;width:18px;height:18px;border-radius:999px;background:#2C2C31;color:#A6A8AF;font:600 11px Figtree;align-items:center;justify-content:center;vertical-align:text-bottom;margin:0 3px">1</span>' +
  "and Acme Coastal re-opened a reserve.</div>" +
  '<div style="font:400 12px Figtree;color:#71747C;margin-top:6px">2 sources · 14:22</div></div>' +
  '<span style="font:400 12px Figtree;color:#71747C">user = right bubble · assistant = NO bubble, no avatar, fill-width text</span></div>';

V2_DEMOS["chat-thread"] = '<div style="' + V2F + ';flex-direction:column;align-items:stretch;gap:20px;max-width:640px">' +
  '<div style="display:flex;justify-content:flex-end"><span style="background:#2C2C31;border-radius:12px;padding:10px 14px;max-width:320px;font:400 14px Figtree">Reprice the renewal cohort</span></div>' +
  '<div style="font:400 14px Figtree;color:#D6D7DB;line-height:1.6">Started. I’ll re-rate all 38 schemes against the new storm loadings and flag any premium moving more than 10%.</div>' +
  '<div style="display:flex;align-items:center;gap:10px"><span style="display:grid;grid-template-columns:repeat(3,4px);gap:2px">' +
  [1, 0.4, 0.75, 0.55, 1, 0.3, 0.85, 0.5, 0.65].map(function (o, i) { return '<span style="width:4px;height:4px;border-radius:1px;background:#EA7BA7;opacity:' + o + ";animation:wl2pulse 1.2s ease-in-out " + (i * 0.07).toFixed(2) + 's infinite"></span>'; }).join("") +
  '</span><span style="font:400 13px Figtree;color:#A6A8AF">Re-rating scheme 12 of 38…</span></div>' +
  '<div style="background:#18181B;border:1px solid #414449;border-radius:16px;min-height:72px;display:flex;flex-direction:column;justify-content:space-between;padding:12px 14px 10px">' +
  '<span style="font:400 14px Figtree;color:#71747C">Reply…</span>' +
  '<div style="display:flex;justify-content:flex-end"><span style="width:28px;height:28px;border-radius:999px;background:#C42663;display:inline-flex;align-items:center;justify-content:center">' + v2ic(V2I.up, 14, "#fff") + "</span></div></div></div>";

V2_DEMOS["agent-activity-card"] = '<div style="' + V2F + '"><div style="background:#18181B;border:1px solid #26272B;border-radius:12px;padding:16px;width:100%;max-width:440px">' +
  '<div style="display:flex;gap:12px;align-items:center"><span style="width:28px;height:28px;border-radius:8px;background:#4A0B24;display:inline-flex;align-items:center;justify-content:center;flex:none">' + v2ic(V2I.zap, 14, "#EA7BA7") + "</span>" +
  '<span style="flex:1"><span style="display:block;font:600 14px Figtree">Reprice renewal cohort</span><span style="display:block;font:400 12px Figtree;color:#71747C">Running · 42s</span></span>' + v2spin(16, "#EA7BA7") + "</div>" +
  '<div style="margin-top:12px;display:flex;flex-direction:column;gap:8px;font:400 12px Figtree;color:#A6A8AF">' +
  '<span style="display:inline-flex;gap:8px;align-items:center">' + v2ic(V2I.check, 14, "#4ADE80") + "Pulled 38 schemes from the book</span>" +
  '<span style="display:inline-flex;gap:8px;align-items:center">' + v2ic(V2I.check, 14, "#4ADE80") + "Applied 2026 storm loadings</span>" +
  '<span style="display:inline-flex;gap:8px;align-items:center">' + v2spin(14, "#A6A8AF") + "Flagging premium moves &gt; 10%…</span></div></div></div>";

V2_DEMOS["chat-history-item"] = '<div style="' + V2F + ';flex-direction:column;align-items:flex-start;gap:2px">' +
  v2histrow("rest", "Q3 loss-spike drivers", "2h") + v2histrow("hover", "Northwind renewal pricing", "") + v2histrow("active", "Coastal storm exposure", "1d") +
  '<span style="font:400 12px Figtree;color:#71747C;margin-top:8px">rest · hover (time swaps for the ⋯ menu) · active</span></div>';

V2_DEMOS["chat-history"] = '<div style="' + V2F + ';justify-content:center"><div style="width:256px;background:#18181B;border:1px solid #26272B;border-radius:12px;padding:12px;display:flex;flex-direction:column;gap:2px">' +
  '<button style="' + V2BTN + ';height:32px;font-size:13px;background:transparent;color:#fff;border:1px solid #414449;margin-bottom:8px;width:100%">' + v2ic(V2I.plus, 14, "#fff") + "&nbsp;New chat</button>" +
  v2histrow("active", "Coastal storm exposure", "1d") + v2histrow("rest", "Q3 loss-spike drivers", "2d") + v2histrow("rest", "Member churn by scheme", "4d") +
  '<span style="font:400 11px Figtree;color:#71747C;padding:8px 10px 2px">flat list, newest first — no folders (deliberate)</span></div></div>';

var V2_GEN = [
{ tier:"Atom", slug:"button", name:"Button", lede:"The workhorse action control, split into four sibling sets by emphasis. One Primary per view; Secondary for supporting actions; Ghost for toolbars and quiet utilities; Destructive only for dangerous actions (pair with a confirm Dialog).",
  spec:[["Level", "Atom · composes: icon"], ["Size", "sm 32 · md 36 (default) · lg 40"], ["State", "Default · Hover · Active · Focus · Disabled · Loading"], ["Props", "Label (text, default Button) · Icon left / Icon right (boolean, default False)"], ["Tokens", "button/primary/bg(-hover/-active) · button/primary/fg · button/secondary/bg(-hover/-active) · button/secondary/fg · button/secondary/border · button/ghost/fg · button/ghost/bg-hover(-active) · button/destructive/bg(-hover) · button/destructive/fg · button/disabled/bg · button/disabled/fg · button/radius · button/gap · button/padding-x-sm|md|lg · focus/ring"], ["A11y", "Label ≥4.5:1 on every fill · focus ring on :focus-visible only · min hit target 24×24 · loading keeps label (aria-busy)"]],
  dos:["One Primary per view", "Verb-first labels ('Create record')", "Destructive + confirm Dialog for irreversible actions", "Loading state on the pressed button"], donts:["Two Primaries side by side", "Ghost as main CTA", "Destructive as default-focused dialog action", "Icon-only without a label (that's an icon button)", "Disabling without a nearby explanation"],
  code:"<Button variant=\"primary|secondary|ghost|destructive\" size=\"sm|md|lg\" iconLeft? iconRight? loading? disabled?>" },
{ tier:"Atom", slug:"tag", name:"Tag", lede:"Status/category label: borderless fully-rounded tint pill, soft -surface fill + vivid -foreground text/icon (every pair ≥4.5:1). Semantic core Neutral/Success/Warning/Error/Info; expressive Teal/Magenta/Orange (revisit-later).",
  spec:[["Level", "Atom · composes: icon"], ["Hue", "Neutral · Success · Warning · Error · Info · Teal · Magenta · Orange"], ["Props", "Label (text, default Label) · Icon (boolean, default True)"], ["Tokens", "tag/&lt;hue&gt;/bg · tag/&lt;hue&gt;/fg · tag/radius"], ["A11y", "Foreground on tint ≥4.5:1 per hue · never color-only (icon + label)"]],
  dos:["Short labels", "Semantic hues carry meaning", "Keep the icon for CVD users"], donts:["Borders on tags", "Tags as buttons/filter chips", "Expressive hues for semantic status", "Sentences inside tags"],
  code:"<Tag hue=\"neutral|success|warning|error|info|teal|magenta|orange\" icon?>" },
{ tier:"Atom", slug:"avatar", name:"Avatar", lede:"Identity mark. Fully-round, sizes 24 (cells/chips) / 32 (nav/lists) / 40 (record headers). Initials on accent tint or icon fallback on muted; Image type lands in code with the same circle mask.",
  spec:[["Level", "Atom · composes: icon"], ["Size", "24 · 32 · 40"], ["Type", "Initials · Icon"], ["Props", "Initials (text, default AB)"], ["Tokens", "avatar/bg · avatar/fg · avatar/bg-muted · avatar/fg-muted"], ["A11y", "Carries alt/aria-label with the full name · initials aria-hidden · never the only identifier"]],
  dos:["Pair with the name in lists", "Run the fallback chain"], donts:["Square avatars", "Hand-picked tints per person", "Sizes off the 24/32/40 ladder"],
  code:"<Avatar size=\"24|32|40\" src? initials? /> — falls back image → initials → icon" },
{ tier:"Atom", slug:"spinner", name:"Spinner", lede:"Indeterminate loading — Lucide loader rotating 1s linear in code. 16 in buttons, 20 in controls, 24 for panel loads. text/tertiary or inherits button label color.",
  spec:[["Level", "Atom · composes: icon"], ["Size", "16 · 20 · 24"], ["Tokens", "text/tertiary (semantic; inherits parent color in buttons)"], ["A11y", "role=status + visually-hidden text · reduced-motion: rotation → opacity pulse"]],
  dos:["Inside the pressed button", "Prefer Skeleton when incoming layout is known"], donts:["Multiple spinners per region", "Determinate progress (Progress bar, T2)", "No timeout/error path"],
  code:"<Spinner size=\"16|20|24\" /> — role=status, aria-label Loading" },
{ tier:"Atom", slug:"skeleton", name:"Skeleton", lede:"Loading placeholder mirroring incoming content. background/muted fill, 1.5s shimmer in code. Text 12h radius-sm · Circle radius-full · Rect radius-md; resize instances to match the real layout.",
  spec:[["Level", "Atom · tokens only"], ["Shape", "Text · Circle · Rect"], ["Tokens", "background/muted (semantic) · radius/sm|md|full"], ["A11y", "aria-hidden; region carries one aria-busy · shimmer pauses under reduced-motion"]],
  dos:["Match real content's shape and count", "Reserve exact space so data doesn't reflow"], donts:["Mixing skeletons and spinners in one region", "Skeleton the whole page"],
  code:"<Skeleton variant=\"text|circle|rect\" />" },
{ tier:"Atom", slug:"separator", name:"Separator", lede:"The hairline — borders do all separation in this flat system. 1px border/default, stretches to its container.",
  spec:[["Level", "Atom · tokens only"], ["Orientation", "Horizontal · Vertical"], ["Tokens", "border/default (semantic)"], ["A11y", "Decorative (aria-hidden) unless separating landmarks"]],
  dos:["Between menu groups, table rows, sections", "Full-bleed in tables and menus"], donts:["Thicker than 1px", "Shadows as separators", "Double separation (separator + panel change)"],
  code:"<Separator orientation=\"horizontal|vertical\" />" },
{ tier:"Atom", slug:"label", name:"Label", lede:"Form field label — text-sm Medium foreground, exactly 8px above its control. Optional required asterisk in form/required.",
  spec:[["Level", "Atom · tokens only"], ["State", "Default · Disabled"], ["Props", "Text (text, default Field label) · Required (boolean, default False)"], ["Tokens", "form/label · form/label-disabled · form/required"], ["A11y", "htmlFor/id wired — clicking focuses the control · required via aria-required, not the asterisk alone"]],
  dos:["Above inputs, 8px gap", "Sentence-case noun phrases", "Mark required consistently"], donts:["Placeholder-as-label", "Colons or all-caps", "Marking every field required"],
  code:"<Label htmlFor required?>" },
{ tier:"Atom", slug:"helper-text", name:"Helper text", lede:"Caption under a control, 4px below (half the label gap — HIG proximity). Default text-xs form/helper; Error swaps to form/helper-error with a 12px alert icon and replaces the default helper.",
  spec:[["Level", "Atom · composes: icon"], ["Variant", "Default · Error"], ["Props", "Text (text, default Helper text)"], ["Tokens", "form/helper · form/helper-error"], ["A11y", "Errors announced aria-live=polite · icon + text, never color alone"]],
  dos:["Say how to fix it", "Errors after blur/submit"], donts:["Default helper + error stacked together", "Critical instructions in helper (put in label)"],
  code:"<HelperText error?> — wired via aria-describedby" },
{ tier:"Atom", slug:"checkbox", name:"Checkbox", lede:"Multi-select control. 16px box radius control/radius; checked/indeterminate fill control/bg-on with white 12px glyph. Label optional and clickable. Indeterminate only for parent rows of partly-selected sets.",
  spec:[["Level", "Atom · composes: icon"], ["Value", "Unchecked · Checked · Indeterminate"], ["State", "Default · Hover · Focus · Disabled"], ["Props", "Label (boolean, default True) · Label text (text, default Checkbox label)"], ["Tokens", "control/bg-on(-hover) · control/fg-on · control/bg-off · control/border-off(-hover/-disabled) · control/bg-disabled · control/fg-disabled · control/label · control/radius · focus/ring"], ["A11y", "Native input semantics · aria-checked=mixed for indeterminate · hit target ≥24 via padding"]],
  dos:["Zero-to-many selections", "Indeterminate only on select-all parents", "Vertical stacks at space/2"], donts:["Either/or choices (Radio)", "Instant on/off settings (Switch)", "Indeterminate as a pickable third value"],
  code:"<Checkbox checked|indeterminate disabled? label?>" },
{ tier:"Atom", slug:"radio", name:"Radio", lede:"Single choice among 2–5 visible options. 16px circle; selected = control/bg-on fill with 6px white dot. Radios only exist in groups.",
  spec:[["Level", "Atom · tokens only"], ["Value", "Off · On"], ["State", "Default · Hover · Focus · Disabled"], ["Props", "Label (boolean, default True) · Label text (text, default Radio label)"], ["Tokens", "control/* family · focus/ring"], ["A11y", "One tab stop per group, arrows move selection · visible group label"]],
  dos:["2–5 options, all visible", "Vertical stacks at space/2"], donts:["More than ~5 options (Select)", "Mixing radios and checkboxes in a group", "A single lone radio"],
  code:"<RadioGroup value onChange> <Radio value label/> </RadioGroup>" },
{ tier:"Atom", slug:"switch", name:"Switch", lede:"Instant on/off — applies immediately, no save step. 36×20 track radius-full, 16px white thumb; On = control/bg-on. Label states the ON meaning and never changes with state.",
  spec:[["Level", "Atom · tokens only"], ["Value", "Off · On"], ["State", "Default · Hover · Focus · Disabled"], ["Props", "Label (boolean, default True) · Label text (text, default Switch label)"], ["Tokens", "switch/track-off(-hover) · switch/thumb(-disabled) · control/bg-on(-hover) · control/label · control/fg-disabled · focus/ring"], ["A11y", "role=switch + aria-checked · thumb slides 150ms ease-out, none under reduced-motion"]],
  dos:["Immediate effect", "Binary settings with obvious on/off"], donts:["Inside submit forms (Checkbox)", "Changing label text on toggle", "Destructive toggles without confirm"],
  code:"<Switch checked onChange disabled? label?> — role=switch" },
{ tier:"Atom", slug:"input", name:"Input", lede:"Single-line text entry. 36h, radius input/radius, input/bg fill, input/border hairline; states told entirely through border + halo. Optional 16px leading/trailing icons. Compose with Label + Helper via Field.",
  spec:[["Level", "Atom · composes: icon"], ["State", "Default · Hover · Focus · Filled · Error · Disabled"], ["Props", "Text (text, default Placeholder) · Icon left / right (boolean, default False)"], ["Tokens", "input/bg(-disabled) · input/border(-hover/-focus/-error/-disabled) · input/fg · input/placeholder · input/fg-disabled · input/icon · input/radius · input/padding-x · input/gap · focus/ring"], ["A11y", "Visible Label always · aria-describedby + aria-invalid on error · halo meets 3:1 non-text"]],
  dos:["Label above 8px, Helper below 4px", "Error border + error helper together", "Right input types for the right keyboard"], donts:["Placeholder as the only label", "Aggressive first-keystroke validation", "Heights other than 36"],
  code:"<Input placeholder value error? disabled? iconLeft? iconRight? />" },
{ tier:"Atom", slug:"textarea", name:"Textarea", lede:"Multi-line entry, min 80h, top-aligned, vertically resizable in code. Same border grammar as Input; no internal icons.",
  spec:[["Level", "Atom · tokens only"], ["State", "Default · Focus · Error · Disabled"], ["Props", "Text (text, default Placeholder)"], ["Tokens", "input/* family · focus/ring"], ["A11y", "Visible label · announce remaining chars at limits"]],
  dos:["Rows sized to expected content", "Counter for hard limits"], donts:["Single-line values", "Icons inside", "Auto-grow without max height"],
  code:"<Textarea rows=3 placeholder error? disabled? />" },
{ tier:"Atom", slug:"tooltip", name:"Tooltip", lede:"Hover/focus hint — tooltip/bg (gray-900) pill, tooltip/fg white text-xs, radius 6, shadow/float, deliberately dark in both themes. Optional ⌘-shortcut chip. Floating tier: 100ms enter with 4px drift, instant exit, 500ms open delay.",
  spec:[["Level", "Atom · tokens only"], ["Content", "Label · Shortcut"], ["Props", "Text (text, default Tooltip label) · Shortcut (text, default ⌘K)"], ["Tokens", "tooltip/bg · tooltip/fg"], ["A11y", "Shows on keyboard focus · Esc-dismissible (WCAG 1.4.13) · never essential-only content · no interactive children (Popover)"]],
  dos:["Name every icon-only button", "Show shortcuts where they exist"], donts:["Links/buttons inside", "Tooltips on disabled elements without a focusable wrapper"],
  code:"<Tooltip content shortcut? side=\"top|right|bottom|left\">" },
{ tier:"Atom", slug:"delta", name:"Delta", lede:"KPI change chip — trend icon + signed tnum value on a soft status tint. Up/Down/Flat → success/error/neutral pairs. Direction reflects movement, not sentiment: invert in code for down-is-good metrics.",
  spec:[["Level", "Atom · composes: icon"], ["Direction", "Up · Down · Flat"], ["Props", "Value (text, default +12.5%)"], ["Tokens", "delta/up|down|flat/bg · delta/up|down|flat/fg"], ["A11y", "Icon + sign carry direction, not color alone · aria-label includes the comparison period"]],
  dos:["Always show the sign", "invert for churn/cost metrics"], donts:["Coloring the KPI numeral itself", "Deltas without a baseline period", "Using as a generic Tag"],
  code:"<Delta value direction invert?>" },
{ tier:"Atom", slug:"kbd", name:"Kbd", lede:"Keyboard-key cap: 20px-min chip on kbd/bg with 1px kbd/border, radius-sm, text-2xs label on kbd/fg. Purely informative — never interactive. Combos are sibling Kbds (gap 4), one key per cap; prefer symbols (⌘ ⇧ ↵ esc) over words.",
  spec:[["Level", "Atom · tokens only"], ["Props", "key (text, default ⌘K)"], ["Tokens", "kbd/bg · kbd/fg · kbd/border · kbd/radius"], ["A11y", "Renders &lt;kbd&gt;; pair with aria-keyshortcuts on the target control"]],
  dos:["One Kbd per key — ⌘K is two caps", "Keep beside the action it triggers"], donts:["Hover states or click handlers", "Spelling words when a symbol exists", "Using as a Tag substitute"],
  code:"<Kbd>⌘K</Kbd>" },
{ tier:"Atom", slug:"progress-bar", name:"Progress bar", lede:"Determinate 8px rail: progress/track muted, radius-full, rose progress/fill sized by value %. Fill is SCALE-constrained in Figma — stretching preserves the percentage. Always rose; status never recolors it. Indeterminate sweep is code-side.",
  spec:[["Level", "Atom · tokens only"], ["Value", "25 · 50 · 75 · 100"], ["Tokens", "progress/track · progress/fill · progress/radius"], ["A11y", "role=progressbar + aria-valuenow/min/max; pair with a visible tnum % label when the number matters"]],
  dos:["Pair with a text-xs tnum % label", "Stretch freely — ratio is preserved", "Keep 8px height in every density"], donts:["Recoloring the fill per status", "Using as a good/bad threshold meter", "Animated stripes or shimmer"],
  code:"<Progress value max?>" },
{ tier:"Atom", slug:"suggestion-chip", name:"Suggestion chip", lede:"AI suggestion pill (Sana grammar): chip/bg card surface, 1px chip/border, radius-full, optional 16px sparkle icon, text-sm label on chip/fg. Sits above the Prompt input; selecting inserts the text into the prompt. 2–4 chips max, verb-first labels ≤ ~4 words.",
  spec:[["Level", "Atom · composes: icon"], ["State", "Default · Hover"], ["Props", "label (text, default Summarize this week) · icon (boolean, default true)"], ["Tokens", "chip/bg · chip/bg-hover · chip/fg · chip/border · chip/radius"], ["A11y", "Real &lt;button&gt;; label is the accessible name; standard focus-visible ring"]],
  dos:["Verb-first, actionable labels", "Rotate by context", "Dismiss the row once a prompt is sent"], donts:["Wrapping to two lines", "Navigation use (use links/menu)", "Per-topic chip colors"],
  code:"<SuggestionChip icon?>label</SuggestionChip>" },
{ tier:"Atom", slug:"thinking-indicator", name:"Thinking indicator", lede:"AI activity signal: 3×3 grid of rose-300 #EA7BA7 blocks (one value, BOTH modes; blocks 25% of size, gaps 12.5%, radius ≈5.5% of size) sweeping a continuous 3.6s linear cycle — random shimmer 0–1.2s (fixed shuffle [4,0,7,2,8,3,1,6,5], 70ms stagger, 0.5s pulse) → row sweep 1.2–2.4s → column sweep 2.4–3.6s (whole line per step, 180ms stagger, 0.6s pulse). Pulse = opacity 0.18→1→0.18, rise cubic-bezier(.35,0,.25,1), fall cubic-bezier(.45,0,.55,1) — opacity only. Beside it, the operation label: text-sm Medium (14/500) live string that changes with what the model is doing ('Thinking…', 'Reading your data…', 'Writing…'), swapping via 150ms fade + 2px rise, with a continuous neutral glow sweep via background-clip:text (250% gradient, 2s linear loop) — a lighter gray band over a text/tertiary base: light gray-300 #D6D7DB over gray-500 #71747C (4.6:1), dark gray-200 #E9EAEC over #8A8F98. Color lives in the blocks only; the label stays neutral (sanctioned background-position animation; tiny paint area, progress exemption). Violet-300 is 2.41:1 on white — blocks are decorative; meaning is always carried by the label + role=status. Standalone, no avatar or mark beside it. Replaced by content on the first streamed token. Reference build + full keyframes: docs/labs-v2-thinking-blocks.html.",
  spec:[["Level", "Atom · tokens only"], ["Props", "size (16|20|24|48, default 20) · sweep (cycle|random|rows|columns, default cycle) · label (string (current operation), default unset; use 'Thinking…' when shown)"], ["Tokens", "rose-300 #EA7BA7 (blocks, both modes) · text/tertiary gray-500 #71747C (label base light; #8A8F98 dark) · gray-300 #D6D7DB / gray-200 #E9EAEC (glow band light / dark)"], ["A11y", "role=status + sr-only mirror of the current operation; announced on label change, not per pulse; blocks and visual label are aria-hidden. Reduced motion: blocks animation:none with static diagonal frame (0.9→0.18); label loses the sweep (plain text/tertiary) but operation text still updates instantly — that change is functional."]],
  dos:["Swap for content at first token", "Place where the text will appear — alone, no avatar/mark", "Drive the label from the real operation; announce changes via role=status", "16 inline/buttons · 20 chat (default) · 24 panel loads · 48 empty states", "Loops while waiting — the progress exemption to the no-loop rule"], donts:["Spinner + blocks together", "Non-AI loading (use Spinner/Skeleton)", "Status hues or rose-600 on blocks — rose-300, both modes", "Meaning carried by blocks alone (2.41:1 on white — label/status text is the signal)", "Isolated sweeps (random/rows/columns) as the resting default — cycle is the signature", "Glow sweep on any other text — it belongs to this component only · never brand/status hues on the label"],
  code:"<ThinkingBlocks size=\"16|20|24|48\" sweep=\"cycle|random|rows|columns\" label? />" },
{ tier:"Atom", slug:"citation-chip", name:"Citation chip", lede:"Inline source reference for AI answers. Number type marks a citation point in assistant prose ([1] on an 18px round chip); Source type shows a 12px favicon dot + bare domain in a text-2xs pill. Rides the muted-soft→muted hover ladder; clicking opens the source, hovering may raise a Hover card. Composes into Chat message assistant turns.",
  spec:[["Level", "Atom · composes: icon"], ["Variants", "{'axis': 'Type', 'values': ['Number', 'Source'], 'default': 'Number'} · {'axis': 'State', 'values': ['Default', 'Hover'], 'default': 'Default'}"], ["Props", "label (text, default 1 / attio.com)"], ["Tokens", "citation/bg · citation/bg-hover · citation/fg · citation/fg-hover"], ["A11y", "Renders &lt;a&gt;; accessible name \"Source 1: attio.com\"; ring on :focus-visible only (keyboard/AT), never on click"]],
  dos:["Cite every external claim — numbers stay in reading order", "Reuse one number for repeat citations of the same source", "Keep domains bare"], donts:["Wrapping to two lines", "Using chips for navigation — they only reference sources", "Recoloring per source — chips stay monochrome"],
  code:"<CitationChip n={1} href/> · <CitationChip source=\"attio.com\" href/>" },
{ tier:"Atom", slug:"copy-button", name:"Copy button", lede:"Copy-to-clipboard toggle: 24px hit cell, 16px copy glyph on the muted tier (hover foreground + muted wash). On click it flips to State=Copied — a check on status/success-foreground — for ~2s, then reverts. Consumed by the Chat message answer footer; reuse beside IDs, code blocks and share links.",
  spec:[["Level", "Atom · composes: icon"], ["State", "Default · Copied"], ["Tokens", "text/tertiary (default) · status/success-foreground (copied)"], ["A11y", "Labelled \"Copy answer\"/context label; aria-live announces \"Copied\"; state reverts after ~2s; keyboard focus ring per policy"]],
  dos:["Revert to the copy glyph after ~2s", "Announce Copied via aria-live"], donts:["Leaving the check permanently", "Using a toast for copy confirmation — the inline check is the feedback"],
  code:"<CopyButton value>" },
{ tier:"Molecule", slug:"menu-item", name:"Menu item", lede:"Row of every menu surface. 224×32, radius menu/item-radius, transparent at rest; hover menu/item-bg-hover, danger rows hover menu/item-bg-danger-hover. Optional leading icon, trailing shortcut, trailing check (single-select menus).",
  spec:[["Level", "Molecule · composes: icon"], ["Type", "Default · Danger"], ["State", "Default · Hover · Disabled"], ["Props", "Label (text, default Menu item) · Icon (boolean, default True) · Shortcut (boolean + text, default false / ⌘D) · Checked (boolean, default False)"], ["Tokens", "menu/item-fg(-danger/-disabled) · menu/item-bg-hover · menu/item-bg-danger-hover · menu/shortcut · menu/item-radius"], ["A11y", "role=menuitem(/checkbox) · full-row hit target · arrows/Enter/Esc"]],
  dos:["Verb-first labels", "Danger rows last after a separator"], donts:["Mixed icon/no-icon rows in one group", "Submenus beyond one level"],
  code:"<MenuItem icon? shortcut? checked? danger? disabled?>" },
{ tier:"Molecule", slug:"menu", name:"Menu", lede:"The floating panel behind Dropdown menu (trigger-anchored) AND Context menu (cursor-anchored) — one anatomy, two invocations. 240w, menu/bg, menu/border hairline, radius menu/radius, shadow/float, 8px padding, 2px row rhythm, muted group labels.",
  spec:[["Level", "Molecule · composes: menu-item, separator"], ["Tokens", "menu/bg · menu/border · menu/radius · menu/group-label · shadow/float"], ["A11y", "Focus in on open, returns on close · Esc · typeahead"]],
  dos:["Group with labels + separators", "Dropdowns below-start, context at cursor", "≤8 visible items"], donts:["Form controls inside (Popover)", "Only path to an action in a context menu"],
  code:"<DropdownMenu trigger> / <ContextMenu target>" },
{ tier:"Molecule", slug:"tab-item", name:"Tab item", lede:"Underline tab: text-sm (Medium active) + 2px tabs/indicator when active. Sits on the Tabs baseline.",
  spec:[["Level", "Molecule · tokens only"], ["State", "Active · Inactive · Hover · Disabled"], ["Props", "Label (text, default Tab label)"], ["Tokens", "tabs/indicator · tabs/fg(-active/-disabled)"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"tab-item\")" },
{ tier:"Molecule", slug:"tabs", name:"Tabs", lede:"Underline tab bar for sibling views (record sub-pages, settings). Items share a hairline baseline (tabs/border), gap 16, one Active always; indicator animates 150ms.",
  spec:[["Level", "Molecule · composes: tab-item"], ["Tokens", "tabs/*"], ["A11y", "role=tablist/tab/tabpanel · roving tabindex, arrows move"]],
  dos:["2–6 tabs, one active", "Order by usage"], donts:["Sequential steps (Wizard, T2)", "Nested tab bars", "Pill-style tabs — underline only"],
  code:"<Tabs value onChange> <Tab value label/> </Tabs>" },
{ tier:"Molecule", slug:"select", name:"Select", lede:"Single choice from 6+ options (fewer → Radio). Input-grammar trigger with chevrons-up-down; opens a Menu with a trailing check on the selected row. Open state = focus grammar.",
  spec:[["Level", "Molecule · composes: menu, menu-item, icon"], ["State", "Default · Hover · Open · Filled · Error · Disabled"], ["Props", "Text (text, default Select an option)"], ["Tokens", "input/* family · menu/* · focus/ring"], ["A11y", "Combobox pattern (aria-expanded, aria-activedescendant) · typeahead · Esc closes without change"]],
  dos:["6+ options or constrained vocabularies", "Sensible default", "Logical option order"], donts:["2–5 options (Radio)", "Huge unsearchable lists (Combobox)", "Placeholder as label"],
  code:"<Select options value placeholder error? disabled? />" },
{ tier:"Molecule", slug:"combobox", name:"Combobox", lede:"Searchable select for long/user-generated lists. Panel adds an auto-focused search input over the option list; multi-select uses Checked menu items; empty filter shows a 'No results' row.",
  spec:[["Level", "Molecule · composes: menu, menu-item, input, icon"], ["State", "Default · Open · Filled · Disabled"], ["Props", "Text (text, default Search or select…)"], ["Tokens", "input/* family · menu/* · focus/ring"]],
  dos:["15+ or user-generated options", "Debounce remote search with a Spinner row", "Summarize multi-select as 'N selected'"], donts:["Short fixed lists (Select)", "Clearing search on each selection", "Blocking typing while loading"],
  code:"<Combobox options value multiple? onSearch />" },
{ tier:"Molecule", slug:"field", name:"Field", lede:"The canonical form unit: Label 8px above, control, Helper 4px below (HIG proximity ratios). Swap the Input for Select/Combobox/Date picker/Textarea — the wrapper grammar is identical. Error swaps input border AND helper together.",
  spec:[["Level", "Molecule · composes: label, input, helper-text"], ["State", "Default · Error · Disabled"], ["Props", "Helper (boolean, default True) · Label/Input/Helper (exposed instances)"], ["Tokens", "form/* · input/* · space/2 label gap · space/1 helper gap"]],
  dos:[], donts:["Two controls under one label", "Hiding labels to save space"],
  code:"<Field label helper error required> {control} </Field>" },
{ tier:"Molecule", slug:"search-input", name:"Search input", lede:"Search entry with leading search icon. Shortcut=⌘K variant is RESERVED for the sidebar quick-actions search (where ⌘K is registered); Shortcut=None is the plain search for table toolbars and filter bars.",
  spec:[["Level", "Molecule · composes: icon"], ["State", "Default · Focus · Filled"], ["Shortcut", "⌘K (sidebar only) · None (tables, filters)"], ["Props", "Text (text, default Search…)"], ["Tokens", "input/* family · focus/ring"]],
  dos:["Filter as-you-type locally", "⌘K chip only where ⌘K works", "One search per surface"], donts:["As a generic text input", "Requiring Enter for local filtering", "Dropping the search icon"],
  code:"<SearchInput placeholder shortcut? onSearch />" },
{ tier:"Molecule", slug:"alert", name:"Alert", lede:"Persistent inline banner (forms, dialogs, sections): alert/&lt;tone&gt;/bg soft tint, colored 16px alert/&lt;tone&gt;/icon, alert/title Medium + alert/body. Stays until resolved — transient feedback is Toast.",
  spec:[["Level", "Molecule · composes: icon"], ["Tone", "Info · Success · Warning · Error"], ["Props", "Title / Body (text) · Show body (boolean, default True) · Dismissible (boolean, default False)"], ["Tokens", "alert/&lt;tone&gt;/bg · alert/&lt;tone&gt;/icon · alert/title · alert/body · alert/radius"], ["A11y", "role=status (info/success) or alert (warning/error) · icon+title carry meaning"]],
  dos:["Directly above the content it describes", "What happened + what to do", "Error tone only for blockers"], donts:["Stacked alerts", "Transient confirmations (Toast)", "Primary page actions inside alerts"],
  code:"<Alert tone title body? dismissible? />" },
{ tier:"Molecule", slug:"toast", name:"Toast", lede:"Transient feedback, bottom-right stack, auto-dismiss 5s (errors persist). toast/bg + toast/border + radius toast/radius + shadow/float; tone icon; optional action as a sm Secondary button (exposed nested instance). Enter 150ms rising 8px, exit 100ms, max 3 visible.",
  spec:[["Level", "Molecule · composes: icon"], ["Tone", "Neutral · Info · Success · Warning · Error"], ["Props", "Title / Description (text) · Action (boolean, default false)"], ["Tokens", "toast/* · alert/&lt;tone&gt;/icon (tone icons) · button/secondary/* · shadow/float"], ["A11y", "aria-live polite (assertive errors) · pause on hover/focus · action keyboard-reachable"]],
  dos:["Confirm in 2–4 words", "Undo over confirm dialogs where safe", "Persistent errors with a next step"], donts:["Validation errors as toasts", "&gt;3 stacked", "Critical info only in a toast"],
  code:"toast({ tone, title, description?, action? })" },
{ tier:"Molecule", slug:"card", name:"Card", lede:"Resting-tier container: card/bg, card/border hairline, radius card/radius — no shadow, ever. Header (title text-md Semi Bold + optional overflow action); Content is a Figma slot.",
  spec:[["Level", "Molecule · composes: icon"], ["Props", "Title (text) · Action (boolean, default True) · Content (slot)"], ["Tokens", "card/bg · card/border · card/radius · card/title"]],
  dos:["One topic per card", "4px-grid card grids with 16/24 gutters"], donts:["Drop shadows on resting cards", "Nesting cards &gt;1 level", "Cards faking tables"],
  code:"<Card title action?> {children} </Card>" },
{ tier:"Molecule", slug:"kpi-tile", name:"KPI tile", lede:"Dashboard stat card (Cal.com pattern): kpi/label secondary, display-sm tnum numeral in kpi/value, Delta chip + kpi/period context. The numeral never carries color — only the Delta does. Loading = Skeleton rect.",
  spec:[["Level", "Molecule · composes: delta"], ["Trend", "Up · Down · Flat"], ["Props", "Metric label / Value / Period (text) · Delta (exposed instance)"], ["Tokens", "kpi/label · kpi/value · kpi/period · card/bg · card/border · card/radius · delta/*"]],
  dos:["3–4 equal tiles per row", "Always give the period", "tnum everywhere"], donts:["Coloring the numeral by performance", "Deltas without baseline"],
  code:"<KpiTile label value delta period invert? />" },
{ tier:"Molecule", slug:"popover", name:"Popover", lede:"Anchored floating container for interactive content (filters, quick forms, pickers) — everything Tooltip must never hold. popover/bg, hairline, radius popover/radius, shadow/float, 8px from trigger, flips on collision.",
  spec:[["Level", "Molecule · composes: icon"], ["Props", "Title (text) · Close (boolean, default True) · Content (slot)"], ["Tokens", "popover/* · shadow/float"], ["A11y", "Focus moves in/returns · Esc + outside click close · no focus trap (that's Dialog)"]],
  dos:[], donts:["Plain text hints (Tooltip)", "Popover from popover", "Destructive flows (Dialog)"],
  code:"<Popover trigger side align> {content} </Popover>" },
{ tier:"Molecule", slug:"description-list", name:"Description list", lede:"Key-value fact sheet for record detail (Attio record layout): dl/term muted 120px fixed + dl/value foreground, 12px rhythm, no separators. Empty values render '—'.",
  spec:[["Level", "Molecule · composes: description-list-item"], ["Tokens", "dl/term · dl/value"]],
  dos:["Short consistent terms", "'—' for empty"], donts:["&gt;8 rows without grouping", "Right-aligned values", "Editable fields (that's a form)"],
  code:"<DescriptionList items=[{term, value}] /> → <dl>" },
{ tier:"Molecule", slug:"empty-state", name:"Empty state", lede:"Zero-data view: 40px empty/icon-bg circle with 24px empty/icon-fg Lucide, md Semi Bold title, secondary one-liner, optional Secondary+Primary pair. States the situation, never apologizes.",
  spec:[["Level", "Molecule · composes: icon, button"], ["Action", "None · Button"], ["Props", "Title / Description (text) · Icon (exposed instance)"], ["Tokens", "empty/icon-bg · empty/icon-fg"]],
  dos:["First-run ≠ filtered-empty ('clear filters')", "Primary = the creating action"], donts:["Apologies/blame", "Spinner as empty state", "Blank zero-data regions"],
  code:"<EmptyState icon title description actions? />" },
{ tier:"Molecule", slug:"legend", name:"Legend", lede:"Chart series key: 16px-gap row of items (8px dot + text-xs secondary label), top-right of the Chart container. Items toggle series (aria-pressed); toggled-off series drop to 40% in code.",
  spec:[["Level", "Molecule · composes: legend-item"], ["Series (item)", "1 chart/series-1 · 2 chart/series-2 · 3 chart/series-3 · 4 chart/series-4"], ["Tokens", "chart/series-1..4"]],
  dos:[], donts:["&gt;6 items (group 'Other')", "Ad-hoc series recoloring"],
  code:"get_labs_v2_component_spec(\"legend\")" },
{ tier:"Molecule", slug:"chart-tooltip", name:"Chart tooltip", lede:"Chart hover card: 12px Medium date header, then per-series rows of color dot · xs secondary label · 12px Medium tnum value. popover/bg + border, radius-md, shadow/float; follows cursor at 8px, no animation. Rendered by the Recharts wrapper.",
  spec:[["Level", "Molecule · tokens only"], ["Tokens", "popover/bg · popover/border · chart/series-* · shadow/float"]],
  dos:["Rows ordered by value", "Dots exactly match series strokes"], donts:["&gt;6 rows (aggregate)", "Actions inside chart tooltips"],
  code:"get_labs_v2_component_spec(\"chart-tooltip\")" },
{ tier:"Molecule", slug:"avatar-group", name:"Avatar group", lede:"Stacked collaborators: up to 3 × 24px avatars overlapping −6px with a 2px canvas ring + '+N' overflow chip (avatar/bg-muted). Click opens the full list; hover shows names via Tooltip.",
  spec:[["Level", "Molecule · composes: avatar"], ["Props", "Overflow (text, default +3)"], ["Tokens", "avatar/* · background/default ring (semantic)"]],
  dos:[], donts:["Overlap &gt;6px", "Truncating without the +N count"],
  code:"get_labs_v2_component_spec(\"avatar-group\")" },
{ tier:"Molecule", slug:"calendar-day", name:"Calendar day", lede:"One day cell, 32×32 radius-md. Selected = calendar/day-selected-bg; Today = calendar/day-today-fg Medium; Outside month = calendar/day-muted-fg; range mode adds a muted-soft band in code.",
  spec:[["Level", "Molecule · tokens only"], ["State", "Default · Hover · Selected · Today · Outside · Disabled"], ["Props", "Day (text, default 14)"], ["Tokens", "calendar/day-*"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"calendar-day\")" },
{ tier:"Molecule", slug:"calendar", name:"Calendar", lede:"The Date picker popover panel: chevron month nav + text-sm Medium title, 11px Medium weekday row, 7×5 grid of Calendar day cells (4px gaps). popover tokens + shadow/float. Range mode renders two months.",
  spec:[["Level", "Molecule · composes: calendar-day, icon"], ["Tokens", "popover/* · calendar/day-* · shadow/float"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"calendar\")" },
{ tier:"Molecule", slug:"date-picker", name:"Date picker", lede:"Date entry: input-grammar trigger with a leading calendar icon opening the Calendar popover. Typing is always possible; min/max disable impossible dates.",
  spec:[["Level", "Molecule · composes: calendar, calendar-day, icon"], ["State", "Default · Open · Filled · Error · Disabled"], ["Props", "Value (text, default Pick a date)"], ["Tokens", "input/* family · calendar/day-* · focus/ring"], ["A11y", "Grid keyboard nav (arrows/PgUp/PgDn) · typed entry always possible"]],
  dos:["Let users type as well as pick", "Disable impossible dates via min/max"], donts:["Calendar-only for well-known dates (birthdays)", "Forcing one locale's format", "Opening on focus alone"],
  code:"<DatePicker value range? min? max? format=\"MMM D, YYYY\" />" },
{ tier:"Molecule", slug:"number-input", name:"Number input", lede:"Numeric field on the exact Input recipe (36px shell, input/* state grammar incl. the 3px 16% focus halo) plus a right stepper column: two 24×18 chevron cells over a hairline. Values text-sm tnum; ↑↓ steps, ⇧ steps 10×. Shell clips content except the Focus variant (halo must render). Wrap in Field.",
  spec:[["Level", "Molecule · composes: icon"], ["State", "Default · Hover · Focus · Filled · Error · Disabled"], ["Props", "value (text, default 0)"], ["Tokens", "input/* · focus/ring"], ["A11y", "Native input[type=number] semantics; steppers aria-hidden (keyboard already steps)"]],
  dos:["True numbers only (seats, limits, amounts)", "Right-align in stacked forms/tables", "Set sensible step/min/max"], donts:["Phone numbers or IDs (use Input)", "Hiding the steppers", "Accepting non-numeric text"],
  code:"<NumberInput value step min max>" },
{ tier:"Molecule", slug:"tag-input", name:"Tag input", lede:"Multi-value field: committed values render as neutral Tag pills inside the Input shell; Enter/comma commits, Backspace removes the last, each pill gets a ✕ remove affordance in code. Pills stay neutral gray inside the field — color=meaning lives in tables. For fixed vocabularies prefer Combobox multi-select.",
  spec:[["Level", "Molecule · composes: tag"], ["State", "Default · Focus · Error · Disabled"], ["Tokens", "input/* · tag/neutral/bg · tag/neutral/fg · focus/ring"], ["A11y", "Chips are buttons labelled 'remove {tag}'; count announced via aria-describedby"]],
  dos:["Commit on Enter and comma", "Autocomplete when a vocabulary exists", "Wrap the field taller on overflow"], donts:["Colored pills inside the field", "Truncating pills", "Single-value picks (use Select)"],
  code:"<TagInput value=[] onAdd onRemove suggestions?>" },
{ tier:"Molecule", slug:"file-upload", name:"File upload", lede:"Dropzone: dashed (5-5) upload/border on upload/bg, radius-lg, centered 40px icon tile (bound upload/bg) + 'Click to upload' (upload/link-fg) 'or drag and drop' + constraints line (text-xs). Dragover flips border to upload/border-active rose + muted wash; Error swaps border and the helper message. One click target wrapping a native file input; File upload items stack below with 8px gap.",
  spec:[["Level", "Molecule · composes: icon, file-upload-item"], ["State", "Default · Dragover · Error"], ["Tokens", "upload/bg · upload/border · upload/border-active · upload/icon · upload/link-fg · upload/radius"], ["A11y", "Labelled button + input[type=file]; drag state via aria-live; errors inline, not toasts"]],
  dos:["State formats + size cap up front", "Inline errors in the zone", "Per-file cancel/remove"], donts:["Modal for drag-and-drop", "Hiding per-file progress", "Avatar swaps (use Avatar + menu)"],
  code:"<FileUpload accept maxSize multiple?>" },
{ tier:"Molecule", slug:"file-upload-item", name:"File upload item", lede:"Per-file row under the dropzone: 32px muted file tile, text-sm-medium name, then a live Progress bar + tnum % while Uploading, or size + 'Uploaded' + green check when Complete. Trailing ✕ cancels / removes.",
  spec:[["Level", "Molecule · composes: icon, progress-bar"], ["State", "Uploading · Complete"], ["Props", "file name (text, default members-export.csv)"], ["Tokens", "upload/icon · progress/* · status/success/fg (check)"], ["A11y", "Row names file + % in text; remove button labelled per file"]],
  dos:["One row per file, 8px stack gap"], donts:["Hiding progress during upload"],
  code:"<FileUploadItem file progress onRemove>" },
{ tier:"Molecule", slug:"breadcrumbs", name:"Breadcrumbs", lede:"Topbar path trail: optional home icon, 14px chevron-right separators on breadcrumb/separator-fg, parent crumbs text-sm on breadcrumb/item-fg (hover → foreground + underline), current page text-sm-medium on breadcrumb/current-fg — text, never a link. &gt;3 levels collapses middle crumbs to an ellipsis menu.",
  spec:[["Level", "Molecule · composes: icon"], ["Props", "parent (text, default Settings) · current (text, default Members) · home icon (boolean, default true)"], ["Tokens", "breadcrumb/item-fg · breadcrumb/current-fg · breadcrumb/separator-fg"], ["A11y", "nav aria-label=Breadcrumb + ol; separators aria-hidden; current gets aria-current=page"]],
  dos:["Truncate crumbs ~24ch with tooltip", "Collapse beyond 3 levels", "One line always"], donts:["Linking the current page", "Slash/dot separators", "Showing on top-level pages"],
  code:"<Breadcrumbs items=[{label, href}]>" },
{ tier:"Molecule", slug:"pagination-item", name:"Pagination item", lede:"32px square page cell, radius-md: text-sm on pagination/item-fg; Active = pagination/active-bg muted fill + text-sm-medium on pagination/active-fg. Hover shows the fill without the weight (code). Consumed by Pagination.",
  spec:[["Level", "Molecule · tokens only"], ["State", "Default · Active"], ["Props", "page (text, default 1)"], ["Tokens", "pagination/item-fg · pagination/active-fg · pagination/active-bg · pagination/radius"], ["A11y", "Button labelled 'Page N'; active aria-current=page"]],
  dos:[], donts:[],
  code:"(internal — rendered by <Pagination>)" },
{ tier:"Molecule", slug:"pagination", name:"Pagination", lede:"Table-footer pager: Previous/Next as sm Ghost buttons at the edges (disabled at range ends), page cells centered showing first 3 + last 3 with a non-interactive … between. Right-aligned under full-bleed tables beside the count summary. ←/→ move focus, Enter activates.",
  spec:[["Level", "Molecule · composes: button, pagination-item"], ["Tokens", "pagination/* · button/ghost/*"], ["A11y", "nav aria-label=Pagination; ellipsis is never a button"]],
  dos:["Count summary left of the pager", "Page in the URL", "First 3 + last 3 pattern"], donts:["Paginating under ~25 rows", "Mixing with infinite scroll", "Hiding disabled Previous/Next"],
  code:"<Pagination page count pageSize onChange>" },
{ tier:"Molecule", slug:"accordion-item", name:"Accordion item", lede:"Disclosure row: full-width trigger (text-sm-medium on accordion/trigger-fg, 12px vertical padding) + 16px chevron on accordion/icon rotating 180° over 150ms, body text-sm on accordion/body-fg, 1px accordion/border under every row. Hover tints the trigger background/muted (code).",
  spec:[["Level", "Molecule · composes: icon"], ["State", "Closed · Open"], ["Props", "title (text, default How does billing work?)"], ["Tokens", "accordion/border · accordion/trigger-fg · accordion/body-fg · accordion/icon"], ["A11y", "button[aria-expanded][aria-controls] + labelled region; chevron decorative"]],
  dos:[], donts:[],
  code:"<AccordionItem title>children</AccordionItem>" },
{ tier:"Molecule", slug:"accordion", name:"Accordion", lede:"Disclosure stack for FAQs, advanced settings, long detail panes: items flush with their own hairlines, no outer card, no zebra. Single-open by default (type=single collapsible); multi-open is a code flag. Height animation respects prefers-reduced-motion.",
  spec:[["Level", "Molecule · composes: accordion-item"], ["Tokens", "accordion/*"], ["A11y", "Radix Accordion semantics"]],
  dos:["Front-load trigger labels", "Optional-to-read content only", "Short bodies; link out for policy text"], donts:["Hiding required fields inside", "Nesting accordions", "Auto-opening more than the first row"],
  code:"<Accordion type=\"single\" collapsible> <AccordionItem…/> </Accordion>" },
{ tier:"Molecule", slug:"list-item", name:"List item", lede:"Generic vertical-list row (inboxes, member lists, notification panes — where Table is too heavy): optional 24px Avatar, title text-sm-medium on list/title-fg over supporting text-xs on list/meta-fg, trailing time/meta right-aligned. Hover/Selected wash list/bg-hover, radius-md, 8×12 padding; rows stack flush with no separators.",
  spec:[["Level", "Molecule · composes: avatar"], ["State", "Default · Hover · Selected"], ["Props", "title (text, default Sarah Chen) · supporting (text, default sarah@acme.com) · trailing (text, default 2h ago) · avatar (boolean, default true)"], ["Tokens", "list/title-fg · list/meta-fg · list/bg-hover · list/radius"], ["A11y", "Whole row one focusable control; selected uses aria-selected; keyboard focus adds a 2px inset ring"]],
  dos:["Truncate the title, never the trailing meta", "48–56px rows, two text lines max", "Reuse inside Command palette results"], donts:["Per-row action buttons (use a trailing … menu)", "Mixing avatar and icon rows in one list", "3+ column data (use Table)"],
  code:"<ListItem title supporting? trailing? avatar? selected?>" },
{ tier:"Molecule", slug:"step-item", name:"Step item", lede:"Wizard step: 24px radius-full dot + text-sm label. Todo = stepper/todo-bg muted dot, tertiary number + label; Active = rose stepper/active-bg dot, white number, text-sm-medium foreground label; Done = rose dot with 12px check, secondary label. Consumed by Stepper.",
  spec:[["Level", "Molecule · composes: icon"], ["State", "Todo · Active · Done"], ["Props", "label (text, default Workspace) · number (text, default 2)"], ["Tokens", "stepper/active-bg · stepper/active-fg · stepper/done-bg · stepper/todo-bg · stepper/todo-fg"], ["A11y", "aria-current=step on Active; Done steps are links, Todo disabled text"]],
  dos:[], donts:[],
  code:"(internal — rendered by <Stepper>)" },
{ tier:"Molecule", slug:"stepper", name:"Stepper", lede:"Horizontal wizard rail: Step items joined by 48×2 connectors — stepper/connector-done rose behind completed steps, stepper/connector muted ahead. Exactly one Active; Done steps navigate back on click, Todo steps inert. 3–5 steps; more (or long labels) → vertical variant (code-side). Tops Dialog flows and full-page setup.",
  spec:[["Level", "Molecule · composes: step-item"], ["Tokens", "stepper/*"], ["A11y", "nav + ol; aria-current=step"]],
  dos:["Noun step names", "Click-back on Done steps", "Merge micro-steps"], donts:["Using as tabs", "Marking Done before data is saved", "Hiding future steps"],
  code:"<Stepper steps=[{label}] current>" },
{ tier:"Molecule", slug:"prompt-input", name:"Prompt input", lede:"FLUID WIDTH — the composer fills its thread column (canonical 640px; column min 480 / max 768, centered in the content area); never render it as a fixed narrow bar on wide viewports. AI composer: Conductor-height radius-xl shell (min-height 140 — text at top, toolbar pinned to the bottom) on prompt/bg + prompt/border; the field grows with input to max-height 280, then the text SCROLLS inside (State=Long shows the cap + thin scrollbar thumb; the toolbar never moves) — left: PLUS (composer actions menu; never add more toolbar icons) then the MODEL PICKER (model prop: text-xs-medium label + chevron-down, opens a Menu of models) then the capability pill; right: MIC (voice input) beside the 28px radius-full send on button/primary/bg. The capability boolean shows an engaged-capability pill after the mic (tag/info tint, 12 Semi Bold label + dismiss X) — picked from the plus menu, one capability at a time, X disengages. Send idles at 40% opacity until text exists; swaps to a stop square while streaming. State=Recording (after the mic): red live dot + tnum timer + a full-width waveform replace the text area — 3px bars on a 4px gap (7px rhythm), bar count derived from width; bars animate from live input (the Figma Waveform part loops three smart-animate keyframes so prototypes move too); reduced-motion shows static level bars. Toolbar becomes cancel X (discard; esc too) and the send circle a confirm check. Confirm passes through a brief State=Transcribing — Thinking dots + Transcribing… on the placeholder tier, toolbar restored, send idle — then the text lands in State=Filled, editable, never auto-sent. Recording start/stop announced via aria-live. State=Command: typing \"/\" summons the skills &amp; commands menu above the field — menu/* panel of Menu items with /slash shortcuts, filtered as you type; up/down navigate, enter runs, esc closes — the shell keeps its resting border while the menu is open (no focus stroke; rings are keyboard-only). State=Models: the model picker dropdown — a 240px Menu floating OVER the field (shadow/float separates it), bottom edge just above the picker trigger (Auto checked default, exactly one checked row); selecting updates the model label. Enter sends, Shift+Enter breaks. Attachments flow INLINE WITH THE PROMPT (Conductor grammar): linear Attachment chips sit inside the wrapping text region, mid-sentence between text runs, inserted at the caret via the plus menu or drag-in; chips wrap with the sentence. The attachments boolean reveals leading chips in Default/Focus; State=Attachments shows the interleaved specimen. Attachments are added via the plus menu or drag-in; an attachment alone makes send active. Suggestion chips sit above. UPDATES 2026-09-23: resting border rides gray-300 (prompt/border); Focus is a solid rose-400 edge (1px border + 3px full-opacity halo — no 16% tint), shown under keyboard/AT modality only. VOICE: the mic starts Recording — the shell swaps to a pulsing red dot + tnum timer + animated waveform with ✕ cancel (left) and a radius-full rose ✓ confirm replacing send (right); confirm runs Transcribing — thinking blocks + \"Transcribing…\" in the text slot — then the transcript lands in the composer for review; send never auto-fires. Esc cancels recording.",
  spec:[["Level", "Molecule · composes: icon, attachment-card, menu-item"], ["State", "Default · Focus · Filled · Recording · Transcribing · Long · Command · Models · Attachments"], ["Props", "prompt (text, default Ask anything about your workspace…) · attachments (boolean, default false) · capability (boolean, default false) · capability label (text, default Create website) · model (text, default Auto)"], ["Tokens", "prompt/bg · prompt/border · prompt/border-focus · prompt/icon · prompt/placeholder · prompt/radius · button/primary/bg · focus/ring · attachment/* · tag/info/bg + tag/info/fg (capability pill) · menu/* (command menu)"], ["A11y", "textarea labelled 'Message assistant'; send announces disabled; ⌘↵ alternate send · recording announced via aria-live (Recording started / stopped); timer readable as elapsed time"]],
  dos:["Pin to the thread bottom", "Show attachments as chips inside the shell, removable per item", "Attachment chips inside the shell", "Send → stop while streaming", "New composer features go in the plus menu"], donts:["Using as a search field", "Blocking typing while streaming", "More than the one rose accent (send)"],
  code:"<PromptInput value onSend attachments? voice?>" },
{ tier:"Molecule", slug:"attachment-card", name:"Attachment card", lede:"Linear attachment chip (Conductor grammar): one-line pill at TEXT SCALE (≈23px tall, 2×6 padding — sits on the prompt line, center-aligned with the text runs) — 14px colored type glyph (unclipped: the absolute 2px Lucide stroke needs breathing room, container never clips) (Document = red file-text via attachment/tile-doc, Image = green image glyph; glyph color follows file type in code), filename at text-sm (matches the prompt text) truncating, inline 12px ✕ remove on the tertiary tier. White chip (attachment/bg → background/card) with a 1px attachment/border hairline, radius-md (attachment/radius re-pointed). Flows inline in rows or within message text. Labels default to UNIVERSAL type names (File · Image) — real filenames per use via the prop. State=Hover: SAME FOOTPRINT as Default (the chip never reflows the sentence) — the chip takes the muted wash and the preview card (shadow/float, radius-lg) floats absolutely above it, outside the layout flow — placeholder glyph in Figma, the real thumbnail / first page in production; opens after ~400ms hover and on keyboard focus. Consumed by Prompt input (inline with the text); reusable in Chat message.",
  spec:[["Level", "Molecule · composes: icon"], ["Type", "Document · Image"], ["State", "Default · Hover"], ["Props", "file name (text, default File)"], ["Tokens", "attachment/bg (→ background/card) · attachment/border · attachment/name-fg · attachment/tile-doc · attachment/radius (→ radius/md) · status/success (image glyph)"], ["A11y", "Card names file + kind; remove button labelled 'remove {file}'; keyboard-reachable"]],
  dos:["Truncate long names in the middle where possible", "Tile color by file type", "Real thumbnails for images"], donts:["Hover-only remove", "Cards outside the composer/message context (use File upload item in forms)"],
  code:"<AttachmentCard type name onRemove thumb?>" },
{ tier:"Molecule", slug:"slider", name:"Slider", lede:"Continuous value selection on a horizontal track — Single value or Range pair. 4px radius-full rail on slider/track-bg; filled span on slider/range-bg (primary rose); 16px bordered disc thumbs on slider/thumb-bg. Hover darkens the thumb border; Focus draws the 2px focus/ring geometry around the active thumb; Disabled is 50% opacity. Optional value-label bubbles reuse tooltip/bg·fg and show while dragging. Track stretches with width; range and thumbs scale proportionally.",
  spec:[["Level", "Molecule · tokens only"], ["Variants", "{'axis': 'Type', 'values': ['Single', 'Range'], 'default': 'Single'} · {'axis': 'State', 'values': ['Default', 'Hover', 'Focus', 'Disabled'], 'default': 'Default'}"], ["Props", "Value label (boolean, default False)"], ["Tokens", "slider/track-bg · slider/range-bg · slider/thumb-bg · slider/thumb-border · slider/thumb-border-hover · focus/ring · tooltip/bg · tooltip/fg"], ["A11y", "role=slider per thumb; arrow keys step, Home/End jump; aria-valuetext carries units; ring on :focus-visible only (keyboard/AT) — never on pointer drag or click"]],
  dos:["Step in units users think in (5%, 1 day, 100 AED)", "Show the value label while dragging", "Keep min/max captions outside the track (text-xs tertiary)", "Wrap in Field for label + helper"], donts:["Precise data entry — that's Number input", "Recoloring the range per status — it stays primary", "Vertical sliders — not in the system"],
  code:"<Slider value={60} min={0} max={100} step={5}/> · <Slider range value={[20,60]}/>" },
{ tier:"Molecule", slug:"otp-input", name:"OTP input", lede:"One-time passcode entry — one digit per 36px cell (radius-md, input-family border), auto-advance on type, paste distributes. Digits are text-md with tnum. Six cells default, four for SMS short codes; gap is otp/gap (space-2). Focus gives the active cell input/border-focus + the 3px focus/ring halo at 16% (geometry; clipsContent stays false only on Focus variants). Error borders every cell in otp/cell-border-error and clears on the next keystroke; Disabled sits on otp/cell-bg-disabled while verifying.",
  spec:[["Level", "Molecule · tokens only"], ["Variants", "{'axis': 'Length', 'values': ['6', '4'], 'default': '6'} · {'axis': 'State', 'values': ['Default', 'Focus', 'Filled', 'Error', 'Disabled'], 'default': 'Default'}"], ["Tokens", "otp/cell-bg · otp/cell-bg-disabled · otp/cell-border · otp/cell-border-error · otp/digit-fg · otp/gap · otp/cell-radius · input/border-focus · focus/ring"], ["A11y", "autocomplete=one-time-code on the group; inputmode=numeric per cell; announced “digit N of 6”; errors via aria-live; border+halo on :focus-visible (native input behavior — typing context keeps it visible after click, per system rule)"]],
  dos:["Auto-submit when the last digit lands", "Distribute a pasted code across cells", "Clear the error state on the next keystroke", "Wrap in Field for label + helper"], donts:["Masking digits — codes are short-lived, visibility beats secrecy", "Passwords or persistent PINs", "More than 6 cells — longer codes get a plain Input"],
  code:"<OTPInput length={6} onComplete={verify}/>" },
{ tier:"Molecule", slug:"hover-card", name:"Hover card", lede:"Entity preview raised after ~500ms hover on links, chips, table cells and citation chips — the Attio-style record peek. 320px, padding 16, hovercard/radius (lg), hovercard/bg (popover) with hairline hovercard/border and shadow/float (always paired). Header: 40px avatar (Person = round on avatar/bg; Company = radius-sm primary mark) + text-sm-medium name + text-xs meta line; hairline separator; up to three 16px-icon + text-xs meta rows. Preview only — click goes to the entity; dismisses on mouse-out/Esc.",
  spec:[["Level", "Molecule · composes: icon"], ["Variants", "{'axis': 'Type', 'values': ['Person', 'Company'], 'default': 'Person'}"], ["Props", "name / meta (text, default Sara Kim …)"], ["Tokens", "hovercard/bg · hovercard/border · hovercard/title-fg · hovercard/secondary-fg · hovercard/meta-fg · hovercard/radius · avatar/bg · avatar/fg"], ["A11y", "Pointer-only enhancement — the anchor link stays the keyboard path; card is aria-hidden, never focus-trapped; closes on Esc and mouse-out"]],
  dos:["Open after ~500ms — never on accidental pass-through", "Keep to three meta rows; the record page holds the rest", "Let click go to the entity"], donts:["Buttons or actions inside — previews only", "Nesting hover cards from links inside a card", "Making it the only path to info — touch has no hover"],
  code:"<HoverCard entity={person} openDelay={500} closeDelay={150}/>" },
{ tier:"Molecule", slug:"page-banner", name:"Page banner", lede:"Full-width announcement strip pinned above the page header — the page-level sibling of the inline Alert. Edge to edge, radius 0, padding 16/10, 40px min height. Tone pairs banner/&lt;tone&gt;-bg + banner/&lt;tone&gt;-fg map to the status surface/foreground trios; Brand uses the interactive/accent pair (same as sidebar-active). 16px tone icon (info / check-circle / alert-triangle / alert-circle / sparkle), text-sm message fills, optional underlined text-sm-medium action link, optional 16px dismiss ✕. One banner max per page; highest severity wins.",
  spec:[["Level", "Molecule · composes: icon"], ["Variants", "{'axis': 'Status', 'values': ['Info', 'Success', 'Warning', 'Error', 'Brand'], 'default': 'Info'}"], ["Props", "Action (boolean, default True) · Dismissible (boolean, default True)"], ["Tokens", "banner/info-bg · banner/info-fg · banner/success-bg · banner/success-fg · banner/warning-bg · banner/warning-fg · banner/error-bg · banner/error-fg · banner/brand-bg · banner/brand-fg"], ["A11y", "role=status (info · success · brand) or role=alert (warning · error); dismiss is a labeled icon button and action a real link — both show the ring on :focus-visible only (keyboard/AT)"]],
  dos:["Keep the message to one line where possible", "Pair every Error banner with a next step", "Persist dismissal — never re-show on reload"], donts:["Stacking banners — highest severity wins", "Form validation — that's Alert and field errors", "Feature announcements in Error or Warning tones"],
  code:"<PageBanner status=\"warning\" action={{label, href}} onDismiss/>" },
{ tier:"Molecule", slug:"filter-chip", name:"Filter chip", lede:"Per-field table filter trigger — one chip per filterable column, full-round, 36h, hairline border on card. States: Default ('Status' + chevron-down 16) · Hover (muted bg) · Open (1.5px ring-colored border while its dropdown is up) · Applied ('Status:' muted + value SemiBold foreground + chevron) · Applied hover (chevron swaps for the clear ×) · Add filter (dashed border, plus icon, muted — opens the field picker).",
  spec:[["Level", "Molecule · composes: tag, icon"], ["Tokens", "background/card · background/muted · border/default · interactive/ring · text/foreground · text/muted-foreground"], ["A11y", "Button semantics; aria-expanded while its dropdown is open; the clear × is its own labelled button"]],
  dos:["One chip per active field", "Value in SemiBold, field name muted", "Open state ring while the dropdown is visible"], donts:["A single generic 'Filter' builder chip (superseded pattern)", "Funnel icons on field chips"],
  code:"<FilterChip field=\"Status\" values={['Active']} onOpen onClear />" },
{ tier:"Molecule", slug:"filter-options-dropdown", name:"Filter options dropdown", lede:"The dropdown owned by ONE filter chip: a checkbox multi-select of that field's values (real Checkbox instances with label text), hairline divider, muted 'Clear filter' row. 220w, popover background, hairline border, shadow/float, radius 12. Option rows 32h, radius 6, hover muted wash.",
  spec:[["Level", "Molecule · composes: checkbox, separator, popover"], ["Tokens", "background/popover · border/default · shadow/float · via checkbox"], ["A11y", "menu/listbox semantics with aria-multiselectable; checkbox options; Clear filter is a menuitem"]],
  dos:["Checkbox multi-select", "Clear filter always last, below the divider"], donts:["Field/operator/value builder rows (that's a different, superseded pattern)", "Resting shadows — this is the floating tier"],
  code:"<FilterOptionsDropdown options selected onToggle onClear />" },
{ tier:"Molecule", slug:"filter-bar", name:"Filter bar", lede:"Chips-on-top-of-table pattern: one Applied/Default chip per active field + the dashed Add-filter chip, 8px gaps, left-aligned above the table-card. Each chip opens its own Filter options dropdown.",
  spec:[["Level", "Molecule · composes: filter-chip"], ["Tokens", "via filter-chip"], ["A11y", "Toolbar semantics; chips are buttons"]],
  dos:["Left-align", "Dashed Add-filter chip always last"], donts:["Right-aligning the bar", "Hiding applied filters behind a single count"],
  code:"<FilterBar filters={[{field:'Status', values:['Active']}]} onAddFilter />" },
{ tier:"Organism", slug:"dialog", name:"Dialog", lede:"Centered modal for focused decisions: 480w (640 max), radius dialog/radius (xl), dialog/bg, shadow/overlay on ink/40% scrim (black/60% dark). Header title+subtitle+X; Content slot; right-aligned footer (Secondary Cancel + confirm). Destructive variant embeds a warning Alert and confirms with Button/Destructive — never default-focused.",
  spec:[["Level", "Organism · composes: button, alert, icon"], ["Variant", "Default · Destructive"], ["Props", "Title / Subtitle (text) · Content (slot)"], ["Tokens", "dialog/* · shadow/overlay"], ["A11y", "Focus trapped + returned · Esc/scrim close (blocked in destructive) · initial focus on Cancel in destructive · aria-labelledby"]],
  dos:["One decision per dialog", "Typed confirmation for bulk-irreversible"], donts:["Nested dialogs", "Content browsing (Sheet)", "Autofocusing the destructive action"],
  code:"<Dialog title subtitle destructive? onConfirm onCancel> {content} </Dialog>" },
{ tier:"Organism", slug:"sheet", name:"Sheet", lede:"Side panel from the right edge (left in RTL): 400w (480 max), full height, sheet/border hairline left, shadow/overlay, radius sheet/radius (xl) on the detached corners only. Header/footer hairline-separated; Content slot scrolls. Keeps list context visible.",
  spec:[["Level", "Organism · composes: button, icon"], ["Tokens", "sheet/* · shadow/overlay"]],
  dos:["Record preview from table rows", "Pinned footer actions"], donts:["Sheets over sheets", "Blocking decisions (Dialog)", "&gt;480w (make it a page)"],
  code:"<Sheet title side=\"right\" onClose> {content} </Sheet>" },
{ tier:"Organism", slug:"table-header-cell", name:"Table header cell", lede:"Sticky header cell: 36h, 12px Medium table/header-fg label with a leading column-type icon (Attio pattern) and optional sort indicator (aria-sort button in code).",
  spec:[["Level", "Organism · composes: icon"], ["Props", "Label (text) · Icon (boolean + exposed, default True) · Sortable (boolean, default False)"], ["Tokens", "table/header-fg"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"table-header-cell\")" },
{ tier:"Organism", slug:"table-cell", name:"Table cell", lede:"Body cell, 40h comfortable (36 compact / 48 relaxed). Types: Text · Entity (24px avatar + name) · Tag · Numeral (right-aligned tnum) · Link (underlined table/link) · Muted ('—') · Checkbox (48w selection column).",
  spec:[["Level", "Organism · composes: avatar, tag, checkbox"], ["Type", "Text · Entity · Tag · Numeral · Link · Muted · Checkbox"], ["Props", "Value (text)"], ["Tokens", "table/cell-fg · table/cell-muted · table/link"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"table-cell\")" },
{ tier:"Organism", slug:"table-toolbar", name:"Table toolbar", lede:"Control strip above the table-card. Since 2026-10-20 the default Table context shows ONLY the filter bar (chips-on-top pattern), left-aligned; search, Sort and the primary action are slots that other contexts may reveal. 52h, transparent.",
  spec:[["Level", "Organism · composes: filter-bar, search-input, button"], ["Tokens", "via composed components"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"table-toolbar\")" },
{ tier:"Organism", slug:"table", name:"Table", lede:"THE FLAGSHIP, Maze-style since 2026-10-20: the data region (header + rows + footer) lives in a rounded 'table-card' — radius 10, hairline border, card background, content clipped — with the filter bar above it. Header: 42h muted-gray band, UPPERCASE labels at +6% tracking, a 16px arrow-up-down sort icon per column, transparent header cells so the band reads continuously. Rows: 56h default (airy), hairline dividers only — no zebra. Checkbox selection column. Status cells may render as PLAIN COLORED TEXT (status/*-foreground) instead of tag pills. All numerals in IBM Plex Mono, right-aligned. Footer: quiet pagination — 'Showing 1 – N · Page X'. Row states in code: hover muted-soft wash, selected accent tint, loading skeleton rows, empty = Empty state spanning the body.",
  spec:[["Level", "Organism · composes: table-toolbar, filter-bar, table-header-cell, table-cell, separator"], ["Tokens", "table/*"], ["A11y", "Real &lt;table&gt; semantics · sortable headers are buttons with aria-sort · selection announced"]],
  dos:["Wrap header+rows+footer in the rounded, clipped table-card (radius 10 + hairline + card bg)", "Right-align numerals in IBM Plex Mono, left-align the rest", "UPPERCASE +6% tracked header labels with the sort icon", "'—' muted for empty cells"], donts:["Zebra striping", "Center-aligned cells", "Tag pills AND colored text mixed in one status column — pick one per table", "Mixed densities on one screen", "Semantic per-column header icons (replaced by the sort glyph)"],
  code:"<Table columns rows density=\"comfortable\" selectable sortable />" },
{ tier:"Organism", slug:"sidebar-item", name:"Sidebar item", lede:"Nav row: 232×32, radius sidebar/item-radius, 16px icon + text-sm label + optional count. Active = sidebar/item-bg-active (interactive/accent, rose-50 tint) with Medium sidebar/item-fg-active (accent-foreground, rose-800) label + icon; hover = sidebar/item-bg-hover (muted-soft). The accent belongs to the single active item only — hover and rest stay gray. Layout=Collapsed: 40×32 icon-only cell for the 64px rail — label moves to a tooltip, count becomes a status dot (both code-side); state washes unchanged.",
  spec:[["Level", "Organism · composes: icon"], ["State", "Default · Hover · Active"], ["Layout", "Expanded · Collapsed"], ["Props", "Label (text) · Count + Count value (boolean + text, default false / 24) · Icon (exposed instance)"], ["Tokens", "sidebar/item-* · sidebar/count"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"sidebar-item\")" },
{ tier:"Organism", slug:"sidebar-group-label", name:"Sidebar group label", lede:"Collapsible section header — text-xs sidebar/group-label with chevron. Groups sit 24px apart.",
  spec:[["Level", "Organism · composes: icon"], ["Props", "Label (text, default Workspace)"], ["Tokens", "sidebar/group-label"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"sidebar-group-label\")" },
{ tier:"Organism", slug:"workspace-switcher", name:"Workspace switcher", lede:"Sidebar header row: 24px workspace mark + name + trailing slot. Logo=Round (avatar) / Square (radius-sm brand tile) show chevrons-up-down and open the workspace menu; Logo=Avatar-collapse / Logo-collapse (user-added) swap the trailing icon for the 16px sidebar collapse toggle — the Sidebar defaults to Avatar-collapse, the workspace menu opens from the row itself, and the collapse icon takes the rail to the 64px icon-only state (code-side). Collapsed-avatar / Collapsed-logo: 40×40 rail twins — centered mark only; the mark opens the workspace menu.",
  spec:[["Level", "Organism · composes: avatar, icon, menu"], ["Logo", "Round · Square · Avatar-collapse · Logo-collapse · Collapsed-avatar · Collapsed-logo"], ["Props", "Workspace (text, default Wellx Labs)"], ["Tokens", "sidebar/item-fg-active"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"workspace-switcher\")" },
{ tier:"Organism", slug:"sidebar-footer", name:"Sidebar footer", lede:"Sidebar user row: 24px Avatar + name text-sm-medium / email text-xs + trailing 16px ellipsis. The whole row is a menu trigger — profile, preferences, sign out AND Settings expand from here (Settings left the nav rail). Never a bare gear icon.",
  spec:[["Level", "Organism · composes: avatar, icon"], ["Props", "Name / Email (text)"], ["Tokens", "sidebar/item-fg-active"]],
  dos:[], donts:[],
  code:"get_labs_v2_component_spec(\"sidebar-footer\")" },
{ tier:"Organism", slug:"sidebar", name:"Sidebar", lede:"The 256px PURE WHITE app sidebar (locked override on the Attio shell), sidebar/border hairline right. Top-down: workspace switcher, ⌘K Search (Shortcut=⌘K — the only place it appears), nav items at 4px rhythm, collapsible groups 24px apart, flex space, settings + user footer. One Active item always, matching the route (aria-current=page). Bottom of the rail: a “Powered by” credit — text-2xs beside the official Wellx Labs lockup inline at 80×16 (the served PNG via get_logo, never redrawn or retypeset), centered in a single 36px row — then the user footer row. The switcher rides its Avatar-collapse variant — trailing sidebar icon = collapse toggle (64px icon-only rail, code-side); workspace menu opens from the row itself. State=Collapsed (drawable): 64px icon-only rail — expand toggle at the TOP (replaces the workspace mark), search icon button in the search slot (opens ⌘K), Layout=Collapsed items, footer avatar (account + workspace menus).",
  spec:[["Level", "Organism · composes: workspace-switcher, search-input, sidebar-item, sidebar-group-label, sidebar-footer"], ["State", "Expanded · Collapsed"], ["Tokens", "sidebar/*"]],
  dos:["Pure white + hairline divider", "Group beyond ~6 items", "Counts only where actionable"], donts:["Gray-tinted sidebar", "Two group levels", "Extending the accent beyond the one active item (hover/rest stay gray)", "Buttons between nav items"],
  code:"<Sidebar sections activeRoute user workspace />" },
{ tier:"Organism", slug:"app-shell", name:"App shell", lede:"Template root every product screen lives in: 256 Sidebar + 56h topbar (text-sm secondary breadcrumb left, ≤3 utility 20px icons right, hairline bottom) + Content with 24px gutters (32 wide; tables full-bleed). Entirely flat. Deliberately bound to SEMANTIC tokens (template chrome, not a themeable component).",
  spec:[["Level", "Organism · composes: sidebar, icon"], ["Tokens", "background/default · border/default (semantic by design)"], ["A11y", "nav/header/main landmarks · skip-to-content first in tab order"]],
  dos:[], donts:["Second sidebar level (rail) in T1", "Shadowed topbar", "Page titles in the topbar (they belong to content, display-xs)"],
  code:"<AppShell sidebar topbar> {page} </AppShell>" },
{ tier:"Organism", slug:"chart-container", name:"Chart container", lede:"The chart card: card tokens, radius-lg, flat. Header = md Semi Bold title + Legend top-right; the chart slot is FILL-width so hosted charts stretch. Swap bodies per use: Line · Bar · Pie (donut) · Radar · Area · Sparkline. Loading = Skeleton rect; empty = Empty state; error = inline Alert.",
  spec:[["Level", "Organism · composes: legend, line-chart, bar-chart, pie-chart, radar-chart, area-chart, sparkline, chart-tooltip"], ["Tokens", "card/* · chart/*"]],
  dos:[], donts:[],
  code:"<ChartCard title> <LineChart series/> </ChartCard>" },
{ tier:"Organism", slug:"line-chart", name:"Line chart", lede:"RESPONSIVE body (stretches to its card): 2px rounded series strokes (chart/series-1/2), horizontal dotted chart/grid gridlines only, unboxed axes with 11px chart/axis labels in a space-between row. Stretch is horizontal-only — same contract as the responsive Recharts wrapper.",
  spec:[["Level", "Organism · tokens only"], ["Tokens", "chart/series-1..4 · chart/grid · chart/axis"]],
  dos:["Violet-600 leads as series 1", "Horizontal gridlines only, dotted"], donts:["Boxed plot areas or vertical gridlines", "&gt;4 series without aggregating"],
  code:"get_labs_v2_component_spec(\"line-chart\")" },
{ tier:"Organism", slug:"bar-chart", name:"Bar chart", lede:"RESPONSIVE grouped bars: 20w bars, 3px top radius, chart/series-1/2 pairs in a bottom-aligned space-between row (gaps grow with width), dotted gridlines.",
  spec:[["Level", "Organism · tokens only"], ["Tokens", "chart/series-1..4 · chart/grid · chart/axis"]],
  dos:[], donts:["Truncated y-axis (start at zero)"],
  code:"get_labs_v2_component_spec(\"bar-chart\")" },
{ tier:"Organism", slug:"pie-chart", name:"Pie chart", lede:"Untitled UI-style donut: 58% inner radius, contiguous slices (no gaps), largest first from 12 o'clock, right-side dot legend. MONOCHROME ordered ramp chart/mono-1..6 (rose 600→100); fewer slices pick spaced steps for contrast. Fixed aspect — instances center, never stretch.",
  spec:[["Level", "Organism · tokens only"], ["Slices", "2 · 3 · 4 · 5 · 6"], ["Tokens", "chart/mono-1..6"]],
  dos:["≤6 slices", "Merge &lt;5% into 'Other'", "Always pair with the legend"], donts:["Multicolor slices — the donut ramp is monochrome rose", "Solid pie in Figma (innerRadius is a code parameter)"],
  code:"get_labs_v2_component_spec(\"pie-chart\")" },
{ tier:"Organism", slug:"radar-chart", name:"Radar chart", lede:"Untitled UI-style radar, 1–3 series on a whisper-light chart/grid-soft heptagon (fainter than line/bar gridlines) with muted value-tick pill chips up the top axis and secondary day labels. Series 1 = chart/mono-1 stroke over chart/mono-5 fill (55% solo / 30% overlaid); Series 2 = chart/accent-pink, Series 3 = chart/accent-blue, both 16% fills. Fixed aspect — center, never stretch.",
  spec:[["Level", "Organism · tokens only"], ["Series", "1 · 2 · 3"], ["Tokens", "chart/mono-1 · chart/mono-5 · chart/accent-pink · chart/accent-blue · chart/grid-soft"]],
  dos:["3–8 axes sharing a comparable scale", "≤3 series"], donts:["Incomparable axis scales (use grouped bars)", "More than 3 overlaid series"],
  code:"get_labs_v2_component_spec(\"radar-chart\")" },
{ tier:"Organism", slug:"sparkline", name:"Sparkline", lede:"Inline trend miniature: 96×32, one 2px rounded polyline on chart/mono-1 rose — no axes, gridlines or dots. SCALE constraints preserve the shape when stretched. Lives in KPI tiles and table cells for 30-day movement; color never changes per trend — the Delta chip carries good/bad. Production surface: coded Recharts wrapper.",
  spec:[["Level", "Organism · tokens only"], ["Trend", "Up · Down"], ["Tokens", "chart/mono-1"], ["A11y", "aria-hidden decoration beside the real numbers (KPI value + Delta)"]],
  dos:[], donts:[],
  code:"<Sparkline data/>" },
{ tier:"Organism", slug:"area-chart", name:"Area chart", lede:"Volume twin of the Line chart: identical responsive grid grammar (dotted chart/grid hairlines, unboxed axes, 11px Regular axis labels (chart-grammar exception — lighter than text-2xs Medium; owned by the Recharts wrapper in production), STRETCH gridlines + SCALE series) with each 2px series stroke over a 12% same-hue closed area fill (chart/series-1/2). Use when filled magnitude matters (revenue volume, cumulative signups); &gt;2-series stacking is code-side. Hosted by Chart container. Production surface: coded Recharts wrapper.",
  spec:[["Level", "Organism · tokens only"], ["Tokens", "chart/grid · chart/axis · chart/series-1 · chart/series-2"], ["A11y", "Charts pair with a data table or summary for screen readers (dataviz audit pending)"]],
  dos:[], donts:[],
  code:"<ChartCard title><AreaChart series/></ChartCard>" },
{ tier:"Organism", slug:"command-palette", name:"Command palette", lede:"The ⌘K surface: 560px overlay at 20vh over the ink scrim — command/bg, radius-xl, 1px command/border, shadow/overlay. Search row (16px icon + text-sm query + esc Kbd, hairline below) · grouped Menu-item results under text-2xs command/section-fg labels (Navigation · Actions · Records, ~7 rows then scroll, first row pre-selected) · footer Kbd hints (↑↓ · ↵ · esc, hairline above). Fuzzy-matches commands, navigation and records. Opened from the sidebar search or ⌘K anywhere.",
  spec:[["Level", "Organism · composes: icon, kbd, menu-item"], ["Props", "query (text, default Type a command or search…)"], ["Tokens", "command/bg · command/border · command/section-fg · command/radius · menu/* · kbd/*"], ["A11y", "cmdk combobox: focus trap, aria-activedescendant on ↑↓, results aria-live, esc returns focus to the trigger"]],
  dos:["Shortcut column wherever one exists", "Groups by frequency: Navigation, Actions, Records", "Return focus on close"], donts:["More than ~7 visible rows before scroll", "Destructive commands without danger styling", "Palette as the only path to a feature"],
  code:"<CommandPalette groups results onRun>" },
{ tier:"Organism", slug:"timeline-item", name:"Timeline item", lede:"One activity event: 24px marker (Avatar for people · timeline/dot-bg circle + 12px icon for system events · 8px dot for minor ones) over a 2px timeline/line connector that stretches to the next marker (hidden on the last item), beside actor (text-sm-medium on timeline/title-fg) + action (text-sm on timeline/body-fg) + time (text-xs on timeline/time-fg). Consumed by Activity feed.",
  spec:[["Level", "Organism · composes: avatar, icon"], ["Marker", "Avatar · Icon · Dot"], ["Props", "actor (text) · action (text) · time (text) · connector (boolean, default true)"], ["Tokens", "timeline/line · timeline/dot-bg · timeline/dot-fg · timeline/title-fg · timeline/body-fg · timeline/time-fg"], ["A11y", "Reads as a sentence; full datetime in aria-label"]],
  dos:[], donts:[],
  code:"(internal — rendered by <ActivityFeed>)" },
{ tier:"Organism", slug:"activity-feed", name:"Activity feed", lede:"Chronological event stream for record-detail panes and audit views: Timeline items stacked flush (their bottom padding sets the rhythm), newest first, connector hidden on the last item. Past ~10 items group under sticky day headers and lazy-load (code-side). Markers by event kind, never decoration.",
  spec:[["Level", "Organism · composes: timeline-item"], ["Tokens", "timeline/*"], ["A11y", "ol of events; markers aria-hidden"]],
  dos:["Write events as sentences (who did what)", "Collapse runs of similar events"], donts:["Mixing with comment threads (separate tabs)", "Colored markers per event type", "Raw field diffs inline"],
  code:"<ActivityFeed events groupByDay?>" },
{ tier:"Organism", slug:"chat-message", name:"Chat message", lede:"One conversation turn (Sana grammar): User = right-aligned chat/user-bg bubble, radius-lg, 14×10 padding, max 320px; Assistant = NO bubble, NO mark or avatar (mark removed 2026-09-23) — fill-width plain text-sm on chat/assistant-fg + text-xs source/time meta on chat/meta-fg; Thinking = Thinking indicator alone while streaming — no mark, no avatar; blocks + operation label sit where the response text will appear. Consumed by Chat thread. UPDATES 2026-09-23: every assistant answer carries a message-actions row — copy (icon flips to a green check ~1.6s on success), thumbs up/down as a mutually exclusive aria-pressed pair, regenerate (re-runs the same question) — with a sources cluster right-aligned: overlapping 20px chips + \"N sources · HH:MM\" in text-xs tertiary.",
  spec:[["Level", "Organism · composes: icon, thinking-indicator, copy-button"], ["Role", "User · Assistant · Thinking"], ["Props", "message (text) · actions (boolean, default true) · sources (boolean, default true)"], ["Tokens", "chat/user-bg · chat/user-fg · chat/assistant-fg · chat/meta-fg · chat/radius · agent/accent"], ["A11y", "Turns are articles; role identified in the accessible name · action icons are labelled buttons (Copy answer, Good answer, Bad answer, Regenerate); feedback state announced"]],
  dos:[], donts:[],
  code:"(internal — rendered by <ChatThread>)" },
{ tier:"Organism", slug:"chat-thread", name:"Chat thread", lede:"The conversation surface: Chat messages stacked with 20px gaps on the plain canvas — no thread card, no alternating tints, a centered column — min 480, max 768 on wide viewports; the Prompt input fills the same column. While streaming the last turn is Role=Thinking, replaced as tokens arrive. Agent runs render inline as Agent activity cards between turns. Prompt input docks below; Suggestion chips above it on empty threads. Auto-scroll pins to newest unless the user scrolled up.",
  spec:[["Level", "Organism · composes: chat-message"], ["Tokens", "chat/*"], ["A11y", "role=log aria-live=polite; new assistant turns announced"]],
  dos:["Assistant turns unboxed — bubbles are user-only", "Sources under answers that used them", "Replace Thinking at first token"], donts:["Letting the column exceed 768px — readability caps the measure", "Violet assistant text (accent lives in the mark)", "Collapsing older turns mid-conversation"],
  code:"<ChatThread messages streaming?>" },
{ tier:"Organism", slug:"agent-activity-card", name:"Agent activity card", lede:"Inline agent-run record (Zapier Central grammar): agent/bg card, 1px agent/border, radius-lg — 28px zap tile on agent/icon-bg, run title (text-sm-medium, verb-first outcome) + timing (text-xs agent/meta-fg), live status corner (Thinking indicator (blocks, 16) Running · green check-circle Complete · red alert-circle Failed), then per-step rows (14px check/loader/x-circle + text-xs) that stream in. Failed shows the failing step verbatim + a sm Ghost 'Retry run'. Renders in Chat threads and activity panes; completed cards are immutable — reruns create new cards.",
  spec:[["Level", "Organism · composes: icon, thinking-indicator, button"], ["State", "Running · Complete · Failed"], ["Props", "title (text, default Enriched 3 new leads) · time (text, default Today · 14:02 · 41s)"], ["Tokens", "agent/bg · agent/border · agent/icon-bg · agent/icon-fg · agent/title-fg · agent/meta-fg · agent/radius · status/success/fg · status/error/fg"], ["A11y", "aria-busy while Running; status changes aria-live; steps are an ordered list; Retry is a real button"]],
  dos:["Name runs by outcome", "Show the failing step verbatim", "Collapse to ~5 steps, expandable"], donts:["Auto-retrying without the user", "Agent errors in toasts", "Non-agent events in this card (use Activity feed)"],
  code:"<AgentActivityCard run steps status onRetry?>" },
{ tier:"Organism", slug:"chat-history-item", name:"Chat history item", lede:"One previous-conversation row: 232×32, radius-md — text-sm title on history/title-fg truncating to one line, relative time text-xs on history/time-fg. Hover swaps the time for a 16px ellipsis menu (rename · pin · delete, a Menu instance) over the history/bg-hover wash; Active = the open chat: wash + text-sm-medium on history/title-active-fg, time visible. One Active max. Consumed by Chat history.",
  spec:[["Level", "Organism · composes: icon"], ["State", "Default · Hover · Active"], ["Props", "title (text, default Churn analysis — Q3 plans) · time (text, default 2h)"], ["Tokens", "history/title-fg · history/title-active-fg · history/bg-hover · history/time-fg · history/radius"], ["A11y", "Row is a link; active aria-current=page; row menu reachable by keyboard focus, not hover-only"]],
  dos:[], donts:[],
  code:"(internal — rendered by <ChatHistory>)" },
{ tier:"Organism", slug:"chat-history", name:"Chat history", lede:"'Previous chats' panel of the Assistant surface: a FLAT list of conversation rows, newest first, 2px gaps, no group headers and no topic folders (deliberate user decision). Sized for the 256px sidebar (232 inner); also lives in a Popover or Sheet on smaller shells. A 'New chat' Secondary button (or ⌘K) sits above; rows past ~30 lazy-load; delete confirms via the destructive Dialog. Chats auto-name from the first prompt, renameable.",
  spec:[["Level", "Organism · composes: chat-history-item"], ["Tokens", "history/*"], ["A11y", "nav aria-label='Chat history'; times carry full datetime in aria-label"]],
  dos:["Auto-name from the first prompt", "Relative times in rows", "Confirm deletes with the destructive Dialog"], donts:["Group headers or topic folders — flat list only", "Two Active rows", "Hover-only row menus"],
  code:"<ChatHistory chats onSelect onRename onDelete>" },
];


/* Curated overrides — hand-written pages for the flagship components; everything else mirrors the spec file. */
var V2_CURATED = {
  "button": {
    lede: "Four emphasis levels on the rose accent. Heights 32 / 36 / 40 with md default; labels Figtree 600 at 14; icons 16px Lucide at 2px stroke inherit the label colour.",
    spec: [["Level", "Atom · composes: icon, spinner"], ["Heights", "32 / 36 (default) / 40 — radius-md 8"], ["Label", "text-sm 14 · Figtree 600 · sentence case, verb first"], ["Primary", "rose/600 → hover rose/500 (dark) / rose/700 (light) → active rose/400 / rose/800"], ["Focus", "2px #E0528B ring, 2px offset, :focus-visible only"], ["Loading", "spinner replaces the left icon; label stays for screen readers"]],
    dos: ["One primary per view", "Pair icons only when they add meaning", "Keep loading state on the button"],
    donts: ["Two primaries side by side", "Ghost for the main CTA", "Signal magenta #F0366B as a button — ever", "Disabling without explaining why nearby"],
    code: '<Button variant="primary|secondary|ghost|destructive" size="sm|md|lg" />'
  },
  "tag": {
    lede: "Borderless tint pills — a -surface + -foreground pair per family, icon always included, every pair ≥ 4.5:1. Identical values in both modes: tags sit on cards.",
    spec: [["Level", "Atom · composes: icon"], ["Anatomy", "16px icon + Figtree 600 label, both in -foreground · full-round · no border"], ["Families", "neutral · success · warning · error · info + teal / magenta / orange expressive"], ["Contrast", "every foreground ≥ 4.5:1 on its surface"]],
    dos: ["Icon or label always — colour is never the only signal"],
    donts: ["Borders on tags", "Inventing new families — extend the token set first"],
    code: '<Tag tone="success" icon={CircleCheck}>Success</Tag>'
  },
  "kpi-tile": {
    lede: "Label, a display-sm numeral in IBM Plex Mono, and a delta pill. The numbers-only mono rule made visible.",
    spec: [["Level", "Molecule · composes: card, delta, skeleton"], ["Card", "card surface · hairline · radius-lg 12 · padding 20"], ["Numeral", "display-sm 30 · IBM Plex Mono 500 · 110% leading"], ["Delta", "status tag recipe at 12px"], ["Gaps", "label → numeral → delta: 8 (space-2)"]],
    dos: ["Mono for every digit", "One KPI per tile"],
    donts: ["Figtree numerals", "Sparklines inside the tile without an axis note"],
    code: '<KpiTile label="Events Created" value={4275190.63} delta={+0.12} />'
  },
  "field": {
    lede: "Label → input → helper with the HIG gaps baked in (8 above, 4 below). Inputs are 36h on the card surface with the gray/700 control border.",
    spec: [["Level", "Molecule · composes: label, input, helper-text"], ["Gaps", "label → input 8 · input → helper 4 · field → field 16 · section → section 32"], ["Control", "36h · radius-md · border input (gray/700 dark, gray/300 light)"], ["Focus", "border → ring colour + 3px halo at 20%"], ["Numeric values", "IBM Plex Mono"], ["Dark rule", "form controls must inherit color — UA black breaks dark mode"]],
    dos: ["Helper hugs its input (4) — closer than the next field"],
    donts: ["Placeholder as the only label", "Red helper text without the border change"],
    code: '<Field label="Amount" helper="Safe to apply" error={err}><Input /></Field>'
  },
  "tabs": {
    lede: "Underline tabs — the active item carries a 2px rose underline and the foreground colour; everything else is muted.",
    spec: [["Level", "Molecule · composes: tab-item"], ["Anatomy", "text-sm 600 · pad 10/14 · 2px underline on active"], ["States", "active foreground+rose · rest muted · hover foreground"], ["Keyboard", "arrow keys move, Home/End jump; roving tabindex"]],
    dos: ["Underline style only — no pill tabs in product UI"],
    donts: ["More than 6 tabs — use a select", "Nesting tab sets"],
    code: "<Tabs items={[...]} value={tab} onChange={setTab} />"
  },
  "menu": {
    lede: "The floating tier: popover surface, hairline border, shadow-float. Items are 32h radius-md; destructive items use the error foreground.",
    spec: [["Level", "Molecule · composes: menu-item, separator"], ["Surface", "popover + hairline + shadow-float · radius-lg · pad 6"], ["Items", "32h · radius-md · hover muted wash"], ["Enter", "fade + scale 0.98→1 · 150ms ease-out"]],
    dos: ["Destructive last, after a separator"],
    donts: ["Icons on some items but not others", "Scroll inside menus — cap at ~8 items"],
    code: "<Menu items={[...]} onSelect={fn} />"
  },
  "card": {
    lede: "Resting surfaces: hairline border always; dark cards are the elevated #18181B step (never a shadow); light cards may add the optional resting shadow.",
    spec: [["Level", "Molecule · composes: separator"], ["Radius", "lg 12 · padding 20 (16 compact)"], ["Dark", "#18181B + border gray/800 — no resting shadows in dark, ever"], ["Light", "white + hairline + optional shadow-resting"], ["Gaps", "title → body 8 · body → actions 16"]],
    dos: ["Max one nested panel level"],
    donts: ["Boxes-in-boxes", "Shadow instead of a border"],
    code: "<Card title>…</Card>"
  },
  "alert": {
    lede: "Soft-tint inline panels per status family — icon, 600 title, regular body, all in the family foreground.",
    spec: [["Level", "Molecule · composes: icon"], ["Anatomy", "icon 16 + title 600 + body · radius 10 · pad 14/16"], ["Tint", "status -surface; all text in -foreground"], ["Placement", "inline, above the content it describes"]],
    dos: ["One alert per concern"],
    donts: ["Stacking three alerts — consolidate", "Alerts for success that a toast should carry"],
    code: '<Alert tone="warning" title="This creates a credit">…</Alert>'
  },
  "toast": {
    lede: "Transient confirmation on the floating tier — slides up 8px, auto-dismisses, never blocks.",
    spec: [["Level", "Molecule · composes: icon, button"], ["Surface", "popover + hairline + shadow-float · radius-lg"], ["Motion", "slide-up 8px + fade · 200ms enter, 150ms exit"], ["Duration", "4s default · persistent only with an action"], ["IDs", "always IBM Plex Mono"]],
    dos: ["One action max (Undo)"],
    donts: ["Toasts for errors needing decisions — use a dialog", "Stacking more than 3"],
    code: 'toast.success("Renewal issued", { action: undo })'
  },
  "dialog": {
    lede: "The overlay tier: 480/640 widths, radius-xl, shadow-overlay on the scrim. Destructive confirms restate the object and use the destructive button.",
    spec: [["Level", "Organism · composes: button, alert"], ["Widths", "sm 480 · md 640 · padding 24 · radius-xl 16"], ["Scrim", "ink/40% light · black/60% dark"], ["Gaps", "content → footer 24 · buttons 8, right-aligned"], ["Focus", "trapped; returned on close; Esc cancels"]],
    dos: ["Verb-first confirm labels (“Apply allocation”, never “OK”)"],
    donts: ["Nesting dialogs", "Destructive confirm with a primary-rose button — use destructive red"],
    code: '<Dialog title size="sm" footer={…} />'
  },
  "empty-state": {
    lede: "A 24px icon, an 18px title, one sentence of help, one action. Lives where the content would be — never a dialog.",
    spec: [["Level", "Molecule · composes: icon, button"], ["Anatomy", "icon 24 (in a 44 tile) · title text-lg · body text-sm muted · one action"], ["Gaps", "icon → title 12 · title → body 6 · body → action 16"]],
    dos: ["Say what the thing is for, not just that it’s empty"],
    donts: ["Illustrations that fight the quiet chrome", "Two actions"],
    code: "<EmptyState icon={Plus} title action />"
  },
  "table": {
    lede: "The flagship, Maze-style: the data region lives in a rounded clipped table-card; muted uppercase header band with a sort icon per column; 56px rows; mono numerals; quiet pagination footer.",
    spec: [["Level", "Organism · composes: table-header-cell, table-cell, filter-bar, pagination, tag, checkbox"], ["Card", "radius 10 · hairline · card bg · clipped corners"], ["Header", "40–42h muted band · UPPERCASE +6% · sort icon per column"], ["Rows", "56 default · 40 comfortable · 36 compact · hairline dividers, no zebra"], ["Status", "pills or plain coloured text — one style per table"], ["Numerals", "IBM Plex Mono, right-aligned"], ["Footer", "“Showing 1 – N · Page X”"]],
    dos: ["Filter chips above the card, left-aligned", "‘—’ muted for empty cells"],
    donts: ["Zebra striping", "Mixing pill and text status in one column", "Semantic header icons — the sort glyph only"],
    code: '<Table columns rows density="default" selectable />'
  }
};

var LABS_V2_COMPONENTS = V2_GEN.map(function (c) {
  var o = V2_CURATED[c.slug] || {};
  return Object.assign({}, c, o, { tier: c.tier, slug: c.slug, name: c.name, demo: V2_DEMOS[c.slug] || "" });
});
