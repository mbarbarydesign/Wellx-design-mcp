/**
 * Wellx Portals — Tailwind preset v2.1
 * Usage:  // tailwind.config.js
 *   module.exports = { presets: [require('./wellx-tailwind-preset.cjs')], darkMode: ['class'], content: [...] }
 * Import wellx-tokens.css once in your app entry. Toggle dark mode by adding `.dark` to <html>.
 */
module.exports = {
  theme: {
    extend: {
      colors: {
        brand: { '25': 'var(--wx-brand-25)', '50': 'var(--wx-brand-50)', '100': 'var(--wx-brand-100)', '200': 'var(--wx-brand-200)', '300': 'var(--wx-brand-300)', '400': 'var(--wx-brand-400)', '500': 'var(--wx-brand-500)', '600': 'var(--wx-brand-600)', '700': 'var(--wx-brand-700)', '800': 'var(--wx-brand-800)', '900': 'var(--wx-brand-900)', '950': 'var(--wx-brand-950)' },
        gray: { '25': 'var(--wx-gray-25)', '50': 'var(--wx-gray-50)', '100': 'var(--wx-gray-100)', '200': 'var(--wx-gray-200)', '300': 'var(--wx-gray-300)', '400': 'var(--wx-gray-400)', '500': 'var(--wx-gray-500)', '600': 'var(--wx-gray-600)', '700': 'var(--wx-gray-700)', '800': 'var(--wx-gray-800)', '900': 'var(--wx-gray-900)', '950': 'var(--wx-gray-950)' },
        secondary: { '25': 'var(--wx-secondary-25)', '50': 'var(--wx-secondary-50)', '100': 'var(--wx-secondary-100)', '200': 'var(--wx-secondary-200)', '300': 'var(--wx-secondary-300)', '400': 'var(--wx-secondary-400)', '500': 'var(--wx-secondary-500)', '600': 'var(--wx-secondary-600)', '700': 'var(--wx-secondary-700)', '800': 'var(--wx-secondary-800)', '900': 'var(--wx-secondary-900)', '950': 'var(--wx-secondary-950)' },
        error: { '25': 'var(--wx-error-25)', '50': 'var(--wx-error-50)', '100': 'var(--wx-error-100)', '200': 'var(--wx-error-200)', '300': 'var(--wx-error-300)', '400': 'var(--wx-error-400)', '500': 'var(--wx-error-500)', '600': 'var(--wx-error-600)', '700': 'var(--wx-error-700)', '800': 'var(--wx-error-800)', '900': 'var(--wx-error-900)', '950': 'var(--wx-error-950)' },
        warning: { '25': 'var(--wx-warning-25)', '50': 'var(--wx-warning-50)', '100': 'var(--wx-warning-100)', '200': 'var(--wx-warning-200)', '300': 'var(--wx-warning-300)', '400': 'var(--wx-warning-400)', '500': 'var(--wx-warning-500)', '600': 'var(--wx-warning-600)', '700': 'var(--wx-warning-700)', '800': 'var(--wx-warning-800)', '900': 'var(--wx-warning-900)', '950': 'var(--wx-warning-950)' },
        success: { '25': 'var(--wx-success-25)', '50': 'var(--wx-success-50)', '100': 'var(--wx-success-100)', '200': 'var(--wx-success-200)', '300': 'var(--wx-success-300)', '400': 'var(--wx-success-400)', '500': 'var(--wx-success-500)', '600': 'var(--wx-success-600)', '700': 'var(--wx-success-700)', '800': 'var(--wx-success-800)', '900': 'var(--wx-success-900)', '950': 'var(--wx-success-950)' },
        grayblue: { '25': 'var(--wx-grayblue-25)', '50': 'var(--wx-grayblue-50)', '100': 'var(--wx-grayblue-100)', '200': 'var(--wx-grayblue-200)', '300': 'var(--wx-grayblue-300)', '400': 'var(--wx-grayblue-400)', '500': 'var(--wx-grayblue-500)', '600': 'var(--wx-grayblue-600)', '700': 'var(--wx-grayblue-700)', '800': 'var(--wx-grayblue-800)', '900': 'var(--wx-grayblue-900)', '950': 'var(--wx-grayblue-950)' },
        teal: { '25': 'var(--wx-teal-25)', '50': 'var(--wx-teal-50)', '100': 'var(--wx-teal-100)', '200': 'var(--wx-teal-200)', '300': 'var(--wx-teal-300)', '400': 'var(--wx-teal-400)', '500': 'var(--wx-teal-500)', '600': 'var(--wx-teal-600)', '700': 'var(--wx-teal-700)', '800': 'var(--wx-teal-800)', '900': 'var(--wx-teal-900)', '950': 'var(--wx-teal-950)' },
        violet: { '25': 'var(--wx-violet-25)', '50': 'var(--wx-violet-50)', '100': 'var(--wx-violet-100)', '200': 'var(--wx-violet-200)', '300': 'var(--wx-violet-300)', '400': 'var(--wx-violet-400)', '500': 'var(--wx-violet-500)', '600': 'var(--wx-violet-600)', '700': 'var(--wx-violet-700)', '800': 'var(--wx-violet-800)', '900': 'var(--wx-violet-900)', '950': 'var(--wx-violet-950)' },
        gold: { '25': 'var(--wx-gold-25)', '50': 'var(--wx-gold-50)', '100': 'var(--wx-gold-100)', '200': 'var(--wx-gold-200)', '300': 'var(--wx-gold-300)', '400': 'var(--wx-gold-400)', '500': 'var(--wx-gold-500)', '600': 'var(--wx-gold-600)', '700': 'var(--wx-gold-700)', '800': 'var(--wx-gold-800)', '900': 'var(--wx-gold-900)', '950': 'var(--wx-gold-950)' },
        silver: { '25': 'var(--wx-silver-25)', '50': 'var(--wx-silver-50)', '100': 'var(--wx-silver-100)', '200': 'var(--wx-silver-200)', '300': 'var(--wx-silver-300)', '400': 'var(--wx-silver-400)', '500': 'var(--wx-silver-500)', '600': 'var(--wx-silver-600)', '700': 'var(--wx-silver-700)', '800': 'var(--wx-silver-800)', '900': 'var(--wx-silver-900)', '950': 'var(--wx-silver-950)' },
        bronze: { '25': 'var(--wx-bronze-25)', '50': 'var(--wx-bronze-50)', '100': 'var(--wx-bronze-100)', '200': 'var(--wx-bronze-200)', '300': 'var(--wx-bronze-300)', '400': 'var(--wx-bronze-400)', '500': 'var(--wx-bronze-500)', '600': 'var(--wx-bronze-600)', '700': 'var(--wx-bronze-700)', '800': 'var(--wx-bronze-800)', '900': 'var(--wx-bronze-900)', '950': 'var(--wx-bronze-950)' },
        background: 'var(--wx-background)',
        foreground: 'var(--wx-foreground)',
        card: 'var(--wx-card)',
        popover: 'var(--wx-popover)',
        muted: { DEFAULT: 'var(--wx-muted)', soft: 'var(--wx-muted-soft)', foreground: 'var(--wx-muted-foreground)' },
        border: { DEFAULT: 'var(--wx-border)', secondary: 'var(--wx-border-secondary)' },
        input: 'var(--wx-input)',
        primary: { DEFAULT: 'var(--wx-primary)', hover: 'var(--wx-primary-hover)', active: 'var(--wx-primary-active)', foreground: 'var(--wx-primary-foreground)' },
        link: 'var(--wx-link)',
        ring: 'var(--wx-ring)',
        accent: { DEFAULT: 'var(--wx-accent)', foreground: 'var(--wx-accent-foreground)' },
        destructive: { DEFAULT: 'var(--wx-destructive)', foreground: 'var(--wx-destructive-foreground)' },
      },
      borderRadius: {
        xxs: '2px', xs: '4px', sm: '6px', md: '8px', lg: '10px', xl: '12px',
        '2xl': '16px', '3xl': '20px', '4xl': '24px',
        card: 'var(--wx-radius-card)', button: 'var(--wx-radius-button)', input: 'var(--wx-radius-input)',
      },
      fontFamily: {
        sans: ['Manrope', 'system-ui', 'sans-serif'],
        arabic: ['Alexandria', 'Manrope', 'sans-serif'],
      },
      fontSize: {
        'text-xs': ['12px', { lineHeight: '18px' }],
        'text-sm': ['14px', { lineHeight: '20px' }],
        'text-md': ['16px', { lineHeight: '24px' }],
        'text-lg': ['18px', { lineHeight: '28px' }],
        'text-xl': ['20px', { lineHeight: '30px' }],
        'display-xs': ['24px', { lineHeight: '32px' }],
        'display-sm': ['30px', { lineHeight: '38px' }],
        'display-md': ['36px', { lineHeight: '44px' }],
        'display-lg': ['48px', { lineHeight: '60px' }],
        'display-xl': ['60px', { lineHeight: '72px' }],
        'display-2xl': ['72px', { lineHeight: '90px' }],
      },
      maxWidth: {
        'content': '1440px',   // tab content cap on big screens (width-4xl)
        'form': '768px',       // forms & settings (width-xl)
        'paragraph': '720px',
      },
      transitionDuration: { micro: '150ms', layout: '200ms' },
      backgroundImage: {
        'gradient-brand-h': 'var(--wx-gradient-brand-horizontal)',
        'gradient-brand-v': 'var(--wx-gradient-brand-vertical)',
        'gradient-secondary-h': 'var(--wx-gradient-secondary-horizontal)',
        'gradient-secondary-v': 'var(--wx-gradient-secondary-vertical)',
      },
    },
  },
}
