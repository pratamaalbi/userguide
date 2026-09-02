/** @type {import('tailwindcss').Config} */
export default {
  theme: {
    extend: {
      colors: {
        poolapack: {
          amber: '#F5A623',
          gold: '#FFB800',
          burgundy: '#8B1E22',
          cream: '#FFFDF6',
          white: '#FFFFFF',
          charcoal: '#2D2727',
          gray: '#4B5563',
          border: '#E5E7EB',
          hover: '#e5a10e'
        }
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-warm': 'linear-gradient(to bottom, #FFFDF6, #FFFFFF)'
      }
    },
  },
  plugins: [],
}
