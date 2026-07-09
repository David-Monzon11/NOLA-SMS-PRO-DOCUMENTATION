/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // NOLA brand tokens
        brand: {
          primary: '#1F5AAE',
          secondary: '#4F8EF7',
          accent: '#DCEEFF',
          navy: '#0F172A',
        },
      },
      fontFamily: {
        sans: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
      // Custom max widths used in layout
      maxWidth: {
        'content': '768px',
      },
      // Subtle animation for the step rings and cards
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}
