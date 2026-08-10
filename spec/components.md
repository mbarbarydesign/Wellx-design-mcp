# Components

## Logo
SVG only, from assets/wellx-logo-*.svg — never rebuilt as text.
- Variants: **light** (ink wordmark, for light surfaces) · **dark** (white wordmark, for Gray/900+ surfaces and gradients) · **mark only** (the gradient swoosh).
- The mark's gradients are identical in both modes and every tenant — never recolor, outline, or shadow it.
- Sizes: sidebar lockup **24px tall** · auth pages 48px. Scale by height; keep aspect ratio. Never render the lockup below 24px — remove it instead.
- **Collapsed sidebar: no logo.** The rail shows only the centered collapse button; the mark is not squeezed in.
- Clear space: at least half the mark height on all sides.
- Theme switching: <picture> with prefers-color-scheme, or two <img> tags toggled by the .dark class.

## Buttons
40px height (36px sm), radius-xl 12, 14px SemiBold label, 16px icons.
- Primary: Brand/500 fill, white text; hover Brand/600; active Brand/700
- Outline: white bg, 1px Gray/200 border, ink text, hover Gray/100
- Ghost: transparent, hover Gray/100
- Destructive: Error/600 fill (#D92D20), white text; hover Error/700 #B42318
- Icon-only: 40×40, hover Gray/100, needs aria-label + title
- All buttons transition background 150ms ease-out

## Search & filters (toolbar)
A **standalone component, always separate from the table card** — the toolbar sits above the table with a 12-16px gap and is never rendered inside the table container.
Composition:
- Muted search pill: 36px, rounded-full, Gray/100 bg, borderless, brand ring focus, 14px search icon (stroke 1.5). Grows to fill, max ~400px.
- Dropdown filter buttons: 36px, rounded-full, 1px border, 13px Medium label showing the CURRENT value ("Open", "All priorities") + 14px chevron-down; hover Gray/100.
- Toggle filter (optional): bordered pill — 16px icon + 13px label + 36x20 toggle (brand when on).
- Quick single-select chips: 32px pills for simple filters.
Applied/active filter = brand-light bg (Brand/50) + Brand/700 SemiBold text — a legitimate accent use. Search lives here, never in the topbar.

## Tabs
Row with bottom hairline; items 14px Medium Gray/500; active = ink text SemiBold + 2px Brand/500 underline. Accent on the underline only.

## Table (default)
Container: card radius-2xl 16, 1px border, clipped. The search/filter toolbar is a SEPARATE component above the card (12-16px gap) — never inside the table container. Header: 11px SemiBold UPPERCASE +7% tracking Gray/500 on a **Gray/50 band**. Rows: two-line ~76px — 40px neutral avatar, name 15px SemiBold + ID line 13px Gray/500, contact lines 13.5px with 16px muted icons, tone pills, right-aligned meta. No checkboxes by default. Row hover: muted/60 wash. Footer: "Showing X to Y of Z" (tabular) + pager (30px chips, radius 8, active = Gray/100 + Bold). Compact variant: single-line ~52px for dashboard widgets.

## KPI card
Card with 13px Medium gray label, display-sm (30px Bold tabular) number, tinted delta chip (success/error light recipe), Brand/500 sparkline (1.75 stroke, endpoint dot).

## Dialog
radius-2xl 16, 1px border, shadow `0 16px 48px rgba(10,13,18,.16)` (one of the few allowed). Title 20px Bold. Labeled inputs (13px SemiBold label, 40px input). Actions right-aligned: ghost + primary, 36px.

## Empty state
Centered: 44px muted circle with 20px icon, 14px Bold one-line heading, 13px gray one-line hint.

## Avatars
See color.md — neutral gray, 2-letter initials. 32px default / 40px table / 24px sm.
