---
name: wellx-design-system
description: Wellx Unified Design System — MANDATORY before building or restyling any UI in a Wellx tool. Thin pointer: core rules inline, full spec via the wellx-design-system MCP server.
---

# Wellx Unified Design System — pointer skill

**Primary source: the `wellx-design-system` MCP server.** Before building UI, call `get_principles`, then `get_rules(<topic>)` for the area you're touching, `get_component_spec(<name>)` for recipes, and `get_tokens(...)` for values. Run `validate(code)` on your output before finishing. If the server is unavailable, the ten rules below keep you safe; do not guess beyond them.

**Two brand systems live on the server** — the **Wellx design system** (these rules) and the **Wellx Labs design system** (`labs-*` topics: spectral identity, Figtree, `--wl-*` tokens). If the user hasn't said which library their product uses, **ask them first**, offering exactly those two names as the options — never assume.

**Default theme is light** in both systems: build and present UIs in light mode unless the user asks for dark. Dark is an explicit opt-in (`.dark` class in the portal, `data-theme="dark"` in Labs) — define its token twins, don't ship it as the default.

**Audit before presenting.** Every UI you build passes the design audit gate before you present or hand it over: call `get_audit_checklist` (or read `spec/audit.md`), walk every category, and lead with the verdict — `Not ready — N blockers open` / `Ready with warnings` / `Passed`. A design with open Blockers is not done.

## The ten rules (offline fallback)
1. Never hardcode hex. Import `@wellx/design-tokens` (CSS vars + Tailwind preset); brand is tenant-injected.
2. Flat surfaces: 1px `border` hairlines define panels — shadows only on dialogs, drawers, toasts, auth.
3. Monochrome chrome: nav/menus/hovers are gray; active nav = gray pill. Accent (Brand/500 violet) only on primary buttons, links, active tab underline, focus rings, chart lines, active filter pills.
4. Type: Manrope (Alexandria for Arabic). Body 14–16, page titles 24/32 Bold −2%, micro-labels 11px caps +8%. All numbers tabular.
5. Radius: cards/dialogs 16 · buttons 12 · inputs 8 · nav pill 10 · pills/avatars full.
6. Status/priority pills: 50-tint bg + 700 text + 500 dot (dark 900/300). Tone maps are fixed — never invent status colors.
7. Tables: default two-line rows ~76px, caps header on Gray/50 band, radius-16 container, no checkboxes; 52px compact variant.
8. Forms: 40px inputs, labels above, validate on blur, error = Error/500 border + message; forms cap at 768px.
9. Content inside tabs caps at 1440px centered on big screens.
10. RTL: logical utilities only (`ps-*`, `border-e`, `start-*`); Lucide icons 18px stroke 1.75; icon-only buttons need `aria-label`.
