# Wellx Labs — Typography

Figtree speaks, Plex Mono measures. Two typefaces only. (Wellx Labs system — the portal
system uses Manrope/Alexandria instead; never mix.)

- **Figtree** — display, headings, UI copy. Weights 400/600/700/800 (marketing may use 900).
  Tight tracking above 24px (−0.5px). Closest open match to the wordmark's geometry — never
  used to typeset "wellx".
- **IBM Plex Mono** — eyebrows, IDs, data, labels, the LABS chip. Weights 400/500. Caps labels
  track +2 to +5px. All claim numbers, confidence scores, and timestamps are mono.

## Type scale (tokens/wellx-labs-tokens.json → type.scale)
- display: 34px · 800 · −0.5px · line 1.1
- h1: 24px · 800 · −0.3px · line 1.2
- h2: 18px · 700 · −0.2px · line 1.3
- body: 14px · 400 · line 1.6
- small: 12px · 400 · line 1.5
- mono-label: 10px · 500 · +2px tracking · UPPERCASE

## Load the fonts
`https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500&display=swap`
