module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#181A20',
          light: '#fff',
        },
        foreground: {
          DEFAULT: '#EAECEF',
          light: '#181A20',
        },
        primary: {
          DEFAULT: '#FCD535',
          dark: '#F0B90B',
        },
        muted: {
          DEFAULT: '#22262F',
        },
      },
    },
  },
  plugins: [require('tailwindcss-dark-mode-plugin')],
};
