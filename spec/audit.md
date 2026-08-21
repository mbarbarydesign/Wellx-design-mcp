# Design audit — the mandatory quality gate

The standing quality gate every piece of Wellx UI passes **before it is presented or handed
over** — agent-built UIs included. Run it automatically after building any prototype, mockup,
screen, flow, or UI copy; do not wait to be asked. The prototype is the contract with
development; this gate makes sure that contract is complete.

## How to run it

1. Walk **every category below in order**. For each item decide pass / fail / not applicable.
2. For any fail, name exactly **what fails, where, and the fix**. Vague ticks defeat the purpose.
3. Report the verdict first: `Not ready — N blockers open` / `Ready with warnings` / `Passed`.
   Then open blockers, then warnings, then polish — each as *what + where + fix*. Skip items
   that pass; do not pad the report.
4. **Never present a design as final, or hand it over, while any Blocker is open.** Fix it
   first, or surface it clearly and stop.

## Severity

- **Blocker** — ships broken, breaks RTL, or leaks the Wellx brand into a whitelabel. Any open blocker fails the audit.
- **Warning** — a quality or consistency miss. Resolve or justify.
- **Polish** — raises the bar. Resolve where time allows.

## Copy and tone rules (most-violated — check first)

- Sentence case in UI copy; Title Case only for feature names.
- No exclamation marks. No em dashes. No arrows in body copy (they break RTL — use words).
- "Log in", not "login" or "sign in". British spelling throughout.
- No gamification language; progress framed as personal, not competitive.
- Brand terminology: "Mental wellness" not "wellbeing" · "Al Rajhi Takaful" · "breathing exercise" not "session".
- Benefit-led over feature-led: say what the person gets, not what the system does.

## The checklist

### Brand and tokens
- **Blocker**: Uses the correct brand token set for this product. No colours, type, or radius borrowed from another product.
- **Blocker**: No Wellx brand visible to end users in whitelabel builds. No logo, name, wordmark, or signature colour.
- **Warning**: No hardcoded hex values outside the token system.
- **Warning**: Typeface matches the product spec.
- **Warning**: Icon set correct for the product (Tabler on HayatX).
- **Polish**: Card radius and spacing follow the token scale.

### Themes and dark mode
- **Blocker**: Design delivered in both light and dark themes. Every screen has both. (Light is the default presentation; dark must still exist and work.)
- **Blocker**: Contrast holds in dark mode, both languages.
- **Warning**: Colours resolve to dark-theme tokens. No hardcoded light values that break when the theme flips.
- **Warning**: Illustrations, icons, and images legible on dark surfaces. No white-boxed assets or invisible line art.
- **Polish**: Elevation, shadows, and dividers adapted for dark.

### Copy and tone
- **Blocker**: Sentence case in UI copy. Title Case only for feature names.
- **Blocker**: No exclamation marks.
- **Blocker**: No em dashes.
- **Blocker**: No arrows in body copy.
- **Warning**: "Log in", not "login" or "sign in".
- **Warning**: British spelling.
- **Warning**: No gamification language.
- **Warning**: Progress framed as personal, not competitive.
- **Warning**: Brand terminology correct.
- **Polish**: Benefit-led over feature-led.

### Localisation and RTL
- **Blocker**: Full Arabic parity. Every string translated, nothing left in English.
- **Blocker**: Layout mirrors correctly in RTL. Alignment, order, nav, and back behaviour all flipped.
- **Warning**: Directional icons mirrored in RTL.
- **Warning**: Numbers and dates render correctly for the locale.
- **Warning**: No text clips or overflows in Arabic.
- **Polish**: Line height accommodates Arabic diacritics.

### Completeness: no missing content or screens
- **Blocker**: Every screen the flow references actually exists. No CTA, tab, or link points at a screen that was never designed.
- **Blocker**: No placeholder, lorem, or TODO copy remains. Every string is final.
- **Blocker**: No missing content in any slot. Every label, value, image, avatar, and icon is filled or has a defined empty state.
- **Warning**: Every CTA and link leads to a defined destination. No dead ends.
- **Warning**: The user can always navigate back. No trap screens.
- **Warning**: Both language versions are complete. No screen in one language only.

### States and edge cases
- **Blocker**: Every state has written copy, not just visuals.
- **Blocker**: Empty state designed for every list, feed, and card.
- **Blocker**: Error state designed. Says what went wrong and how to fix it, in the product voice, no apology.
- **Blocker**: Edge cases made explicit for the handoff reviewer in the prototype.
- **Warning**: Loading and skeleton states defined.
- **Warning**: Success and confirmation state designed.
- **Warning**: Disabled and read-only states defined.
- **Warning**: Permission-denied and no-access state defined.
- **Warning**: Long-string and truncation behaviour defined.
- **Warning**: Zero, max, and overflow values handled.
- **Warning**: Offline and no-data path considered.
- **Polish**: First-run vs returning user handled.

### Composition and system
- **Warning**: Reuses shared components over bespoke builds.
- **Warning**: Variation driven by theme and config, not one-off design.
- **Warning**: Spacing and grid consistent with the system.
- **Warning**: Matches existing patterns for similar flows.
- **Polish**: No detached or orphaned components.

### Accessibility and usability
- **Blocker**: Text contrast meets WCAG AA, both themes, both languages.
- **Warning**: Touch targets at least 44px.
- **Warning**: Focus, pressed, and feedback states present.
- **Warning**: Meaning never conveyed by colour alone.
- **Warning**: Action label matches its result.
- **Polish**: Reading and tab order logical.
