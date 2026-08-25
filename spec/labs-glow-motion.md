# Wellx Labs — Glow, motion & animated states

## Glow — direction, never decoration (WX-C-23…25)
The signal glow is a functional layer: it marks the single next action, the active step, or a
surface the machine generated. **One glow per view maximum, counted at the route level, not
the component.** Spec: **box-shadow 0 0 22–26px at 45% of the accent — never coloured with
the spectrum.** Never decorative, never on hover alone, never on more than one element.
AI-generated content is glow-framed and badged (see labs-components: the AI surface).
On identity moments (splash, login) the glow anchors the mark instead — never both uses in
one screen.

## Motion (WX-N-01…03)
Five durations, nothing between: **instant 0ms** (state change on a control being touched) ·
**quick 120ms** (hover, focus, tooltip, checkbox) · **standard 200ms** (panel, drawer,
dropdown, row expansion) · **deliberate 320ms** (page transition, modal, sheet) ·
**ambient 1100ms+** (the thinking state and the glow only).
Two easings, no spring/bounce/overshoot: entering `cubic-bezier(0.2, 0, 0, 1)`, exiting
`cubic-bezier(0.4, 0, 1, 1)`. **No element travels more than 24px — long journeys cross-fade.**
prefers-reduced-motion renders the final frame, always. Motion explains causality: an element
moves only to show where it came from (WX-P-05).

## Motion denials (WX-N-04…09)
No parallax (no layer moves at a different rate on scroll) · no scroll-triggered animation in
product (marketing pages may fade in once, 200ms, ≤12px translate) · rows never cascade — a
table appears at once or not at all · nothing loops indefinitely except the thinking state ·
a figure appears at its value, it never counts up · loading is a static 8% block or the
thinking state — no skeleton shimmer or sweep.

## Animated states of the mark (WX-M-52…57)
IDLE: mark at 40%, genuinely still — no ambient pulse, no shimmer. THINKING: the loop alone
rotates 1.1s linear infinite, in violet (the only moving violet in the system); the full mark
is never the spinner. RESOLVED: full ribbon fades in over 240ms cubic-bezier(0.2,0,0,1) — no
scale, no bounce. Only rotation and opacity ever animate on a fragment. One animated fragment
per view (inherits the one-signal law). Reduced motion: all three render as their final frame;
thinking becomes a static 40% loop.
