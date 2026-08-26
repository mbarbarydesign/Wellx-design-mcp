# Changelog — Wellx Unified Design System

Semver: **patch** = token value change · **minor** = new token/component/rule · **major** = rename or removal (requires migration note).

## 2.15.0 — 2026-08-25
- New MCP tool get_logo(system): returns the publicly served official logo assets (Wellx: light/dark SVG + mark cuts; Labs: lockups, bionic marks, icon tile — all verified serving from the Vercel domain) with per-system placement rules. Server instructions now require every created product/screen/document to carry the official logo via these files — never redrawn, never retypeset, never a placeholder. Documented in skill/SKILL.md and the install page.

## 2.14.0 — 2026-08-25
- Docs: new Introduction page replaces What's new as the landing/default route — implemented 1:1 from the reviewed design canvas (three-surfaces cards, the two libraries with ramp/spectrum strips, the four agent-behaviour steps; the Get-connected section was removed in review). Sidebar Overview now shows Introduction; the release history stays reachable at #/whats-new.

## 2.13.0 — 2026-08-20
- Frozen System Manual (WellxLabs_Manual_Final_v1) integrated: text-diffed against the prior edition — substantive deltas only were renumbering (WX-N-40…42 → WX-N-19…21), the six-level authority register with new level/status/owner enums, Sound reclassified proposed·design-grammar (WX-S-00 philosophy canonical), and frozen status language. Applied to spec/labs-position.md, labs-color.md, labs-sound.md and the Rules/Data-viz/Asset-index tabs.
- Companion book "The Possibility Within" (Draft03, non-governing) mined: provenance-before-confidence taxonomies added to Data visualisation + labs-color.md; the book application pattern added to Applications + labs-components.md; narrative devices added to Voice & tone + labs-voice.md; asset index lists the companion.

## 2.12.0 — 2026-08-20
- Labs updated from the System Manual (Release 01 · 2026, 133pp): new Soul & constitution tab (Brand Soul WX-L-00, Constitution WX-L-01…13 incl. the Value Loop, six-layer authority); 19 → 20 tabs.
- Position: WX-P-08, precedence rules, practitioners. Sound: Proposed · R01-candidate status (WX-S-00 canonical) + telephony/IVR/hold spec. Glow: WX-C-26…28 living-surface direction rules incl. RTL reversal. Data viz: Signal→Possibility progressions (WX-N-40…42). Rules: levels of authority + register record.
- Refinements: below-20px loop fallback, Operating Core carries no accent (Workforce Console / Broker Desk are working names), card 700gsm duplexed + 1mm spectrum edge, co-branding ordering, no error animation.
- Spec: labs-position.md carries the doctrine layer; labs-sound.md, labs-glow-motion.md, labs-color.md, labs-brand.md, labs-components.md updated to match.

## 2.11.0 — 2026-08-20
- Wellx Labs library rebuilt against the Brand Book Release 01 · 2026 (four volumes, 164 pages): 12 → 19 docs tabs.
- New tabs: Position, Fragments, Grid & spacing, Motion, Sound, Data visualisation, Voice & tone. Updated: architecture (four audiences, naming lockup, segment registration), lockup (construction, size ladder, misuse), color (ink/paper ramps, tint scale, 4% ceiling, contrast, retired #A0175E and #3D7BFD), typography (8-step scale, print minimums), glow (exact spec), icons, textures & material (loop field rename), components (interface laws, AI surface with confidence), applications (stationery/deck/document/signage/social/advertising/merch/co-branding), tokens, rules (+ governance), asset index.
- Spec: labs-position.md, labs-fragments.md, labs-sound.md, labs-voice.md added; the six existing labs topics rewritten to Release 01. Ten labs topics total.
- tokens/wellx-labs-tokens.json v1.1.0: chart palette, motion, space, grid, density, typeScale registers; get_labs_tokens enum extended.

## 2.10.2 — 2026-08-20
- The ask-which-library rule now names the options exactly: "Wellx design system" and "Wellx Labs design system" — in the MCP instructions, spec/principles.md, skill/SKILL.md, and the install page.

## 2.10.1 — 2026-08-20
- How-to-install page pared down to Claude + agents only: connector endpoint (recommended, with admin rollout note), local npx MCP, and a "What agents get" section (tools + built-in behaviours). Tokens, fonts, and Figma sections removed (still documented in the repo README).

## 2.10.0 — 2026-08-20
- Design audit gate added to the MCP: spec/audit.md (full checklist from the wellx-design-audit skill, "Caroline" generalised to "the handoff reviewer") served by a new get_audit_checklist tool and as a get_rules topic; searchable like every spec.
- Server instructions now require agents to run the audit on any UI they build before presenting it — verdict first (Not ready / Ready with warnings / Passed), no hand-off with open Blockers — alongside the existing validate() lint.
- skill/SKILL.md and the install page document the gate.

## 2.9.7 — 2026-08-20
- Default theme rule: light is the default in both brand systems — agents build and present UIs in light mode unless the user asks for dark; dark is an explicit opt-in (.dark / data-theme="dark") with token twins still required. Added to the MCP instructions, spec/color.md, and skill/SKILL.md (Labs tokens already declared light default).

## 2.9.6 — 2026-08-20
- Agent guardrail: if the user hasn't specified which brand system their product uses (Wellx portal vs Wellx Labs), the agent must ask before fetching rules or writing UI — never assume or silently default. Added to the MCP server instructions, the top of spec/principles.md (served by get_principles), and skill/SKILL.md.

## 2.9.5 — 2026-08-19
- All user-facing "v2.x" text replaced with Beta: sidebar chip (amber Beta pill), What's-new release headings (internal build in tooltip), beta note reworded, Creator export says "Wellx Unified Design System (Beta)" ($meta.version: "beta"), MCP instructions open with "(Beta)". Internal build numbers stay in CHANGELOG.md and data.js.

## 2.9.4 — 2026-08-19
- Docs: sidebar version chip shows an "MCP BETA" badge (hidden on the collapsed rail); What's-new page opens with a note explaining the content version (2.x) vs the MCP server version (1.0.0-beta, from the new MCP_VERSION value in data.js).

## 2.9.3 — 2026-08-19
- MCP server version decoupled from the design-system content version: serverInfo now reports 1.0.0-beta with title "Wellx Design System (Beta)"; the content version (2.x) is stated in the server instructions and remains available via get_changelog.

## 2.9.2 — 2026-08-19
- MCP branding: serverInfo now includes the Wellx logo mark as MCP icons metadata (512×512 PNG rendered from the mark SVG + the SVG itself), title "Wellx Design System", and websiteUrl — connector UIs that support icons display the mark.
- Docs site: favicon switched from the placeholder W tile to the real mark (SVG + 512 PNG + apple-touch-icon).

## 2.9.1 — 2026-08-19
- Install docs (site + README): the connector placeholder replaced with the live endpoint https://wellx-design-mcp.vercel.app/api/mcp (verified against production).

## 2.9.0 — 2026-08-19
- Remote MCP endpoint: api/mcp.mjs serves the full tool set over stateless Streamable HTTP on Vercel (/api/mcp) for use as a Claude custom connector — claude.ai web/mobile, desktop, and Claude Code, no local install.
- Server refactored: mcp/create-server.mjs is the single shared core; mcp/server.mjs is now a thin stdio entry. Tools/content identical across both transports.
- vercel.json: functions config bundles spec/, tokens/, CHANGELOG.md with the endpoint; dependency install re-enabled for the build.
- Install docs (site + README) lead with the connector URL; npx stays as the local fallback.

## 2.8.0 — 2026-08-19
- Docs site: sidebar collapse button following the system's sidebar spec — 64px header button (panel icon, mirrors when collapsed, RTL-aware), collapsed = 64px icon-only rail with no logo and hidden group labels/sub-menus, 200ms width transition, state persisted in localStorage.
- Collapsed-rail interactions: icon tooltips; clicking Wellx / Wellx Labs / Components from the rail expands the sidebar and opens that section. Mobile keeps the overlay drawer (collapse hidden under 860px).

## 2.7.1 — 2026-08-19
- Docs (Labs pages): added missing padding to bare cards — the four fixed-points rule grid, the implementation-rules list, and the asset-index file trees.

## 2.7.0 — 2026-08-19
- Library reorganized: docs sidebar now groups the portal system under **Wellx** (Color tokens + Components) and adds a **Wellx Labs** section.
- Wellx Labs brand system added as 12 documentation pages mirroring the brand book: architecture, lockup, color, typography, glow principle, iconography (69 icons), textures (6 spectral fields, dark + light), applications, semantic tokens, components, implementation rules, asset index.
- Labs assets committed: docs/assets/labs/ (lockups, bionic mark, icon tile, 69 icon SVGs, 12 texture PNGs).
- Labs tokens published: tokens/wellx-labs-tokens.json (semantic dual-theme --wl-* roles).
- MCP: six new labs-* topics (auto-served by get_rules/search/get_component_spec), new get_labs_tokens tool, lint now accepts Figtree/IBM Plex Mono and Labs hexes, instructions explain the two separate brand systems.

## 2.6.0 — 2026-07-27
- Toasts re-specced (from the Care Connect implementation): one card anatomy — radius-2xl 16, 20px padding, width 420, dialog shadow (0 16px 48px @16%), top-end stack (20px offset, 12px gap, dir-aware), 6s auto-dismiss, always-present 24px close button; title 15px SemiBold + description 13px muted; 20px Lucide tone icons (600, dark 400).
- New notification-toast variant: whole card is the click target (role=button, Enter/Space), click dismisses then navigates, hover muted/40; no CTA buttons.

## 2.5.0 — 2026-07-27
- Design System Creator exports a single design-system.json (guidelines markdown + all tokens, $meta.format "wellx-design-system/1"), replacing the separate design.md / tokens.css / tokens.json downloads. tokens.css is derivable from the file.

## 2.4.1 — 2026-07-27
- Sidebar logo reduced to 24px tall (was 32); minimum lockup size 24px — below that, remove it.
- Collapsed sidebar shows no logo at all: the 64px rail header keeps only the centered collapse button.

## 2.4.0 — 2026-07-27
- Logo added as a component: light/dark/mark-only SVG assets (assets/wellx-logo-*.svg), size and clear-space rules, theme-switching patterns.

## 2.3.0 — 2026-07-27
- Search & filters redefined as a standalone toolbar component, always separated from the table card (12-16px gap, never inside the table container).
- Toolbar composition extended: dropdown filter buttons (rounded-full, current-value label + chevron) and toggle filters (bordered pill with switch) join the search pill and quick chips.

## 2.2.0 — 2026-07-27
- Documentation site (docs/): dashboard layout with sidebar tabs — What's new, Color tokens, Components (14 pages with spec + how-to-use + code), How to install, Design System Creator.
- Creator generates full 25–950 brand/secondary scales from two colors and exports design.md + tokens.css + tokens.json.

## 2.1.1 — 2026-07-27
- Button hover states specified: primary→Brand/600, outline/ghost/icon→Gray/100, destructive→Error/700; 150ms ease-out background transition; destructive row added to the states matrix.
- Search input icon fixed at 14×14 (stroke 1.5); added to the icon size scale.

## 2.1.0 — 2026-07-27
- Initial unified release, extracted from the first Wellx portal and re-tokenized on the Figma "Foundations" library (Wellx mode).
- Tokens: Brand violet #5043ED scale, Untitled-UI Gray/Error/Warning/Success primitives, Semantics light/dark layer, radius scale (card 16 / button 12 / input 8), 4px spacing ladder, widths (content cap 1440).
- Type: Manrope ramp (Alexandria for Arabic).
- Components: buttons, filter bar, tabs, default table (two-line ~76px, caps header on Gray/50, no checkboxes), KPI card, dialog, avatars (neutral gray), empty states, sidebar (8 rules + nav-item states), topbar (utilities only — no search/theme), forms, feedback, states matrix, charts, motion & RTL, guardrails.
