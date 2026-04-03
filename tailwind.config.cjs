/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Warm Minimalism palette
        cream: {
          50: '#FFFEF9',
          100: '#FBF9F2',
          200: '#FAF9F6', // Primary warm white
          300: '#F5F1E3',
          400: '#E8E0D0',
        },
        charcoal: {
          50: '#F8F7F6',
          100: '#E8E6E2',
          700: '#3E3C3A', // Deep text color
          900: '#1A1917', // Espresso text
        },
        cafe: {
          50: '#F9F6F1',
          100: '#E8DECC',
          200: '#D4C4AD',
          300: '#C2A878',
          400: '#A0956D',
          500: '#8B7E6F',
          600: '#6B6552',
          700: '#5A5242',
          800: '#4A4238',
          900: '#3C3630',
        },
        accent: {
          terracotta: '#C2410C',
          oak: '#451A03',
          warm: '#D4A574',
          soft: '#E8C9A0',
        },
        sage: {
          400: '#A8D5BA',
          600: '#92B77D',
          700: '#7A9B68',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Georgia', 'serif'],
        sans: ['Inter', 'Segoe UI', 'Helvetica Neue', 'sans-serif'],
        serif: ['Playfair Display', 'Georgia', 'serif'],
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        display: ['64px', { lineHeight: '1.1' }],
        h1: ['48px', { lineHeight: '1.2' }],
        h2: ['36px', { lineHeight: '1.25' }],
        h3: ['28px', { lineHeight: '1.3' }],
        h4: ['24px', { lineHeight: '1.35' }],
        lg: ['18px', { lineHeight: '1.6' }],
        base: ['16px', { lineHeight: '1.5' }],
        sm: ['14px', { lineHeight: '1.5' }],
        xs: ['12px', { lineHeight: '1.4' }],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        'sm': '4px',
        'md': '8px',
        'lg': '12px',
        'xl': '16px',
      },
      boxShadow: {
        'xs': '0 1px 2px rgba(26, 25, 23, 0.05)',
        'sm': '0 1px 3px rgba(26, 25, 23, 0.1)',
        'md': '0 2px 8px rgba(26, 25, 23, 0.08)',
        'lg': '0 4px 12px rgba(26, 25, 23, 0.1)',
        'xl': '0 8px 24px rgba(26, 25, 23, 0.12)',
        '2xl': '0 16px 40px rgba(26, 25, 23, 0.15)',
        'none': 'none',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'stagger-item': 'fadeIn 0.5s ease-in-out',
        'scale-in': 'scaleIn 0.3s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
      },
      transitionDuration: {
        quick: '150ms',
        standard: '250ms',
        slow: '350ms',
      },
      transitionTimingFunction: {
        premium: 'cubic-bezier(0.4, 0, 0.2, 1)',
        bounce: 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
      },
    },
  },
  plugins: [],
}
