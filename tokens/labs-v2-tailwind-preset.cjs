/* Labs Design System V2 — Tailwind preset (v1.0.0)
 * Pairs with tokens/labs-v2.css (import it in your app entry). Dark-first: :root is dark,
 * [data-theme="light"] opts into light — so use `darkMode: ['selector', '[data-theme="light"]']`
 * inverted logic in app code, or simply rely on the CSS variables resolving per theme. */
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--wl2-font-sans)',
        mono: 'var(--wl2-font-mono)', // NUMBERS ONLY: money, IDs, ratios, timestamps, chart axes
      },
      fontSize: {
        '2xs': ['var(--wl2-text-2xs)', { lineHeight: '1.2' }],
        xs: ['var(--wl2-text-xs)', { lineHeight: '1.2' }],
        sm: ['var(--wl2-text-sm)', { lineHeight: '1.2' }],
        md: ['var(--wl2-text-md)', { lineHeight: '1.2' }],
        lg: ['var(--wl2-text-lg)', { lineHeight: '1.15' }],
        xl: ['var(--wl2-text-xl)', { lineHeight: '1.15' }],
        'display-xs': ['var(--wl2-display-xs)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'display-sm': ['var(--wl2-display-sm)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'display-md': ['var(--wl2-display-md)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
        'display-lg': ['var(--wl2-display-lg)', { lineHeight: '1.2', letterSpacing: '-0.015em' }],
      },
      colors: {
        background: 'var(--wl2-background)',
        card: 'var(--wl2-card)',
        popover: 'var(--wl2-popover)',
        muted: { DEFAULT: 'var(--wl2-muted)', soft: 'var(--wl2-muted-soft)', foreground: 'var(--wl2-muted-foreground)' },
        foreground: 'var(--wl2-foreground)',
        secondary: 'var(--wl2-text-secondary)',
        tertiary: 'var(--wl2-text-tertiary)',
        border: { DEFAULT: 'var(--wl2-border)', secondary: 'var(--wl2-border-secondary)' },
        input: 'var(--wl2-input)',
        primary: {
          DEFAULT: 'var(--wl2-primary)', hover: 'var(--wl2-primary-hover)',
          active: 'var(--wl2-primary-active)', foreground: 'var(--wl2-primary-foreground)',
        },
        link: 'var(--wl2-link)',
        ring: 'var(--wl2-ring)',
        accent: { DEFAULT: 'var(--wl2-accent)', foreground: 'var(--wl2-accent-foreground)' },
        'signal-ai': 'var(--wl2-signal-ai)',
        destructive: { DEFAULT: 'var(--wl2-destructive)', hover: 'var(--wl2-destructive-hover)', foreground: 'var(--wl2-destructive-foreground)' },
        success: 'var(--wl2-success)',
        warning: 'var(--wl2-warning)',
        error: 'var(--wl2-error)',
        info: 'var(--wl2-info)',
        tag: {
          'neutral-surface': 'var(--wl2-tag-neutral-surface)', 'neutral-foreground': 'var(--wl2-tag-neutral-foreground)',
          'success-surface': 'var(--wl2-tag-success-surface)', 'success-foreground': 'var(--wl2-tag-success-foreground)',
          'warning-surface': 'var(--wl2-tag-warning-surface)', 'warning-foreground': 'var(--wl2-tag-warning-foreground)',
          'error-surface': 'var(--wl2-tag-error-surface)', 'error-foreground': 'var(--wl2-tag-error-foreground)',
          'info-surface': 'var(--wl2-tag-info-surface)', 'info-foreground': 'var(--wl2-tag-info-foreground)',
          'teal-surface': 'var(--wl2-tag-teal-surface)', 'teal-foreground': 'var(--wl2-tag-teal-foreground)',
          'magenta-surface': 'var(--wl2-tag-magenta-surface)', 'magenta-foreground': 'var(--wl2-tag-magenta-foreground)',
          'orange-surface': 'var(--wl2-tag-orange-surface)', 'orange-foreground': 'var(--wl2-tag-orange-foreground)',
        },
      },
      spacing: {
        1: 'var(--wl2-space-1)', 2: 'var(--wl2-space-2)', 3: 'var(--wl2-space-3)', 4: 'var(--wl2-space-4)',
        5: 'var(--wl2-space-5)', 6: 'var(--wl2-space-6)', 8: 'var(--wl2-space-8)', 10: 'var(--wl2-space-10)',
        12: 'var(--wl2-space-12)', 16: 'var(--wl2-space-16)',
      },
      borderRadius: {
        sm: 'var(--wl2-radius-sm)', md: 'var(--wl2-radius-md)', lg: 'var(--wl2-radius-lg)',
        xl: 'var(--wl2-radius-xl)', full: 'var(--wl2-radius-full)',
      },
      boxShadow: {
        resting: 'var(--wl2-shadow-resting)', // light mode only, optional, always with border
        float: 'var(--wl2-shadow-float)',
        overlay: 'var(--wl2-shadow-overlay)',
      },
      maxWidth: { content: 'var(--wl2-content-max)' },
      transitionDuration: { fast: '100ms', base: '150ms', slow: '200ms' },
      transitionTimingFunction: {
        enter: 'cubic-bezier(0, 0, 0.2, 1)', exit: 'cubic-bezier(0.4, 0, 1, 1)', move: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
};
