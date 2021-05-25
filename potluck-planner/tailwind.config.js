module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      brand: {
        light: '#FCD164',
        DEFAULT: '#FBBE16',
        dark: '#DDA200',
      },
      dub: {
        DEFAULT: 'FFFFFF',
      },
      blew: {
        DEFAULT: '#1982C4',
      },
      //bg-brand-light
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
