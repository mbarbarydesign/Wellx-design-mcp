# Wellx Labs — Color, tokens & charts

Dark chrome, spectral identity. (Wellx Labs system — `--wl-*` tokens, not the portal `--wx-*` set.)

## Ratio & scope
- In product: **~90% ink/surface, ~8% text tones, ~2% spectrum.**
- The spectrum gradient never colors data visualizations, table values, or body text — it
  marks **identity and state only**: `linear-gradient(100deg,#F7941D,#F0366B,#7A2BE2,#2D9CFD)`.

## Core palette
Ink 950 `#07070C` · Ink 900 `#0B0B12` · Surface `#171827` · Text `#F5F6FA` · Muted `#98A0B3`
· Electric `#3D7BFD` · Rose `#A0175E` · Magenta `#F0366B` · Violet `#7A2BE2` · Blue `#2D9CFD`.

## Accents
- Masterbrand accent is a two-step **rose**: `--wl-accent` (`#C42663` light / `#FF5C86` dark)
  for actions, hot magenta `--wl-signal` (`#F0366B`, both themes) reserved for AI/identity.
- Electric `#3D7BFD` is the secondary accent for informational / AI-linked controls.
- **Command Center overrides the action accent to purple** (`#6A2BD8` light / `#9B6DFF` dark);
  Care Connect keeps rose. `--wl-signal` stays identical across products.

## Semantic tokens (source of truth — tokens/wellx-labs-tokens.json)
Build against role names, never raw hex. Default theme = light; set `data-theme="dark"` on
`<html>` to flip. Key roles (light / dark):
- canvas `#F6F7FB` / `#07070C` · surface `#FFFFFF` / `#101119` · surfaceRaised `#FFFFFF` / `#191A28`
  · surfaceSunken `#EEF1F6` / `#0B0B12`
- border `#E4E7EE` / `#262837` · borderStrong `#CBD1DC` / `#3A3C51`
- textPrimary `#0B0B12` / `#F5F6FA` · textSecondary `#454B59` / `#B7BDCC` · textMuted `#868D9D` / `#7E8698`
- accent `#C42663` / `#FF5C86` · accentHover `#A71E53` / `#FF789B` · accentActive `#8C1745` / `#EA466F`
  · accentSubtle `#FBE7F0` / `#2A121E`
- success `#1F8A5B` / `#3FD38C` · warning `#B7791F` / `#F0B44E` · danger `#C4283C` / `#FF6B7D`
  · info `#2563D6` / `#5B9BFF` (each with a *Subtle twin)
- focusRing `rgba(240,54,107,0.45)` / `rgba(255,92,134,0.50)`
- radius: xs 4 · sm 6 · md 9 · lg 14 · pill 999
- shadow sm/md/lg per theme; glow `0 0 22px rgba(196,38,99,.45)` light / `0 0 24px rgba(255,92,134,.45)` dark.
  Dark theme prefers borders over shadows for separation.

## Two environments
- **Dark = brand & marketing** — splash, backdrops, social, decks, hero. Full spectrum + glow.
- **Light = core product** — the live app. Icons adapt via currentColor; light texture set at
  6–12% strength.

## Data visualization — charts get their own palette
The spectrum gradient and hot signal magenta are identity + AI only. Data viz uses a dedicated
categorical palette (`--wl-chart-1…6` + `--wl-chart-other`), assigned in order. Single-series
charts use ONE data blue (`--wl-chart-series` `#2E6BE6`), never the action color. Status series
reuse the semantic tokens. Axis ticks, legends and values are always IBM Plex Mono.
