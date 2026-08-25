# Wellx Labs — Interface: components, density & applications

Core components exist in both themes, built only from the semantic tokens
(`tokens/wellx-labs-tokens.json`). Default = light; `data-theme="dark"` flips.

## Interface laws (WX-I-01…06)
1. **One primary action per view.** Everything else is bordered or plain.
2. Radius from the scale only: **4 · 6 · 9 · 14 · 999**.
3. **Light separates with shadow; dark separates with border. Never both.**
4. **AI surfaces carry a 1px spectrum frame and a confidence figure. No frame without a figure.**
5. A surface picks one density and holds it — no mixed density in one route.
6. Focus ring 2px at 45% accent, offset 2px. Never removed.

## Component recipes
- **Primary button**: `--wl-accent` fill, white text, radius md (9px), height 36px, Figtree 600
  13–14px. Hover `--wl-accent-hover`, active `--wl-accent-active`. The ONE next-best action per
  view may carry `--wl-glow`.
- **Secondary button**: transparent, 1px `--wl-border-strong`, `--wl-text-primary` text.
  **Text button**: plain, accent-coloured. **Disabled**: neutral grey.
- **Status tags**: mono caps (IBM Plex Mono 500, ~9.5px, tracked), pill radius, subtle-tint
  background + strong text, always with a word: BOUND=success · PENDING=warning ·
  DECLINED=danger · IN REVIEW=info.
- **Input**: sunken field (`--wl-surface-sunken`), mono for identifier values; focus = white
  field + 2px accent ring.
- **Entity card** (claim/policy): `--wl-surface` on 1px `--wl-border`, radius lg (14px); title
  Figtree 700 14px; ID line always mono caps muted (e.g. `MOTOR · 0.94 CONF`).
- **AI surface**: 1px spectrum-gradient frame + `--wl-glow`, spark icon + mono header with the
  confidence figure (e.g. `✦ SUGGESTED · 0.91`), fact-first body, one action. AI output is
  always visually distinct from system-of-record data, and always shows provenance.

## Density (choose from session length)
Editorial 32px rhythm / 56px rows / 19px copy — member surfaces, marketing. Balanced 24/44/16
— corporate and broker. Operating 16/36/14 — insurer console, claims queues. Rows never below 32px.

## The four audiences & naming (see labs-brand for the register)
Member (dark warm, editorial, `#F7941D`, Care Connect) · Corporate (light neutral, balanced,
`#F0366B`, Workforce Console) · Insurer (dark structured, operating, `#7A2BE2`, Command Center)
· Broker (light structured, operating, `#2D9CFD`, Broker Desk).

## Applications (WX-A-01…34, summary)
- **Letterhead**: A4, 20mm margins, lockup 40mm top-left, watermark loop 5% bleeding off the
  lower-right, uncoated 120gsm, single colour black. **Card**: 85×55mm, ink front / paper
  reverse with the mark alone at 22mm on the ribbon axis.
- **Deck**: 1920×1080, 96px margin, 12-col grid 24px gutter; title slides dark with one
  texture, content slides light, never mixed within a section; min type 24px, titles 60–96px;
  one spectrum rule per deck section. **Document**: A4, 22mm margins, body 11pt Figtree 1.55;
  wordmark only in the running head; all figures mono; footer = classification + page number,
  never a tagline.
- **Signage**: lockup once per space at eye height (1.5m to mark centre); room names in mono
  caps with the loop glyph; crest as 12mm wayfinding line; backdrops one texture anchored low,
  lockup bottom-left; glazing = 16-unit tile at 40% frost. No branded floor vinyl,
  step-and-repeat, or pull-up banners.
- **Social**: square 1080, OG 1200×630, LinkedIn 1584×396; wordmark only on posts, full lockup
  on banners and OG; dark posts carry one texture, light posts none.
- **Advertising**: one sentence, one number, one action; figures real, sourced and dated; no
  stock photography; lockup bottom-left on a solid plate; legal in mono 8pt+ at 60% ink. No
  handshakes/lawns/models-pointing-at-screens; no superlatives; no scarcity framing; no emoji.
- **Merchandise**: objects a person would own anyway; single colour, mark only (stickers are
  the one item permitted the spectrum symbol); no stress balls, fidget toys or branded sweets.
- **The book** ("The Possibility Within" pattern — companion artifact, not governing):
  297×210mm landscape spreads; dark spectral cover with a Figtree Extrabold question + mono
  metadata line; the eight laws as edge marginalia indexed at the close; the System Manual
  governs wherever the book and it disagree.
- **Co-branding**: endorsement (Wellx leads, partner follows at equal cap height after a
  hairline) · partnership (equal weight, hairline separator, alphabetical order) · powered-by
  (partner leads; Wellx wordmark only, preceded by "Powered by" in mono). Separator 1px
  hairline at 20% ink; clear space between marks 2×X — the partner never enters ours; **the
  LABS chip is dropped in every co-branded lockup**; never place a partner mark inside the
  loop or lock the two marks into one shape.
