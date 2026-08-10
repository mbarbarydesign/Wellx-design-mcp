# App shell — sidebar & topbar

## Sidebar (owns brand + user identity)
1. **Container** — 224px expanded / 64px collapsed. White, single border-e hairline, full height, sticky, 200ms width transition.
2. **Header** — 64px, bottom hairline, 16px side padding. Expanded: logo start + collapse button end. Collapsed: collapse button centered alone.
3. **Logo** — brand mark/wordmark image **24px tall** (width auto), logo only — no product-name text. **Collapsed: no logo at all** — the 64px header keeps only the centered collapse button; never shrink or squeeze the mark into the 64px rail. Fallback: 24px rounded-md brand tile with initials.
4. **Sections** — groups 24px apart; label = 11px SemiBold UPPERCASE +8% tracking Gray/500, 12px inset, 6px below; labels hidden when collapsed.
5. **Nav items** — 40px row, radius-lg 10, 18px icon (stroke 1.75), 14px Medium, 12px icon-label gap, stacked 2px apart. States: Inactive = transparent + Gray/600 text + Gray/500 icon; Hover = Gray/50 fill; Active = Gray/100 pill + Gray/900 ink (same weight — never accent). Collapsed: icon only + tooltip.
6. **Collapse button** — 32×32, radius 8, 18px panel-left icon (stroke 1.75 @24 grid), Gray/500, Gray/100 hover tint. Icon mirrors horizontally when collapsed (chevron points outward). aria-label + tooltip required.
7. **User account (footer)** — bottom-pinned behind top hairline, 12px padding: 32px round avatar (staff Teal→Success gradient, 11px SemiBold initials) + name 13px Medium + role 11px Gray/500 + ⋮ (16px). Row opens the account menu upward; Log out lives inside the menu. Collapsed: avatar only.
8. **Content width** — content inside each tab caps at 1440px centered on big screens; forms at 768px.

## Topbar
- 56px, white, single bottom hairline. Utilities only: **no search, no theme switcher, no brand, no avatar.**
- End cluster: language pill (e.g. "EN · ع", 28px, muted bg) + notification bell (32px icon button) with 7px Error/500 badge ringed in card color.
- Search lives in each page's filter bar/toolbar, not the topbar. Theme switching lives in Settings → Appearance.
