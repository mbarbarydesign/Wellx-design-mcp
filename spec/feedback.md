# Feedback

## Inline alerts
Radius 10, 12-14px padding, 13px text, light-tint recipe:
- Info: brand-light bg (Brand/50) + Brand/700 text
- Success: Success/50 + Success/700 · Warning: Warning/50 + Warning/700 · Error: Error/50 + Error/700
(dark: 900 bg + 300 text)

## Toasts
One card style for every toast: card bg, **radius-2xl 16**, 1px border, **20px padding**, width 420px, shadow `0 16px 48px rgba(10,13,18,.16)` (the dialog shadow — allowed here). Position **top-end**, 20px offset, 12px stack gap, direction-aware for RTL (`dir="auto"`). Auto-dismiss **6s**; a 24px close button always sits in the top end corner (16px X icon, hover Gray/100).
- Standard toasts (success/info/warning/error): 20px Lucide tone icon (CircleCheck / Info / TriangleAlert / CircleX) in the tone's 600 (dark: 400), top-aligned; **title 15px SemiBold** + optional **description 13px Gray/600** (relaxed leading). Action button = primary; cancel = muted.
- **Notification toast** (live events — new messages, assignments): NO action button — the whole card is the click target. `role="button"`, Enter/Space activate, click dismisses the toast then navigates; hover = muted/40 wash. Keep the dismiss X independent (stopPropagation).
- Errors never auto-dismiss.

## Loading
- Content: shimmer skeletons (12px bars, radius 6, muted fill, 1.6s sweep)
- Regions: spinner (Lucide Loader2), 18px, muted color, centered — with a 13px gray label if the wait may exceed ~2s
- Respect prefers-reduced-motion: no shimmer/pulse.
