/* Wellx Unified Design System — docs site data.
   To ship an update: add an entry to WHATS_NEW (newest first) and bump VERSION.
   Token values mirror tokens/wellx-tokens.json — regenerate together. */

var VERSION = "2.10.0";

/* The MCP server's own maturity — independent of the design-system content
   version above. Mirrors MCP_VERSION in mcp/create-server.mjs. */
var MCP_VERSION = "1.0.0-beta";

var WHATS_NEW = [
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
  slug: "architecture", num: "01", name: "Brand architecture",
  lede: "One masterbrand, one descriptor layer. Wellx Labs is not a second identity — it is the Wellx masterbrand plus a technical descriptor. Everything Labs-specific lives in the descriptor chip, the mono typography, and the glow environment — never in the mark or wordmark themselves.",
  body:
    '<section class="doc"><div class="labs-dark" style="display:flex;align-items:center;justify-content:center;padding:44px 24px">' +
    '<img src="assets/labs/wellx-labs-lockup-dark.png" alt="Wellx Labs lockup" style="width:280px;max-width:80%"></div></section>' +
    '<section class="doc"><h2>The four fixed points</h2><div class="labs-rule-grid">' +
    '<div class="card"><h3>The bionic mark is fixed</h3><p>Never redraw, recolor, outline, rotate, or animate its geometry.</p></div>' +
    '<div class="card"><h3>The wordmark is fixed</h3><p>Never retypeset it, change its case, or alter letterspacing.</p></div>' +
    '<div class="card"><h3>Labs is always the chip</h3><p>IBM Plex Mono 500, tracked caps, gradient dot, hairline border. Never set “Labs” in the wordmark’s typeface.</p></div>' +
    '<div class="card"><h3>The spectrum is identity, not decoration</h3><p>It appears only in the divider, the dot, and glow fields.</p></div>' +
    '</div></section>'
},
{
  slug: "lockup", num: "02", name: "The Labs lockup",
  lede: "Bionic mark → wordmark → spectrum divider → LABS chip. One horizontal arrangement, two color modes.",
  body:
    '<section class="doc"><h2>Two color modes</h2><div class="labs-pair">' +
    '<div class="labs-dark" style="display:flex;align-items:center;justify-content:center;padding:36px 20px"><img src="assets/labs/wellx-labs-lockup-dark.png" alt="Lockup on dark" style="width:240px;max-width:85%"></div>' +
    '<div class="labs-light" style="display:flex;align-items:center;justify-content:center;padding:36px 20px"><img src="assets/labs/wellx-labs-lockup-light.png" alt="Lockup on light" style="width:240px;max-width:85%"></div>' +
    '</div></section>' +
    '<section class="doc"><h2>Rules</h2><div class="spec-grid">' +
    '<div class="spec-item"><span>Clear space</span><span>= the height of the LABS chip, all sides. Nothing enters this zone — including the glow of neighboring elements.</span></div>' +
    '<div class="spec-item"><span>Minimum size</span><span>Full lockup 180px wide on screen / 45mm in print. Below that: mark + chip, then mark alone (favicons).</span></div>' +
    '<div class="spec-item"><span>File to ship</span><span>Use the PNG lockup in product/web (self-contained). The SVG is editable source only — it references sibling PNGs and shows gaps as a plain img src.</span></div>' +
    '</div></section>' +
    '<section class="doc"><h2>Never</h2><div class="card dd dont"><ul>' +
    '<li>No gradient fills in the wordmark</li><li>No chip without the dot</li>' +
    '<li>No stacking the chip above the wordmark</li><li>No color mark on the dark chip variant</li>' +
    '</ul></div></section>'
},
{
  slug: "color", num: "03", name: "Color",
  lede: "Dark chrome, spectral identity. Ratio in product: ~90% ink/surface, ~8% text tones, ~2% spectrum. The spectrum gradient never colors data visualizations, table values, or body text — it marks identity and state only.",
  body:
    '<section class="doc"><h2>Core palette</h2><div class="labs-swatches">' +
    [["INK 950","#07070C","#fff"],["INK 900","#0B0B12","#fff"],["SURFACE","#171827","#fff"],["TEXT","#F5F6FA","#0B0B12"],["MUTED","#98A0B3","#0B0B12"],["ELECTRIC","#3D7BFD","#fff"],["ROSE","#A0175E","#fff"],["MAGENTA","#F0366B","#fff"],["VIOLET","#7A2BE2","#fff"],["BLUE","#2D9CFD","#fff"]].map(function(s){
      return '<div class="labs-swatch" style="background:' + s[1] + ';color:' + s[2] + (s[1]==="#F5F6FA"?';border:1px solid var(--border)':'') + '"><b>' + s[0] + '</b><span>' + s[1] + '</span></div>';
    }).join("") + '</div>' +
    '<div class="labs-spectrum-bar" style="background:' + LABS_SPECTRUM + '"><span>SPECTRUM · 4-STOP · #F7941D → #F0366B → #7A2BE2 → #2D9CFD</span></div></section>' +
    '<section class="doc"><h2>Accents</h2><p class="hint">Rose <code>#A0175E</code> is the live masterbrand accent — it drives primary buttons and active nav. Electric <code>#3D7BFD</code> is the secondary accent for informational / AI-linked controls. Hot magenta <code>--wl-signal #F0366B</code> is reserved for AI and identity, identical across products. Command Center overrides the action accent to purple (<code>#6A2BD8</code> light / <code>#9B6DFF</code> dark); Care Connect keeps rose.</p></section>' +
    '<section class="doc"><h2>Two environments</h2><div class="labs-pair">' +
    '<div class="labs-dark" style="padding:22px"><span class="wl-eyebrow" style="color:#98A0B3">DARK — BRAND &amp; MARKETING</span><p style="margin:8px 0 0;font-size:13px;line-height:1.7;color:#B7BDCC">Splash, backdrops, social, decks, hero moments. Full spectrum + glow.</p></div>' +
    '<div class="labs-light" style="padding:22px"><span class="wl-eyebrow" style="color:#868D9D">LIGHT — CORE PRODUCT</span><p style="margin:8px 0 0;font-size:13px;line-height:1.7;color:#454B59">The live app runs light. Icons adapt via currentColor; light texture set at 6–12% strength.</p></div>' +
    '</div></section>' +
    '<section class="doc"><h2>Data visualization</h2><p class="hint">Charts get their own palette. The spectrum and signal magenta are identity + AI only — data viz uses a dedicated categorical palette (<code>--wl-chart-1…6</code>), assigned in order. Single-series charts use one data blue <code>#2E6BE6</code>, never the action color. Axis ticks, legends and values are always IBM Plex Mono.</p></section>'
},
{
  slug: "typography", num: "04", name: "Typography",
  lede: "Figtree speaks, Plex Mono measures. Two typefaces only.",
  body:
    '<section class="doc"><div class="labs-pair">' +
    '<div class="labs-light" style="padding:24px"><span class="wl-eyebrow" style="color:#868D9D">FIGTREE</span>' +
    '<div style="font-family:Figtree,sans-serif;font-weight:800;font-size:30px;letter-spacing:-0.5px;color:#0B0B12;margin-top:10px">Insurance infrastructure becoming alive.</div>' +
    '<p style="margin:10px 0 0;font-size:13px;line-height:1.7;color:#454B59">Display, headings, UI copy. Weights 400 / 600 / 700 / 800. Tight tracking above 24px (−0.5px). Closest open match to the wordmark’s geometry — never used to typeset “wellx”.</p></div>' +
    '<div class="labs-dark" style="padding:24px"><span class="wl-eyebrow" style="color:#98A0B3">IBM PLEX MONO</span>' +
    '<div style="font-family:\'IBM Plex Mono\',monospace;font-size:15px;color:#F5F6FA;margin-top:12px;line-height:1.9">CLM-08841 · MOTOR<br>0.94 CONF · 14:02:51 GST</div>' +
    '<p style="margin:10px 0 0;font-size:13px;line-height:1.7;color:#B7BDCC">IDs, data, labels, the LABS chip. Weights 400 / 500. Caps labels track +2 to +5px. All claim numbers, confidence scores, and timestamps are mono.</p></div>' +
    '</div></section>' +
    '<section class="doc"><h2>Load the fonts</h2><div class="codeblock"><button class="copy-btn" data-copy>Copy</button><pre>&lt;link href="https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&amp;family=IBM+Plex+Mono:wght@400;500&amp;display=swap" rel="stylesheet"&gt;</pre></div></section>'
},
{
  slug: "glow", num: "05", name: "Glow principle",
  lede: "Glow is direction, never decoration. The signal glow from the identity becomes a functional layer in product: it spotlights where the user should go. One glow per view, maximum.",
  body:
    '<section class="doc"><div class="labs-dark" style="padding:26px"><div class="labs-glow-grid">' +
    '<div><span class="wl-eyebrow" style="color:#98A0B3">NEXT ACTION</span><div style="margin-top:12px"><button class="wl-btn" style="box-shadow:0 0 28px rgba(61,123,253,.5)">Review now</button></div><p class="wl-cap">The one action that moves the case forward carries the glow.</p></div>' +
    '<div><span class="wl-eyebrow" style="color:#98A0B3">ACTIVE STEP</span><div style="margin-top:12px;border:1px solid rgba(255,255,255,.14);border-radius:10px;padding:10px 14px;color:#F5F6FA;font-size:13px;box-shadow:0 0 24px rgba(240,54,107,.35);display:inline-block">Underwriting assessment</div><p class="wl-cap">Glow marks where the system is working right now.</p></div>' +
    '<div><span class="wl-eyebrow" style="color:#98A0B3">AI SIGNAL</span><div style="margin-top:12px;border:1px solid rgba(240,54,107,.5);border-radius:10px;padding:12px 14px;box-shadow:0 0 22px rgba(240,54,107,.3)"><span class="wl-eyebrow" style="background:' + LABS_SPECTRUM + ';-webkit-background-clip:text;background-clip:text;color:transparent">◆ LABS COPILOT</span><div style="color:#F5F6FA;font-size:13px;margin-top:6px">Recommend fast-track approval.</div></div><p class="wl-cap">AI-generated content is glow-framed and badged with the mark.</p></div>' +
    '</div></div></section>' +
    '<section class="doc"><h2>Rules</h2><div class="spec-grid">' +
    '<div class="spec-item"><span>One glow per view</span><span>It marks the single next action, the active step, or an AI-generated surface — never more than one.</span></div>' +
    '<div class="spec-item"><span>Identity moments</span><span>On splash and login the glow anchors the mark instead — never both uses in one screen.</span></div>' +
    '<div class="spec-item"><span>Token</span><span>Use <code>--wl-glow</code> (shadow.glow in tokens) — never hand-rolled box-shadows.</span></div>' +
    '</div></section>'
},
{
  slug: "icons", num: "06", name: "Iconography",
  lede: "One line system, 69 icons. 24px grid, 1.6px stroke, round caps and joins. All drawn with currentColor so a single SVG serves dark chrome and the light product.",
  body:
    '<section class="doc"><h2>The set</h2><div class="labs-icon-grid">' +
    LABS_ICONS.map(function(n){ return '<div class="labs-icon-cell" title="' + n + '"><img src="assets/labs/icons/' + n + '.svg" alt="' + n + '" width="22" height="22" loading="lazy"><span>' + n + '</span></div>'; }).join("") +
    '</div></section>' +
    '<section class="doc"><h2>Rules</h2><div class="spec-grid">' +
    '<div class="spec-item"><span>Grid &amp; stroke</span><span>24px grid · 1.6px stroke · round caps and joins.</span></div>' +
    '<div class="spec-item"><span>Color</span><span>Icons inherit currentColor: <code>--wl-text-secondary</code> at rest, <code>--wl-accent</code> when active.</span></div>' +
    '<div class="spec-item"><span>Exceptions</span><span>Only AI &amp; status icons carry color — the Copilot spark is the spectrum gradient; states use the fixed semantic set.</span></div>' +
    '</div></section>'
},
{
  slug: "textures", num: "07", name: "Textures",
  lede: "Spectral fields, dark & light. Six reusable backdrops for empty states, card headers, hero panels and section breaks. One texture per view; the ink/white base stays dominant (6–12% presence behind content).",
  body:
    '<section class="doc"><h2>Dark set — brand</h2><div class="labs-tex-grid">' +
    ["aurora-mesh","orbital-rings","signal-grid","wave-flow","particle-field","spectral-horizon"].map(function(n){
      return '<figure class="labs-tex"><img src="assets/labs/textures/wellx-texture-' + n + '.png" alt="' + n + '" loading="lazy"><figcaption>' + n.replace(/-/g," ").toUpperCase() + '</figcaption></figure>';
    }).join("") + '</div></section>' +
    '<section class="doc"><h2>Light set — product</h2><div class="labs-tex-grid">' +
    ["aurora-mesh","orbital-rings","signal-grid","wave-flow","particle-field","spectral-horizon"].map(function(n){
      return '<figure class="labs-tex light"><img src="assets/labs/textures/light/wellx-texture-' + n + '-light.png" alt="' + n + ' light" loading="lazy"><figcaption>' + n.replace(/-/g," ").toUpperCase() + ' · LIGHT</figcaption></figure>';
    }).join("") + '</div></section>' +
    '<section class="doc"><h2>Rules</h2><div class="spec-grid">' +
    '<div class="spec-item"><span>One per view</span><span>Never layer or tile textures; anchor them behind one zone.</span></div>' +
    '<div class="spec-item"><span>Strength</span><span>Dark set on dark theme, light set on light — at 6–12% presence behind content.</span></div>' +
    '<div class="spec-item"><span>Signature</span><span>Command Center’s backdrop is spectral horizon, anchored low so the top stays calm.</span></div>' +
    '</div></section>'
},
{
  slug: "applications", num: "08", name: "Applications",
  lede: "The system in deployment — the fixed formats every Labs surface ships in.",
  body:
    '<section class="doc"><div class="labs-pair">' +
    '<div class="labs-dark" style="display:flex;align-items:center;justify-content:center;padding:30px"><img src="assets/labs/wellx-labs-icon-tile.png" alt="Icon tile" style="width:120px;border-radius:16px"></div>' +
    '<div class="labs-dark" style="display:flex;align-items:center;justify-content:center;padding:30px"><img src="assets/labs/wellx-bionic-dark.png" alt="Bionic mark" style="width:100px"></div>' +
    '</div></section>' +
    '<section class="doc"><h2>Formats</h2><div class="spec-grid">' +
    '<div class="spec-item"><span>Demo splash</span><span>1440×900</span></div>' +
    '<div class="spec-item"><span>Event backdrop</span><span>1920×1080</span></div>' +
    '<div class="spec-item"><span>OG image</span><span>1200×630</span></div>' +
    '<div class="spec-item"><span>LinkedIn banner</span><span>1584×396</span></div>' +
    '<div class="spec-item"><span>Avatar</span><span>400×400</span></div>' +
    '<div class="spec-item"><span>Icon tile</span><span>360×360</span></div>' +
    '<div class="spec-item"><span>Favicon</span><span>64×64</span></div>' +
    '</div><p class="hint" style="margin-top:12px">Dark environment (full spectrum + glow) for all marketing surfaces; the live product runs the light theme.</p></section>'
},
{
  slug: "tokens", num: "09", name: "Semantic tokens",
  lede: "Semantic tokens are the source of truth. Build against these role names, never raw hex. Default theme is light; set data-theme=“dark” on <html> to flip. Ships as tokens.css and tokens/wellx-labs-tokens.json. Accent is a two-step rose: a calm primary for actions, hot magenta reserved for AI/identity.",
  body:
    '<section class="doc"><h2>Color roles — light / dark</h2><div class="card scroll-x"><table class="tok-table"><thead><tr><th>Token</th><th>Light</th><th>Dark</th></tr></thead><tbody>' +
    [["--wl-canvas","#F6F7FB","#07070C"],["--wl-surface","#FFFFFF","#101119"],["--wl-surface-raised","#FFFFFF","#191A28"],["--wl-surface-sunken","#EEF1F6","#0B0B12"],["--wl-border","#E4E7EE","#262837"],["--wl-text-primary","#0B0B12","#F5F6FA"],["--wl-text-secondary","#454B59","#B7BDCC"],["--wl-text-muted","#868D9D","#7E8698"],["--wl-accent (action)","#C42663","#FF5C86"],["--wl-accent-hover","#A71E53","#FF789B"],["--wl-signal (AI only)","#F0366B","#F0366B"],["--wl-success","#1F8A5B","#3FD38C"],["--wl-warning","#B7791F","#F0B44E"],["--wl-danger","#C4283C","#FF6B7D"],["--wl-info","#2563D6","#5B9BFF"]].map(function(r){
      return '<tr><td><code>' + r[0] + '</code></td><td><span class="sw-pair"><span class="sw" style="background:' + r[1] + '"></span><span class="mono">' + r[1] + '</span></span></td><td><span class="sw-pair"><span class="sw" style="background:' + r[2] + '"></span><span class="mono">' + r[2] + '</span></span></td></tr>';
    }).join("") + '</tbody></table></div></section>' +
    '<section class="doc"><h2>Shape, elevation, focus</h2><div class="spec-grid">' +
    '<div class="spec-item"><span>Radius</span><span>xs 4 · sm 6 · md 9 · lg 14 · pill 999</span></div>' +
    '<div class="spec-item"><span>Shadows</span><span>sm / md / lg per theme — dark theme prefers borders over shadows for separation.</span></div>' +
    '<div class="spec-item"><span>Glow</span><span>light 0 0 22px rgba(196,38,99,.45) · dark 0 0 24px rgba(255,92,134,.45)</span></div>' +
    '<div class="spec-item"><span>Focus ring</span><span>light rgba(240,54,107,.45) · dark rgba(255,92,134,.50) — always visible, never removed.</span></div>' +
    '</div></section>' +
    '<section class="doc"><h2>Type scale</h2><div class="spec-grid">' +
    '<div class="spec-item"><span>display</span><span>34px · 800 · −0.5px · 1.1</span></div>' +
    '<div class="spec-item"><span>h1</span><span>24px · 800 · −0.3px · 1.2</span></div>' +
    '<div class="spec-item"><span>h2</span><span>18px · 700 · −0.2px · 1.3</span></div>' +
    '<div class="spec-item"><span>body / small</span><span>14px · 1.6 / 12px · 1.5</span></div>' +
    '<div class="spec-item"><span>mono-label</span><span>10px · 500 · +2px · UPPERCASE</span></div>' +
    '</div></section>'
},
{
  slug: "components", num: "10", name: "Components",
  lede: "Core components in both themes, built only from the semantic tokens.",
  body:
    '<section class="doc"><div class="labs-pair">' +
    '<div class="labs-light" style="padding:22px;display:flex;flex-direction:column;gap:14px">' +
    '<span class="wl-eyebrow" style="color:#868D9D">LIGHT · data-theme unset</span>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button class="wl-btn" style="background:#C42663">Primary</button><button class="wl-btn ghost-l">Secondary</button><a href="javascript:void(0)" style="font-family:Figtree,sans-serif;font-size:13px;color:#C42663;font-weight:600">Link</a></div>' +
    '<input class="wl-input light" value="Search or run a command…" readonly>' +
    '<div style="display:flex;gap:6px;flex-wrap:wrap"><span class="wl-tag" style="background:#E5F4EC;color:#1F8A5B">APPROVED</span><span class="wl-tag" style="background:#FBF0D9;color:#B7791F">IN REVIEW</span><span class="wl-tag" style="background:#FBE6E9;color:#C4283C">FLAGGED</span></div>' +
    '<div style="border:1px solid #E4E7EE;border-radius:14px;padding:14px;background:#fff"><div style="font-family:Figtree,sans-serif;font-weight:700;font-size:14px;color:#0B0B12">Claim CLM-08841</div><div style="font-family:\'IBM Plex Mono\',monospace;font-size:10.5px;letter-spacing:1px;color:#868D9D;margin-top:3px">MOTOR · 0.94 CONF</div>' +
    '<div style="margin-top:10px;border:1px solid rgba(240,54,107,.35);border-radius:9px;padding:10px;box-shadow:0 0 22px rgba(196,38,99,.18)"><span class="wl-eyebrow" style="background:' + LABS_SPECTRUM + ';-webkit-background-clip:text;background-clip:text;color:transparent">◆ LABS COPILOT</span><div style="font-size:12.5px;color:#0B0B12;margin-top:4px;font-family:Figtree,sans-serif">Recommend fast-track approval.</div></div></div>' +
    '</div>' +
    '<div class="labs-dark" style="padding:22px;display:flex;flex-direction:column;gap:14px">' +
    '<span class="wl-eyebrow" style="color:#98A0B3">DARK · data-theme="dark"</span>' +
    '<div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center"><button class="wl-btn" style="background:#FF5C86;color:#1A0812">Primary</button><button class="wl-btn ghost-d">Secondary</button><a href="javascript:void(0)" style="font-family:Figtree,sans-serif;font-size:13px;color:#FF5C86;font-weight:600">Link</a></div>' +
    '<input class="wl-input dark" value="Search or run a command…" readonly>' +
    '<div style="display:flex;gap:6px;flex-wrap:wrap"><span class="wl-tag" style="background:#10231A;color:#3FD38C">APPROVED</span><span class="wl-tag" style="background:#2A2011;color:#F0B44E">IN REVIEW</span><span class="wl-tag" style="background:#2A1216;color:#FF6B7D">FLAGGED</span></div>' +
    '<div style="border:1px solid #262837;border-radius:14px;padding:14px;background:#101119"><div style="font-family:Figtree,sans-serif;font-weight:700;font-size:14px;color:#F5F6FA">Claim CLM-08841</div><div style="font-family:\'IBM Plex Mono\',monospace;font-size:10.5px;letter-spacing:1px;color:#7E8698;margin-top:3px">MOTOR · 0.94 CONF</div>' +
    '<div style="margin-top:10px;border:1px solid rgba(240,54,107,.5);border-radius:9px;padding:10px;box-shadow:0 0 24px rgba(255,92,134,.25)"><span class="wl-eyebrow" style="background:' + LABS_SPECTRUM + ';-webkit-background-clip:text;background-clip:text;color:transparent">◆ LABS COPILOT</span><div style="font-size:12.5px;color:#F5F6FA;margin-top:4px;font-family:Figtree,sans-serif">Recommend fast-track approval.</div></div></div>' +
    '</div></div></section>' +
    '<section class="doc"><h2>Sub-brand pattern — products inside Labs</h2><p class="hint">A product (Care Connect, Command Center) keeps the full Labs lockup unchanged and adds its name as a product descriptor beneath, set in the spectrum gradient (<code>background-clip:text</code>, Figtree 800), preceded by a short spectrum tick. Products run the light theme; each may carry its own action accent (Care Connect = rose, Command Center = purple) while <code>--wl-signal</code> and the spectrum stay shared.</p></section>'
},
{
  slug: "rules", num: "11", name: "Implementation rules",
  lede: "Rules for building against this system — the contract every Labs product follows.",
  body:
    '<section class="doc"><div class="card"><ol class="labs-ol">' +
    '<li>Load the tokens once, globally. Default = light; add <code>data-theme="dark"</code> on <code>&lt;html&gt;</code> to flip. Never hard-code hex — reference <code>var(--wl-*)</code>.</li>' +
    '<li><b>Accent = action.</b> Primary buttons, active nav, selected rows use <code>--wl-accent</code>. Secondary actions are bordered/neutral.</li>' +
    '<li><b>Spectrum + <code>--wl-signal</code> are identity &amp; AI only</b> — the Copilot spark, AI-generated blocks, brand art. Never on data, charts, chrome, or body text.</li>' +
    '<li><b>Glow = direction, one per view</b> (<code>--wl-glow</code>) — the single next-best action or active AI surface. Never decorative.</li>' +
    '<li><b>Icons</b> inherit currentColor — <code>--wl-text-secondary</code> at rest, <code>--wl-accent</code> when active. Status/AI icons keep their own color.</li>' +
    '<li><b>Textures</b> — dark set on dark theme, light set on light, 6–12% presence. One per view.</li>' +
    '<li><b>Type</b> — Figtree for UI/display, IBM Plex Mono for IDs, data, timestamps, labels. Never retypeset the wordmark; “Labs” is always the mono chip.</li>' +
    '<li><b>Radius &amp; elevation</b> come from tokens (<code>--wl-radius-*</code>, <code>--wl-shadow-*</code>). Dark theme uses borders over shadows for separation.</li>' +
    '<li><b>Focus</b> is always <code>--wl-focus-ring</code> — visible, never removed.</li>' +
    '</ol></div></section>' +
    '<section class="doc"><h2>For AI agents</h2><p class="hint">The MCP server carries these rules as the <code>labs-*</code> topics (<code>get_rules</code>), and the Labs token values via <code>get_labs_tokens</code>. Portal rules (violet, Manrope, flat-bordered) and Labs rules (spectral, Figtree, glow) are separate systems — never mix them in one product.</p></section>'
},
{
  slug: "files", num: "12", name: "Asset index",
  lede: "Delivered files — where everything lives.",
  body:
    '<section class="doc"><h2>In this repo</h2><div class="card"><pre class="labs-tree">docs/assets/labs/\n  wellx-labs-lockup-dark.png · wellx-labs-lockup-light.png · wellx-labs-icon-tile.png\n  wellx-bionic-dark.png · wellx-bionic-light.png\n  icons/            · 69 line icons · SVG · currentColor\n  textures/         · 6 spectral fields · dark + light/ · 1600×900 PNG\ntokens/wellx-labs-tokens.json · semantic dual-theme tokens\nspec/labs-*.md      · the rules, served by the MCP</pre></div></section>' +
    '<section class="doc"><h2>Full brand kit (source)</h2><div class="card"><pre class="labs-tree">wellx-brand-kit/\n  01-brand-guide/   · BRAND.md · BRAND-RULES.md · the printable brand book (HTML → PDF)\n  02-tokens/        · tokens.css · tokens.json\n  03-logo/          · master wellx marks — logo, symbol, bionic + wordmark (dark &amp; light)\n  04-lockups/       · wellx-labs lockup dark/light · PNG + SVG · icon tile\n  05-social/        · avatar-400 · favicon-64 · og-1200×630 · linkedin-1584×396\n  06-brand-art/     · splash-1440×900 · backdrop-1920×1080\n  07-icons/         · 69 line icons · SVG\n  08-textures/      · 6 spectral fields · dark + light\n  09-designs/       · every screen designed to date (live HTML)\n  10-handoff-kits/  · per-product developer packages</pre></div></section>'
},
];
