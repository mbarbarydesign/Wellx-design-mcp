# Wellx Labs — Colour, tints, contrast & charts

Per Brand Book Release 01 (WX-C-01…25). Ninety per cent of every Wellx surface is ink, paper
or neutral; the remaining ten per cent does all the work. (Labs system — `--wl-*` tokens,
not the portal `--wx-*` set.)

## The spectrum
`#F7941D` orange → `#F0366B` magenta → `#7A2BE2` violet → `#2D9CFD` blue.
- WX-C-01: stops at **0 / 35 / 68 / 100 per cent — fixed**. Never truncate, re-order or add a stop (WX-C-03).
- WX-C-02: angles — 90deg horizontal rules · 180deg dividers · 135deg fills.
- **Five permitted uses only**: 1 the lockup divider (1px vertical) · 2 the chip dot (5px, 135°) ·
  3 AI-generated surfaces (1px frame or badge) · 4 brand art / glow fields (dark environments only) ·
  5 product descriptors beneath the lockup. Anything else takes the accent colour or a neutral.

## Ink & paper (the two environments — WX-C-04/05)
Dark = brand + insurer surfaces; light = product. One per surface, never mixed.
- **Ink (dark)**: void `#050509` (covers, splash) · canvas `#07070C` · surface `#101119` ·
  raised `#191A28` · border `#262837` · border-strong `#3A3C51` · text `#F5F6FA` ·
  text-secondary `#B7BDCC` · text-muted `#7E8698`. Separation by border, never shadow.
- **Paper (light)**: canvas `#F6F7FB` · surface `#FFFFFF` · sunken `#EEF1F6` (wells, inputs,
  table heads) · border `#E4E7EE` · border-strong `#CBD1DC` · text `#0B0B12` ·
  text-secondary `#454B59` · text-muted `#868D9D` · on-accent `#FFFFFF`. Separation by shadow
  and hairline; textures at 6–12%.

## Action & signal (WX-C-06/07/08)
- **Accent (rose)**: `#C42663` action · hover `#A71E53` · active `#8C1745` · subtle `#FBE7F0`
  (selected-row tint) · accent-text `#A71E53`. Dark theme: `#FF5C86` / `#FF789B` / `#EA466F` / `#2A121E`.
  One primary action per view. *(Release 01 retires the older `#A0175E` rose and the
  "electric" `#3D7BFD` — neither exists in the system any more.)*
- **Signal magenta `#F0366B`** — AI and identity only, identical across every product, never a button.
- **Command Center overrides** the action accent to `#6A2BD8` light / `#9B6DFF` dark; Care Connect keeps rose.

## Status (WX-C-09/10)
Light: success `#1F8A5B` · warning `#B7791F` · danger `#C4283C` · info `#2563D6`; subtle tints
`#E5F4EC` / `#FBF0D9` / `#FBE6E9` / `#E7EFFC`. Dark: `#3FD38C` / `#F0B44E` / `#FF6B7D` / `#5B9BFF`.
Status colour always accompanies a word — colour alone never carries state. Status colours
never appear as chart series.

## Tints & ratios (WX-C-11…16)
- Target ~90% ink/surface, ~8% text tones, ~2% saturated colour. **Hard ceiling: 4% saturated
  pixels** on any product surface (measure it: screenshot and count). Marketing glow fields may
  reach 15%, dark environments only.
- Tint scale: **seven steps only — 06 · 12 · 24 · 40 · 60 · 80 · 100**. Row/badge tints use
  step 06 on light, 12 on dark. Never tint a status colour below 06. A selected row is a 6%
  tint, not a coloured row.

## Contrast & accessibility (WX-C-17/18)
WCAG **2.2 AA floor** on every product surface: 4.5:1 body, 3:1 large; muted grey only above
19px or 600 weight. Colour never carries meaning alone (a red row without the word "declined"
is a defect). Focus ring **2px at 45% accent, offset 2px** — never removed. Hit targets 44px
minimum on touch. prefers-reduced-motion renders every animation as its final frame, thinking
state included. Marketing meets AA for body; display type over glow fields exempt above 40px.

## Denials (WX-C-19…22) & the glow (WX-C-23…25)
No spectrum on data (charts have their own palette) · no spectrum on body text or headings
below 40px · no spectrum on chrome (buttons, headers, sidebars, tab bars, cards) · no new hues,
ever ("not for a campaign, not for a season").
Glow: **0 0 22–26px at 45% of the accent — never spectrum-coloured**. One glow per view,
counted at the route level, not the component. Never decorative, never on hover alone.

## Data visualisation (WX-I-07…15)
Charts get their own palette, assigned in order: chart-1 `#2E6BE6` · 2 `#00A88F` · 3 `#8A5CF6`
· 4 `#E0821A` · 5 `#0E8AA8` · 6 `#B7477A` · other `#9AA1B0`. Single-series charts always use
the one data blue `#2E6BE6`, never the action colour. Status series reuse semantic tokens and
nothing else. Axis ticks, legends and values are always IBM Plex Mono. No gradient fill, no
drop shadow, no 3D, no donut with a figure in the hole. Axes start at zero or the truncation
is stated on the chart. Any machine-produced figure shows its confidence and its source. A
series is never identified by colour alone. The gradient is identity; a chart is evidence —
they never overlap.
