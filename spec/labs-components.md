# Wellx Labs — Components & implementation rules

Core components exist in both themes and are built only from the semantic tokens
(`tokens/wellx-labs-tokens.json`). Default = light; `data-theme="dark"` flips.

## Component recipes
- **Primary button**: `--wl-accent` fill, `--wl-text-on-accent` text, radius md (9px), height 36px,
  Figtree 600 13px. Hover `--wl-accent-hover`, active `--wl-accent-active`. The ONE next-best
  action per view may carry `--wl-glow`.
- **Secondary button**: transparent fill, 1px `--wl-border-strong` border, `--wl-text-primary` text.
- **Link**: `--wl-accent`, Figtree 600.
- **Command/search input**: height 36px, radius md, `--wl-surface` fill, 1px `--wl-border`,
  placeholder `--wl-text-muted`. Focus = `--wl-focus-ring`, always visible.
- **Status tags**: mono caps (IBM Plex Mono 500, ~9.5px, +1.5px tracking), pill radius,
  subtle-tint background + strong text: APPROVED = success/successSubtle · IN REVIEW =
  warning/warningSubtle · FLAGGED = danger/dangerSubtle.
- **Entity card** (claim/policy): `--wl-surface` on 1px `--wl-border`, radius lg (14px);
  title Figtree 700 14px; the ID line is always mono caps muted (e.g. `MOTOR · 0.94 CONF`).
- **AI block (Copilot)**: framed with a signal-tinted border + `--wl-glow`, badged
  "◆ LABS COPILOT" in mono caps with the spectrum gradient clipped to text. AI output is
  always visually distinct from system-of-record data.

## Implementation rules (the contract)
1. Load the tokens once, globally. Never hard-code hex — reference `var(--wl-*)`.
2. **Accent = action.** Primary buttons, active nav, selected rows use `--wl-accent`.
   Secondary actions are bordered/neutral.
3. **Spectrum + `--wl-signal` are identity & AI only** — Copilot spark, AI-generated blocks,
   brand art. Never on data, charts, chrome, or body text.
4. **Glow = direction, one per view** (`--wl-glow`) — the single next-best action or active
   AI surface. Never decorative.
5. **Icons** inherit currentColor — `--wl-text-secondary` at rest, `--wl-accent` active.
6. **Textures** — one per view, 6–12% presence, theme-matched set.
7. **Type** — Figtree for UI/display, IBM Plex Mono for IDs, data, timestamps, labels.
   Never retypeset the wordmark; "Labs" is always the mono chip.
8. **Radius & elevation** come from tokens (`--wl-radius-*`, `--wl-shadow-*`). Dark theme
   uses borders over shadows for separation.
9. **Focus** is always `--wl-focus-ring` — visible, never removed.

## Deployment formats
Demo splash 1440×900 · event backdrop 1920×1080 · OG 1200×630 · LinkedIn banner 1584×396 ·
avatar 400 · icon tile 360 · favicon 64. Marketing surfaces run dark; the product runs light.

## Delivered files
In this repo: `docs/assets/labs/` (lockups, bionic mark, icon tile, 69 icons, 12 textures) ·
`tokens/wellx-labs-tokens.json`. Full kit source: the `wellx-brand-kit` folder (brand guide,
logo masters, lockups, social, brand art, designs, handoff kits).
