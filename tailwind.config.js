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
          DEFAULT: '#111827', // dark blue-gray
          light: '#ffffff',
        },
        foreground: {
          DEFAULT: '#e5e7eb', // light gray
          light: '#1e293b', // slate-800
        },
        primary: {
          DEFAULT: '#2563eb', // blue-600
          light: '#2563eb',
        },
        accent: {
          DEFAULT: '#3b82f6', // blue-500
        },
        muted: {
          DEFAULT: '#1e293b', // slate-800
        },
        card: {
          DEFAULT: '#1e293b',
          light: '#f3f4f6',
        },
        border: {
          DEFAULT: '#334155',
          light: '#e5e7eb',
        },
      },
    },
  },
  plugins: [require('tailwindcss-dark-mode-plugin')],
};
