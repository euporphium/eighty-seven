const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.NODE_ENV === 'production' ? { cssnano: { preset: 'default', plugins: [autoprefixer]} } : {})
  },
}
