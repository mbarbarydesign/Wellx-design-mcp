# Wellx Labs — Sound

**Status: PROPOSED · R01 CANDIDATE.** All WX-S rules except WX-S-00 are proposed — recommended
and buildable, but they do not govern until validated in production and promoted by Design.
**Canonical (WX-S-00)**: silence by default · sound carries meaning, never delight · no
punishment sounds or failure stings · sound never replaces visible information · every sound
user-controllable and accessible · restraint · a sound is a signal, not a brand impression.

The sonic identity. Key: **D minor** (no modulation). The default state of the system is
silent — sound is opt-in on every surface (WX-S-28), muted by default on web (WX-S-10).

## The sonic signature (WX-S-01…04)
1.4s, two movements: **Bloom** 0–620ms — a single sustained D3 tone, rising amplitude and
harmonic content, no pitch change; then a **descent** of three even steps **A4 → F4 → D4**
(620–1400ms, quarter notes at 92 bpm). Never trimmed, looped or extended. Plays at most once
per session, in exactly three places: cold boot of the Operating Core (synced to boot bar
100%; skipped, never truncated, if boot < 900ms), the closing lockup of a brand film/event,
and a physical installation waking (once, at 55%). Never on login, navigation, refresh or
notification (WX-S-08/09).

Pitches: D3 146.83Hz · A4 440.00 · F4 349.23 · D4 293.66. Timbre: sine fundamental + two even
harmonics at −18 and −26dB; no noise layer; reverb ≤ 400ms tail. Envelope: attack 420ms (no
transient — it appears rather than starts) · bloom 200ms · release 60ms · steps 160/160/400ms.
Loudness: signature −16 LUFS, peak −3 dBFS; 48kHz/24-bit master; deliver WAV + AAC 256 +
Opus 96; mono fold-down safe, no stereo widening (WX-S-05/06/07).

## The alert family (WX-S-11…13)
Five alerts, all derived from the descent, never the bloom — all at −20 LUFS:
- **Notify** D4, 180ms · **Notify·high** A4+D4, 300ms (SLA breach, escalation)
- **Arrive** F4→D4, 340ms (document/quote/report landed) · **Confirm** D4 bloomed, 420ms
- **Dismiss** D4 at −9dB, 120ms
Status: **Success** F4→D4 warm, 340ms (bound/paid/approved) · **Warning** A4 twice, 90ms apart,
280ms · **Error** A4→A♭4 semitone fall, 240ms — the only interval outside D minor in the system.
No sixth alert without a registered entry; never a new pitch (WX-S-11/12).

## Rules & denials (WX-S-14…22)
Sound never replaces a visible message · no repeats or loops (a missed alert is not re-sounded)
· two events within 400ms play once at the higher priority · error at most once per user action
· no sound on hover, focus, scroll, keystroke or page transition · no melodic error tones ·
no sound-as-personality (whooshes, pops, clicks, "delightful" flourishes) · no third-party
sound sets · no sound in a table (row-level events are silent).

## Ambient bed (WX-S-23/24) — Command Center only
D1 36.71Hz fundamental with D2 and A2 at −22dB; low-pass sweep 400–1200Hz on a 180s cycle;
−38 LUFS; 8-minute seamless loop with no identifiable landmark ("a listener should be unable
to hum it after an hour"). Off by default; never on member/corporate/broker surfaces; ducks
6dB for 2s under any alert.

## Haptics (WX-S-25…27)
Fixed pairings, fire whether or not sound is enabled: notify = light 10ms · notify·high =
medium ×2 90ms apart · arrive = soft 14ms · confirm = light-then-medium 60ms apart · warning =
rigid ×2 110ms apart · error = rigid 18ms · dismiss = tick 6ms · signature = never haptic.
Never on scroll, hover, keyboard or passive state change; honour the OS haptic setting absolutely.

## Voice & hold (telephony / IVR)
Answer: no music — 2s of room tone, then the human; greeting one sentence, no signature.
Hold: the ambient bed at −30 LUFS with the descent every 45s at −24 LUFS — no message loop,
no music, no advertising. Transfer: F4→D4, then silence. IVR: spoken options only — no tone
per option, no keypress confirmation. Voicemail: the signature once at 40%, before the
recorded message. Voice: one recorded voice per language, neutral, no upward inflection.
TTS: one named voice per language, fixed, at 0.95 rate.

## Silence (WX-S-28/29)
Sound is forbidden in: every table and list, all navigation, all input, charts and dashboards
(a threshold crossing may raise a notification, which sounds once), shared/public displays
(silent unless a person stands at them), and **after 22:00 local** per user timezone.
"A surface that cannot be silenced by one control is a defect."

## Segments & levels (WX-S-30…33)
Sound flexes on exactly two axes — level and density; never pitch, timbre or melody.
Member: confirm, arrive, error; haptics carry most events; ceiling −22 LUFS. Corporate:
notify, confirm, arrive (report/export completions only); −20. Insurer: full family + ambient
bed; escalation via notify·high; −18. Broker: notify, notify·high, arrive ("movement in the
book sounds, positions do not"); −20. Segments select from the family, never add. All 13
sonic assets are held by Design; no team produces its own sound.
