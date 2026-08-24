# Principles — Wellx Unified Design System

> **Which system? Ask first.** This server carries two separate brand systems: the
> **Wellx design system** (these principles — violet accent, Manrope, `--wx-*` tokens)
> and the **Wellx Labs design system** (the `labs-*` topics — spectral identity,
> Figtree + IBM Plex Mono, `--wl-*` tokens). If the user has not specified which library
> their product uses, **ask them before building anything**, offering exactly those two
> names as the options — never assume or silently default to one.

1. **Flat, bordered surfaces.** Page and cards share one canvas. 1px hairlines (`borders/tertiary`, Gray/200) define panels — no card shadows, no hover lifts. Shadows survive only in dialogs, drawers, toasts, and auth cards.
2. **Monochrome chrome.** Nav, menus, and hovers use the Gray scale only. The active sidebar item is a gray pill, never a colored one. Menu/select highlights are neutral `muted`, never accent.
3. **One brand accent.** Brand violet (Brand/500 #5043ED, tenant-injected) appears ONLY on: primary buttons, links, active tab underlines, focus rings, chart lines/sparklines, and active filter pills. Never in nav chrome, menu highlights, hovers, or page backgrounds. Gradients count as accent surfaces (featured/hero only).
4. **Semantic tokens first.** Components consume the Semantics layer (Text / borders / backgrounds / states), which maps to Primitives per Light and Dark mode. Never use a primitive directly in UI code when a semantic token exists; never hardcode hex.
5. **When in doubt, match an existing pattern** — don't invent new ones.
