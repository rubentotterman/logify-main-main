module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
  safelist: [
    'lg:justify-center',
    'lg:items-center',
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      xs: '480px', // Custom small breakpoint
      sm: '640px',  // Small screens (e.g., mobile)
      md: '768px',  // Medium screens (e.g., tablets)
      lg: '1024px', // Large screens (e.g., laptops)
      xl: '1280px', // Extra large screens (e.g., desktops)
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Corrected key
      },
      colors: {
        custombeige: '#bf7c12',
        customwhite: '#F4F1EC',
        customdark: '#23262C',
        darkBackground: '#1A1A1A',
        lightPanel: '#2A2A2A',
        accentGreen: '#9DFF00',
        accentBlue: '#5973FF',
        lightGray: '#B0B0B0',
        white: '#FFFFFF',
        yellowHighlight: '#FFCA28',
        redHighlight: '#FF5A5A',
        softBlue: '#2C3BFF',
        lightGreen: '#D4FF80',
        borderGray: '#4D4D4D',
      },
    },
  },
  plugins: [],
};

