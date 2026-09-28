import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  content: [
    './components/**/*.{vue,js,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './composables/**/*.{js,ts}',
    './plugins/**/*.{js,ts}',
    './app.{js,ts,vue}',
    './error.{js,ts,vue}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#FFFBEA',
          100: '#FFF4C5',
          200: '#FFE98F',
          300: '#FFDC59',
          400: '#FFCE23',
          DEFAULT: '#FFC107',
          500: '#FFC107',
          600: '#E0A300',
          700: '#B88200',
          800: '#8F6300',
          900: '#664500'
        },
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#EEEEEE',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121'
        },
        surface: '#FFFFFF',
        page: '#F5F5F5'
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif'
        ]
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '0.9375rem' }],
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }]
      },
      spacing: {
        '4.5': '1.125rem',
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        'container': '1200px'
      },
      maxWidth: {
        'container': '1200px'
      },
      boxShadow: {
        'card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 8px 20px rgba(0, 0, 0, 0.08)',
        'header': '0 1px 4px rgba(0, 0, 0, 0.05)'
      },
      borderRadius: {
        'card': '12px'
      }
    }
  },
  plugins: []
}
