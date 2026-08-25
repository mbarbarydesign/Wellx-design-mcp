# Wellx Labs — Brand architecture, lockup & audiences

Wellx Labs is the AI-native operating core for ambitious insurers. Visual mood: quiet power,
confidence, motion, control, ambition, trust — "insurance infrastructure becoming alive."

**Scope note for agents:** the `labs-*` topics describe the **Wellx Labs design system**
(spectral identity, Figtree, dark chrome, `--wl-*` tokens). It is a separate system from the
Wellx design system (violet accent, Manrope, `--wx-*` tokens) described by the other topics.
Never mix the two in one product. Start with labs-position for the eight laws.

## Architecture — one masterbrand, one descriptor layer
Wellx Labs is not a second identity. It is the Wellx masterbrand plus a technical descriptor.
Everything Labs-specific lives in the descriptor chip, the mono typography, and the glow
environment — never in the mark or wordmark themselves.
- **The bionic mark is fixed** (WX-M-02): never redraw, recolor, outline, rotate, or mirror.
  Ribbon width modulation is part of the drawing — never stroke it at even weight (WX-M-03).
  No shadow, bevel, emboss or added contour (WX-M-04).
- **The wellx wordmark is fixed.** Never retypeset it, change its case, or alter letterspacing.
- **Labs is always the chip.** IBM Plex Mono 500, tracked caps (0.18em), 1px border, 4px
  radius, 5px gradient dot. Never set "Labs" in the wordmark's typeface; never stacked.
- **The spectrum gradient is identity, not decoration** — divider, dot, and glow fields only.
- The system expands by registration (law 8): new products take a slot; they do not earn new
  hues, faces or marks.

## Lockup — anatomy, clear space, minimum size
Arrangement: **bionic mark → wordmark → spectrum divider → LABS chip**, left to right, always.
One arrangement, two colour modes (dark / light) — no fourth form (no tint, knockout or outline).
- Anatomy at 26px mark height: 18px spacing (scales proportionally); divider 1px wide ×
  (mark height − 2px), vertical spectrum; wordmark baseline aligns to the ribbon axis.
- **Clear space** = 1× LABS-chip height all sides, measured from the cage; neighbours' glow
  and shadow count as intrusion.
- **Minimum sizes**: full lockup 180px / 45mm · mark + chip 96px / 24mm · mark alone 28px /
  7mm · loop only 16px / 4mm. Reduce by dropping components (chip → divider → wordmark →
  ribbon), never by shrinking. Never scale non-uniformly.
- Colour modes: dark files on fields below 30% luminance (fields `#050509`→`#101119`); light
  files above (`#FFFFFF`→`#F6F7FB`). On imagery, always on a solid plate. The spectrum symbol
  (multicolour ribbon) is identity art only — never in product chrome, never in a lockup.
- Placement: top-left default (chrome, documents, decks) · top-centre splash/boot only ·
  bottom-left signature on covers/closing frames · centred-large title pages/environmental.
  Margin 2×X print, 1×X product; the lockup aligns to column one, never floats.
- **File to use:** ship the PNG lockup (`wellx-labs-lockup-{light,dark}.png`); the `.svg` is
  editable source only. Assets in `docs/assets/labs/`.

## The four audiences — same system, read from four distances
Only four things flex per product: field, accent, density, name. Accent order follows distance
from the person: warm nearest to life, cool nearest to the model.

| Audience | Field | Density | Accent | Tool | Copy stance |
|---|---|---|---|---|---|
| Member | Dark, warm | Editorial | `#F7941D` | Care Connect | Plain language; no ratios, no jargon |
| Corporate | Light, neutral | Balanced | `#F0366B` | Workforce Console | Outcomes and cost; population, not individuals |
| Insurer | Dark, structured | Operating | `#7A2BE2` | Command Center | Evidence first; confidence and provenance visible |
| Broker | Light, structured | Operating | `#2D9CFD` | Broker Desk | Position, movement, next action |

## The naming lockup (product surfaces)
On a product surface the master signature's spectrum divider becomes a **single 1px accent
rule in the audience colour**, next to the tool name in mono caps: `mark + wellx + accent rule
+ TOOL NAME` (audience label right-aligned in mono). One line, one pixel, full opacity —
everything else unchanged. The product descriptor beneath a master lockup may be set in the
spectrum gradient (never the wordmark). Action-accent ownership stays per governance: Care
Connect rose, Command Center purple (`#6A2BD8`/`#9B6DFF`).

## Adding a segment (the system expands by registration)
1. Name the reader and their distance from the risk — fixes the accent position on the spectrum.
2. Choose field and density from session length — not from taste.
3. Name the tool as a descriptor — two words, plain, no invented compound.
4. Register it; nothing else in the system is edited.
Registration: accent = next unused point on the spectrum · field dark|light · density
editorial|balanced|operating · lockup = wellx + accent rule + tool name · sound selects from
the alert family, never adds · inherits all 8 laws, all 7 principles, both token sets ·
deny: new hue, new typeface, new mark, second accent · test: does the surface still read as
wellx with the name removed?
