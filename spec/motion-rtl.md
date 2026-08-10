# Motion & RTL

## Motion
- Micro-interactions (hover, fades): 150ms ease-out · Layout shifts (sidebar, drawers): 200ms ease-out
- Dialogs: 200ms fade + scale from 0.98 — no springs, no bounces
- Animate ONLY transform, opacity, colors — never content-container dimensions (sidebar excepted)
- prefers-reduced-motion: disable shimmer, pulses, and non-essential transitions
- Live/urgent dots may pulse (2s) — the only ambient animation allowed

## RTL & localization
- `document.dir` flips per locale; shared components use LOGICAL utilities only (`ps-*`, `pe-*`, `start-*`, `end-*`, `border-e`, `text-start`) — never `pl-*`, `left-*`, `border-r`
- Arabic uses Alexandria (display + body); Latin numerals stay tabular
- Directional icons mirror (chevrons, arrows, panel toggles); charts, media controls, and phone numbers do not
- Dates localize; IDs and codes (REF-100234) never do
- Test every screen in both directions before handoff
