/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: true,
    content: ['src/*.html'],
  },
  content: [],
  theme: {
  screens: {
    sm: '560px',
    // => @media (min-width: 640px) { ... }

    md: '768px',
    // => @media (min-width: 768px) { ... }

    lg: '1024px',
    // => @media (min-width: 1024px) { ... }
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem'
    },
    screens: {
      sm: '560px',
      md: '768px',
      lg: '1140px',
    },
  },
},
  plugins: [],
}
