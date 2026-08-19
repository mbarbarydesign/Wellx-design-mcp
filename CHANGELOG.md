# Changelog — Wellx Unified Design System

Semver: **patch** = token value change · **minor** = new token/component/rule · **major** = rename or removal (requires migration note).

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
