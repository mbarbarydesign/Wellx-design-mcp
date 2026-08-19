# Wellx Labs — Brand architecture & lockup

Wellx Labs is the AI-native operating core for ambitious insurers. Visual mood: quiet power,
confidence, motion, control, ambition, trust — "insurance infrastructure becoming alive."

**Scope note for agents:** the `labs-*` topics describe the **Wellx Labs** brand system
(spectral identity, Figtree, dark chrome, `--wl-*` tokens). It is a separate system from the
Wellx portal design system (violet accent, Manrope, `--wx-*` tokens) described by the other
topics. Never mix the two in one product.

## Architecture — one masterbrand, one descriptor layer
Wellx Labs is not a second identity. It is the Wellx masterbrand plus a technical descriptor.
Everything Labs-specific lives in the descriptor chip, the mono typography, and the glow
environment — never in the mark or wordmark themselves.
- **The bionic mark is fixed.** Never redraw, recolor, outline, rotate, or animate its geometry.
- **The wellx wordmark is fixed.** Never retypeset it, change its case, or alter letterspacing.
- **Labs is always the chip.** IBM Plex Mono 500, tracked caps, gradient dot, hairline border.
  Never set "Labs" in the wordmark's typeface.
- **The spectrum gradient is identity, not decoration.** It appears only in the divider, the
  dot, and glow fields.

## Lockup — clear space, minimum size, misuse
Arrangement: **bionic mark → wordmark → spectrum divider → LABS chip.** One horizontal
arrangement, two color modes (dark / light).
- **Clear space:** minimum clear space on all sides equals the height of the LABS chip.
  Nothing enters this zone — including the glow of neighboring elements.
- **Minimum size:** full lockup 180px wide on screen / 45mm in print. Below that, drop to
  mark + chip, then mark alone (favicon contexts).
- **Never:** no gradient fills in the wordmark · no chip without the dot · no stacking the
  chip above the wordmark · no color mark on the dark chip variant.
- **File to use:** ship the PNG lockup (`wellx-labs-lockup-{light,dark}.png`) in product/web —
  it is self-contained. The `.svg` is editable source only (it references sibling PNGs and
  shows blank gaps as a plain `<img src>`).
- Assets in this repo: `docs/assets/labs/` (lockups, bionic mark, icon tile).

## Sub-brand pattern — products inside Labs
A product inside Labs (Care Connect, Command Center) keeps the **full Labs lockup unchanged**
and adds its name as a **product descriptor beneath**, set in the spectrum gradient
(`background-clip:text`, Figtree 800), preceded by a short spectrum tick. The bionic mark,
wordmark and LABS chip never change. Products run the light theme; each may carry its own
action accent (Care Connect = rose, Command Center = purple `#6A2BD8` light / `#9B6DFF` dark)
while `--wl-signal` and the spectrum stay shared.
