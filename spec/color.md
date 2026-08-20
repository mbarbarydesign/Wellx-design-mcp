# Color

## Brand (tenant-injected — NEVER hardcode)
- Primary: Brand/500 `#5043ED` — actions, active states, focus rings, chart lines
- Hover/links: Brand/600 `#483CD5` (`Text/link`); dark-mode links Brand/300 `#A8A1F6`
- Secondary accent: Secondary/500 `#F63C81` (pink) — highlights, used sparingly
- Tenants re-theme via parallel Foundations libraries (Dubai Sports, Healthx, Elitex, HayatX 2.0) — same token names, different values.

## Core semantics (light → dark)
**Default theme is light.** Build and present every UI in light mode unless the user asks for dark; dark mode is an explicit opt-in via the `.dark` class on `<html>`. Always define the dark twins of the tokens you use — just never ship dark as the default.

| Token | Light | Dark | Use |
|---|---|---|---|
| backgrounds/screen-bg | #FFFFFF | Gray/950 #0A0D12 | page canvas |
| backgrounds/primary | #FFFFFF | Gray/900 #181D27 | cards & panels |
| Text/primary | Gray/950 #0A0D12 | #FFFFFF | headings & body ink |
| Text/secondary · tertiary | Gray/700 #414651 · Gray/500 #717680 | Gray/300 · Gray/400 | supporting text, labels |
| backgrounds/Active · inactive | Gray/100 #F5F5F5 · Gray/50 #FAFAFA | Gray/800 #252B37 | fills, chips, trays, hovers |
| borders/tertiary | Gray/200 #E9EAEB | Gray/700 #414651 | default hairlines |
| borders/secondary | Gray/300 #D5D7DA | Gray/600 #535862 | input borders |
| states/error · warning · success | #F04438 · #F79009 · #17B26A | same 500s | feedback |
| backgrounds/brand-light | Brand/50 #EEECFD | Brand/900 #201B5F | active pills, selected rows |

## Status & priority tone recipe (fixed across tenants and products)
Light-tint recipe: **50-tint background + 700 text + 500 dot** (dark: 900 background + 300 text).
- Status examples: Active=Brand, Pending=Warning, Overdue=Error, Done=Success
- Priority: Critical=Error, High=Warning, Medium=Grayblue, Low=Gray
- Keep the tone map centralized in ONE module per app. Do not invent new status colors.

## Gradients (Figma paint styles; accent-scope rules apply)
- brand-horizontal/vertical: Brand/400 #968EF4 → Brand/950 #100D2F (90deg / 180deg)
- secondary-horizontal/vertical: Secondary/400 #F8639A → Secondary/950 #19060D
- Always white text/icons on gradients. Featured/hero surfaces only (tier cards, promos) — never chrome, buttons, or data UI.

## Avatars
Neutral gray for all people: Gray/300 #D5D7DA fill + Gray/500 #717680 Bold 2-letter initials (dark: Gray/700 + Gray/400). Sizes: 32px default, 40px table rows (initials 10.5–12px Bold). The Teal/500→Success/700 staff gradient survives ONLY in the sidebar user block. Never shadows on avatars.
