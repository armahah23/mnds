export default {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}', 
    './public/index.html',
  ],
  theme: {
    extend: {
      screens: {
        'sm': '640px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      colors: {
        'gray-800': '#2d3748',
        'gray-900': '#1a202c',
        'blue-500': '#4299e1',
        'blue-700': '#2b6cb0',
      },
      spacing: {
        '4': '16px',
        '6': '24px',
        '8': '32px',
        '12': '48px',
      },
      fontSize: {
        'base': '16px',
        'lg': '18px',
        'xl': '20px',
        '2xl': '24px',
        '3xl': '30px',
        '4xl': '36px',
      },
      fontFamily: {
        'noto-serif': ['"Noto Serif"', 'serif'],
        'jersey-15': ['"Jersey 15"', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.font-jersey-15': {
          fontFamily: 'jersey-15, sans-serif',
        },
      }, ['responsive', 'hover']);
    },
  ],
}
