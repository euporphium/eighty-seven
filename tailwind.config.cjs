const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        // Tailwind does not automatically escape font names with spaces
        'sans': ['"Patrick Hand"', ...defaultTheme.fontFamily.sans],
        'serif': ['"Josefin Slab"', ...defaultTheme.fontFamily.serif],
      },
    }
  },
  plugins: []
};

