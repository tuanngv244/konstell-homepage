/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/views/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './views/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '320px', // This means "only screens 320px and smaller"
        'max-xs': { max: '399px' }, // Add this for
        '3xl': '1800px',
        'mid-large': {
          min: '1190px',
          max: '1290px',
        },
      },

      colors: {
        grey: {
          50: '#f6f6f6',
          100: '#eeeeee',
          200: '#fbfbfc',
          500: '#757575',
          600: '#545454',
          800: '#1F1F1F',
          900: '#141414',
        },
        nd: {
          600: '#6f77da',
        },
        primary: {
          200: '#97B4FF',
          400: '#4281FF',
          500: '#4E6FF3',
          600: '#244CFF',
        },
        gray: {
          50: '#f6f6f6',
          100: '#F8FAFC',
          200: '#E2E2E2',
          300: '#f3f3f3',
          400: '#AFAFAF',
          600: "#666666",
          700: '#999A9A',
          800: '#1F1F1F',
          900: '#141414',
        },
      },
      backgroundImage: {
        'gradient-primary': "linear-gradient(103deg, rgba(36,76,255,1) 0%, rgba(66,129,255,1) 100%)",
        "footer-primary": "radial-gradient(93.8% 100% at 49.17% 0%, rgba(0, 0, 0, 0.00) 62.73%, rgba(0, 111, 244, 0.50) 100%)"
      },
      animation: {
        shine: 'shine 1s',
      },
      keyframes: {
        shine: {
          '100%': { left: '125%' },
        },
      },
    },
  },
  plugins: [
    // function ({ addUtilities }) {
    //   addUtilities({
    //     '.content-empty': { content: '""' },
    //     '.content-[""]': { content: '""' },
    //   })
    // },
  ],
};
