# Wellx Labs V2 Design System — Foundations Spec

**Date:** 2026-09-18 · **Status:** Approved section-by-section in brainstorming; this document consolidates the locked decisions.
**Figma:** file `qUAr2DSU9Mofp7e3rzpCHf` ("Wellx-Labs-Design-System"), pages `V2 · Foundations · *` (Color & Tokens 119:2 · Type 123:2 · Spacing & Shape 127:3 · Elevation, Focus & Motion 130:2 · Iconography 134:2).

## 1. Scope & intent

A fresh, standalone design system for universal SaaS tools and dashboards. It ignores both existing Wellx systems (portal `--wx-*` and Labs v1 `--wl-*`); they remain untouched, and migration is a later decision. It lives in this repo and reuses the proven plumbing (MCP server pattern, token build scripts, docs site, Vercel deploy) with all-new content.

- **Architecture:** brand-neutral token core; **Wellx Labs is the default theme**. Re-theming for another brand = remapping the semantic layer only.
- **Surfaces (4):** MCP rules/recipes for agents · npm token package (CSS variables + Tailwind v4 `@theme`) · React component library (shadcn/Radix conventions) · Figma library.
- **Primary consumer:** AI agents, with **strict** prescriptive recipes and hard validation.
- **Pattern coverage:** data-dense dashboards, CRUD/admin tools, AI/chat interfaces, marketing pages.
- **Modes:** light + dark fully specified; **DARK is the system default** (decided 2026-10-20; `:root` carries the elevated dark theme) and `data-theme="light"` opts into the light twin.
- **Proving ground / acceptance:** a reference dashboard built purely from the system; separately, an agent pointed at the MCP must generate a correct screen unaided.

**Aesthetic DNA (from user inspo):** Attio shell + tables (with a **pure white sidebar** — user override), Cal.com Insights charts, finance-modal overlays/buttons/alerts, borderless tint-pill tags (reference-matched), near-black dark mode. Gap-fills adopted from Mobbin: Attio settings for forms, Sana AI for chat, Zapier Central for agent activity. Marketing-page references: none yet (deferred).

## 2. Token architecture

Three layers, strictly one-directional:

1. **Primitives** — raw ramps (`gray.0–950`, `violet.50–950`, status hues). Private; never referenced by components or agents.
2. **Semantics** — the only public API. Flat role names following the **wx portal convention**: `background, card, popover, muted, muted-soft, foreground, text-secondary, text-tertiary, muted-foreground, border, border-secondary, input, primary, primary-hover, primary-active, primary-foreground, link, ring, accent, accent-foreground, destructive, destructive-foreground, success, warning, error, info` (+ status trios, §4). `info` is an addition beyond the wx set.
3. **Modes** — every semantic token has a light + dark twin.

Token **prefix: TBD** (the portal owns `--wx-`; this system needs its own).

## 3. Color

**Accent: `#C42663` (rose-600), colored primaries throughout** — the original Labs rose, restored 2026-10-20, superseding the interim violet `#7A2BE2` era. History kept honest: the 2026-09 audit flagged rose’s tritanopia proximity to danger red and violet won that round; the brand restoration re-accepted rose **with the trade-off recorded and mitigated** (status is never color-alone — see rules). White-on-accent = **5.52:1** (hover `#A71E53` 7.11, active `#8C1745` 9.04), background-independent. Companion: **signal magenta `#F0366B`** — AI and identity only, never a button, never body text on white (3.86:1).

**Neutrals:** gray ramp 0–950; canvas and sidebar pure white; panels `#FAFAFA` (gray-50/`muted-soft`); the hairline `border` `#E9EAEC` (gray-200) does all separation; `foreground` `#0B0B0C` (gray-950). Dark (revised 2026-09-23 — **elevated surfaces**): canvas `#0B0B0C`, component surfaces (`card`, and the muted tiers above it) at `#18181B` — one perceptible step above the canvas — border `#303136`. Rationale: the dark hairline measures ~1.3:1 against the canvas and cannot be the sole separation cue; the surface step makes grouping redundant (surface + border), mirroring the original dark inspo. Full-bleed tables and shell chrome stay on the canvas. (Supersedes the earlier `card #151518` / `border #26272B` values.)

**Violet ramp rules (hard, MCP-validated):**
- `primary` keeps #C42663 in **both** modes (white label passes everywhere; 3.56:1 vs the dark canvas clears the non-text minimum).
- Rose as *text* on dark must be rose-400+ (`#E0528B`, 5.39:1); darker rose steps are forbidden for dark text.
- `ring` = **rose-400 `#E0528B` in both modes** (3.65:1 light / 5.39:1 dark, both clear the 3:1 non-text minimum). No twin.
- Dark `link`/`primary-active` shift to violet-400; `accent` = violet-50 light / violet-950 dark.

**Status system** — two tiers per family:
- **Base accents** (solid fills, icons, chart deltas on white): success `#16A34A` · warning `#D97706` · error/destructive `#DC2626` · info `#2563EB`.
- **Tag/alert trios** (`-surface` + `-foreground`, **no border** — borderless tint pills per the user's reference): Neutral `#EFF0F2`/`#565962` (6.14:1) · Success `#E2FAE9`/`#15803D` (4.56:1) · Warning `#FBEFC9`/`#92610A` (4.65:1) · Error `#FDDFDD`/`#B91C1C` (5.17:1) · Info `#DBE7FE`/`#1D4ED8` (5.38:1). Extended expressive hues (revisit later): teal `#D3F7F5`/`#0F766E` · magenta `#F9DCFC`/`#A21CAF` · orange `#FFEDE5`/`#C2410C`. Every pair ≥4.5:1; tag anatomy = icon + semibold label, both in `-foreground`, fully-round pill.
- Status color is **never the sole signal** — always paired with icon or label (CVD-safe).

Dark status hues are provisional pending their own audit. Dataviz categorical palette (violet-led) gets its own audited sub-project.

## 4. Typography

**Figtree + IBM Plex Mono (restored 2026-10-20, superseding the interim Inter-only era).** Figtree carries display, headings and UI copy — weights **400/600/700/800 only** (no 300, 500 or 900; the former Medium roles use 600), never italic, never used to typeset "wellx". **IBM Plex Mono (400/500) is for NUMBERS ONLY** — money, IDs, ratios, confidence values, timestamps, chart axes; never running copy, headings or non-numeric labels; `display-sm` (KPI numerals) is the mono style and digit alignment is inherent to mono (the old Inter `tnum` rule is retired). Self-host both.

**Arabic (decided 2026-09-21):** the Latin face has zero Arabic coverage (cmap-verified). Companion face: **Noto Sans Arabic** (variable 100–900), in the stack as `Figtree, "Noto Sans Arabic", sans-serif` (Figtree, like Inter before it, has zero Arabic coverage) — per-glyph fallback keeps Latin in Figtree; Arabic must never reach OS fallback fonts. **RTL leading rule: every line-height gains +20 percentage points in Arabic/RTL contexts** (text 120→140%, lg/xl 115→135%, display-sm 110→130%) via `[dir="rtl"]` token twins — the 100–120% cap is a Latin-only rule. RTL mirroring rules and Arabic type QA remain a deferred workstream.

- **Weights: Figtree 400 / 600 / 700 / 800 only.** No 300, 500 or 900 (the former Medium roles collapsed to 600); 700/800 are marketing display weights; never italic.
- **Scale (names and sizes mirror wx; line heights in PERCENT, constrained 100–120% by user decision 2026-09-18):** `text-2xs` 11 · 120% (micro labels) · `text-xs` 12 · 120% (captions; the floor, muted only) · **`text-sm` 14 · 120% — default UI** (tables, nav, inputs, buttons, forms; = wx base size) · `text-md` 16 · 120% (card/dialog titles, large reading) · `text-lg` 18 · 115% · `text-xl` 20 · 115% (section titles) · `display-xs` 24 · 120% (page titles) · `display-sm` 30 · 110% (KPI numerals in **IBM Plex Mono Medium** — deliberately tighter than the other display steps) · `display-md` 36 · 120% · `display-lg` 48 · 120% (marketing; larger steps deferred). Long-form paragraphs may locally raise leading, but tokens ship the 100–120% ramp. (Display line heights user-tuned in Figma 2026-09-18; pulled into `tokens/labs-v2-tokens.json`, served by MCP `get_labs_v2_tokens`.)
- **Tracking:** 0 to 20px · −1% at 24–30 · −1.5% at 36+. **No uppercase anywhere in the scale** (user removed the overline variant).
- **Numerals:** ALL numerals render in IBM Plex Mono (400/500) — digit alignment is inherent to mono and the old `tnum` rule is retired; slashed zero for IDs/codes.

## 5. Spacing, radius, density

- **4px grid — absolute.** Scale: `space-1..16` = 4, 8, 12, 16, 20, 24, 32, 40, 48, 64.
- **Pair-wise gaps (HIG-informed; proximity rule: related ≥2× closer than unrelated):** icon↔label 8 · title↔subtitle 4 · input↔helper 4 · label→input 8 · field→field 16 · form section→section 32 · button↔button 8 · dialog content→footer 24 · card title→body 8 · body→actions 16 · page title→content 24 · section title→content 16 · section→section 40 · cell padding-x 16 · min column gap 24 · sidebar item↔item 4, group↔group 24.
- **Radius:** sm 6 (checkboxes, swatches) · md 8 (buttons, inputs, menu items) · lg 12 (cards, KPI tiles, popovers) · xl 16 (dialogs, sheets) · full (pills, tags, avatars).
- **Controls:** heights 32 / **36 default** / 40. Table rows: **40 default**, 36 compact (density is a mode, not per-screen), 48 relaxed; header/footer rows 36.
- **Shell:** sidebar 256 fixed, pure white, hairline divider · topbar 56 · content gutters 24 (32 dashboards), tables full-bleed to the gutter · sidebar items 32 high, radius-md, icon 16 · dialogs max-width 480/640, padding 24.
- **Content max-width (added 2026-09-23): 1440px, always, centered on bigger screens** — the main content column (after the sidebar) and marketing pages alike never stretch past 1440; below the cap content is fluid; gutters and full-bleed-to-gutter tables apply inside the cap. Token: `layout.contentMaxWidth`.
- **Hit targets:** ≥24×24 pointer (WCAG 2.5.8); 40px+ for touch surfaces.

## 6. Elevation, focus, motion

- **Elevation, two tiers only (Attio-flat):** Tier 0 resting = hairline border; in LIGHT mode an **optional `shadow-resting`** (0 1 2 ink/6% + 0 3 8 ink/5%, added 2026-10-20) may lift cards/tiles — always with the border; in dark mode resting component surfaces additionally sit on the elevated `card` tone (§3) — a surface step, still never a shadow. Tier 1 floating = `shadow-float` (0 4 16 ink/8% + 0 1 2 ink/5%) for menus/popovers/tooltips/command bar; `shadow-overlay` (0 16 40 ink/12%) for dialogs/sheets; always paired with the hairline border. Scrim ink/40% light, black/60% dark (convention-derived, no inspo reference; open to calibration).
- **Focus:** ring 2px `ring` (#E0528B) with 2px offset on `:focus-visible` — keyboard and assistive-tech navigation ONLY; mouse and touch clicks never show the ring (styling bare `:focus` is a violation); inputs get ring-colored border + 3px spread halo at 20%; flush rows get an inset 2px ring. The ring is never removed, only restyled — `outline:none` without replacement is an agent validation error. Dialogs trap and return focus. Container-carried input focus (search fields, composer shells using `:focus-within`) renders under keyboard/AT modality only — pointer focus shows the caret alone; the inner control's own outline is suppressed only because the container carries the replacement (decided 2026-09-23). Hard rule: form controls must inherit `color` — the UA default is black and breaks dark mode.
- **Motion:** durations fast 100 / base 150 / slow 200 / **max 300 (hard product-UI ceiling)**; ease-out enter, ease-in exit (exits faster), ease-in-out move. Canonical patterns: tooltip fade 100; popover fade+scale 0.98→1, 150; dialog fade+scale 0.96→1, 200, scrim fades with it; toast slide-up 8px, 200; collapse height+opacity 200. Hard rules: motion = state-change feedback only; transform+opacity only; `prefers-reduced-motion` → instant; nothing loops except progress.

## 7. Iconography

**Lucide** (ISC; shadcn's default set — the vocabulary agents already know; matches the inspo's thin-stroke outline DNA — the tag reference's icons exist in Lucide by name).

- **Stroke 2px absolute at every size** (Lucide default weight, held absolute — at 16px = viewBox stroke 3; changed from 1.5px on 2026-10-20).
- **Sizes:** 16 default (inline, tags, tables, inputs, sidebar) · 20 (icon-only buttons, topbar) · 24 (empty states, feature spots). Nothing else.
- **Color:** always `currentColor`; status icons inherit `-foreground`. Filled variants unused in v1.
- Custom icons: 24-grid, 2px stroke, rounded caps/joins, optical-weight-checked against three Lucide neighbors.

## 8. Sub-project decomposition

1. **Token package + MCP content** (next): mint primitives/semantics/modes as CSS variables + Tailwind v4 preset under the new namespace; port the hard rules into MCP `get_rules`/`validate`; audit dark status hues and the dataviz palette.
2. **Core components:** shadcn/Radix-convention library styled by the tokens.
3. **Patterns & recipes:** strict MCP recipes for the four pattern families.
4. **Reference dashboard:** the acceptance test; also the living example.
5. **Figma library:** foundations variables/styles + components (the current V2 pages are documentation boards, not yet a library).

## 9. Deferred / open

- Token prefix + system name.
- Form controls beyond text inputs; empty/loading states; toasts (component phase).
- Dark-mode dataviz palette + dark status-hue audit.
- Tag extended hues revisit; marketing-page references; RTL mirroring rules + Arabic type QA (companion face and leading are decided, §4).
- Scrim calibration against a real Attio/Linear dialog (user queried the ink/40% choice; it stands as convention pending calibration).
- List/menu focus sample presentation (gray-100 keyboard highlight vs plain white) — cosmetic, board-only.

## 10. Acceptance criteria

1. Every color pair shipped in tokens passes its stated WCAG threshold (4.5:1 text, 3:1 non-text); the audit numbers in §3 are re-verified by script in the token build.
2. `npm` package exposes only semantic tokens; primitives are not importable.
3. MCP `validate` rejects: violet-600 text on dark, removed focus outlines, shadows on resting surfaces, off-grid spacing, non-Lucide icons, wrong icon stroke weight, status color without icon/label.
4. The reference dashboard renders correctly in both modes using only semantic tokens and system components.
