# Guardrails — Do & Don't

## Do
- Consume the Semantics layer / semantic Tailwind classes — Light/Dark comes free
- Import `@wellx/design-tokens` (CSS vars + Tailwind preset); read values from tokens, never retype them
- Use the light-tint recipe for chips/pills: 50 bg + 700 text + 500 dot (900/300 dark)
- Build each pattern once as a shared component; import, don't re-create
- Logical direction utilities everywhere shared; tabular numbers everywhere; aria-label on icon-only buttons

## Don't
- Hardcode ANY hex in component code — brand is tenant-injected; everything else is a token
- Add shadows or hover lifts outside dialogs, drawers, toasts, and auth
- Put accent color in nav, menu highlights, or hovers — chrome stays gray
- Invent new status/priority colors — tone maps are fixed and centralized
- Use physical direction utilities in shared components — RTL breaks
- Let content stretch past 1440px on big screens
