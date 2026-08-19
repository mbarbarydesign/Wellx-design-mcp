# Wellx Labs — Glow principle & motion

## Glow — direction, never decoration (critical)
The signal glow from the identity becomes a functional layer in product: it spotlights where
the user should go. **One glow per view, maximum.**
- It marks the single next-best action (e.g. the primary button gets
  `box-shadow: 0 0 28px rgba(61,123,253,0.5)`), the active step, or an AI-generated surface
  (glow-framed and badged with the bionic mark + "LABS COPILOT").
- On identity moments (splash, login) the glow anchors the mark instead — never both uses in
  one screen.
- Always use the token `--wl-glow`; never hand-rolled glows.
- AI-generated content is always badged with the bionic mark + "LABS COPILOT".

## Motion language
Refined, cinematic, alive — never busy. Reusable moves:
- Slow-rotating concentric orbit rings (`spin` 26–46s) around a soft radial halo (`halo`, 6s pulse).
- A drifting particle/node network in the far background = "data moving through the core".
- A flowing spine: a gradient rail with packets traveling start→end = "journeys connected".
- Scroll reveals: opacity 0→1 + translateY(30px)→0, `cubic-bezier(0.22,1,0.36,1)`, ~90ms stagger.
- Ease everything with `cubic-bezier(0.22,1,0.36,1)`; durations 0.7–0.9s.
- Respect `prefers-reduced-motion`.
