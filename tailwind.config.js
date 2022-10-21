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

    xl: '1280px',
    // => @media (min-width: 1280px) { ... }

    '2xl': '1536px',
    // => @media (min-width: 1536px) { ... }
  },
  container: {
    center: true,
    padding: {
      DEFAULT: '1rem',
      lg: '2rem',
      xl: '6rem',
      '2xl': '12rem',
    },
  },
},
  plugins: [],
}
