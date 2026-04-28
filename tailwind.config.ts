import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: {
          DEFAULT: '#333333',
        },
        teal: {
          DEFAULT: '#166d78',
          hover: '#0f555e',
          text: '#0f555e',
          muted: 'rgba(22, 109, 120, 0.1)',
        },
        slate: {
          accent: '#4a5860',
          muted: '#4a5860',
          light: '#4a5860',
          text: '#333333',
        },
        'light-blue': '#b6d0ed',
        glacial: '#b6d0ed',
        ivory: '#F7F4EE',
        crimson: '#8B2E2E',
        forest: '#2E5D4B',
        // Legacy aliases for transition
        navy: {
          DEFAULT: '#333333',
          light: '#333333',
        },
        gold: {
          DEFAULT: '#166d78',
          hover: '#0f555e',
          muted: 'rgba(22, 109, 120, 0.1)',
        },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['72px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'hero-mobile': ['40px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'h1': ['56px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'h1-mobile': ['34px', { lineHeight: '1.15', letterSpacing: '0.02em' }],
        'h2': ['42px', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h2-mobile': ['28px', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h3': ['28px', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h3-mobile': ['22px', { lineHeight: '1.25', letterSpacing: '0.02em' }],
        'h4': ['18px', { lineHeight: '1.4' }],
        'body-lg': ['18px', { lineHeight: '1.65' }],
        'body': ['16px', { lineHeight: '1.65' }],
        'body-sm': ['14px', { lineHeight: '1.65' }],
        'stat': ['48px', { lineHeight: '1', letterSpacing: '0.05em' }],
        'stat-mobile': ['32px', { lineHeight: '1', letterSpacing: '0.05em' }],
        'nav': ['15px', { lineHeight: '1', letterSpacing: '0.01em' }],
        'btn': ['15px', { lineHeight: '1', letterSpacing: '0.01em' }],
        'caption': ['13px', { lineHeight: '1.5' }],
        'legal': ['11px', { lineHeight: '1.5' }],
        'eyebrow': ['13px', { lineHeight: '1', letterSpacing: '0.15em' }],
        'eyebrow-sm': ['12px', { lineHeight: '1', letterSpacing: '0.15em' }],
      },
      spacing: {
        'xs': '8px',
        'sm': '16px',
        'md': '24px',
        'lg': '40px',
        'xl': '64px',
        '2xl': '96px',
        '3xl': '128px',
      },
      maxWidth: {
        'container': '1280px',
        'content': '680px',
        'narrow': '520px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(51, 51, 51, 0.04)',
        'card-hover': '0 12px 48px rgba(51, 51, 51, 0.08)',
        'nav': '0 2px 8px rgba(51, 51, 51, 0.06)',
        'form': '0 24px 80px rgba(51, 51, 51, 0.08)',
        'mega': '0 40px 80px rgba(51, 51, 51, 0.6)',
      },
      borderRadius: {
        'minimal': '2px',
        'card': '4px',
        'form': '8px',
        'panel': '12px',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'bounce-subtle': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
        'slide-in-right': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'ken-burns': {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'bounce-subtle': 'bounce-subtle 2s infinite',
        'slide-in-right': 'slide-in-right 0.3s ease forwards',
        'ken-burns': 'ken-burns 15s ease-in-out infinite alternate',
      },
      typography: ({ theme }: { theme: (path: string) => string }) => ({
        DEFAULT: {
          css: {
            maxWidth: 'none',
            '--tw-prose-body': '#5b6a71',
            '--tw-prose-headings': '#333333',
            '--tw-prose-lead': '#5b6a71',
            '--tw-prose-links': '#1d7682',
            '--tw-prose-bold': '#333333',
            '--tw-prose-counters': '#5b6a71',
            '--tw-prose-bullets': '#1d7682',
            '--tw-prose-hr': '#e5e5e5',
            '--tw-prose-quotes': '#333333',
            '--tw-prose-quote-borders': '#1d7682',
            '--tw-prose-captions': '#5b6a71',
            '--tw-prose-code': '#333333',
            '--tw-prose-pre-code': '#F7F4EE',
            '--tw-prose-pre-bg': '#333333',
            '--tw-prose-th-borders': '#e5e5e5',
            '--tw-prose-td-borders': '#e5e5e5',
            fontFamily: theme('fontFamily.sans'),
            lineHeight: '1.75',
            h1: { fontFamily: theme('fontFamily.serif'), fontWeight: '700' },
            h2: { fontFamily: theme('fontFamily.serif'), fontWeight: '700', marginTop: '3rem', marginBottom: '1.25rem' },
            h3: { fontFamily: theme('fontFamily.serif'), fontWeight: '700', marginTop: '2rem', marginBottom: '0.75rem' },
            h4: { fontFamily: theme('fontFamily.serif'), fontWeight: '600' },
            p: { marginTop: '0', marginBottom: '1.25rem' },
            li: { marginTop: '0.5rem', marginBottom: '0.5rem' },
            'ul > li': { paddingLeft: '0.375rem' },
            strong: { fontWeight: '600' },
            a: { fontWeight: '500', textDecoration: 'underline' },
          },
        },
        lg: {
          css: {
            fontSize: '1.125rem',
            lineHeight: '1.8',
            h2: { fontSize: '1.875rem', marginTop: '3.5rem', marginBottom: '1.5rem' },
            h3: { fontSize: '1.5rem', marginTop: '2.5rem', marginBottom: '1rem' },
            p: { marginBottom: '1.5rem' },
          },
        },
      }),
    },
  },
  plugins: [typography],
}
export default config
