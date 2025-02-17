/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#DDC5A9',
        'primary-40': '#FFF3E0',
        'primary-60': '#F5C74D',
        secondary: '#8894b7',
        'secondary-40': '#B0C4DE'
      },
      fontSize: {
        sm: '0.8rem',
        base: '1rem',
        xl: '1.25rem',
        '2xl': '1.563rem',
        '3xl': '1.953rem',
        '4xl': '2.441rem',
        '5xl': '3.052rem',
      },
      padding: {
        mobile: '0 20px',
        tablet: '0 30px',
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        '.wrap':{
          display: 'flex',
          'flex-direction': 'column',
          'min-height': '100vh',
          '> main' :{
            flex :'1'
          }
        },
        '.inner': {
          position: 'relative',
          width: '100%',
          'max-width': '1340px',
          margin: '0 auto',
          padding: theme('padding.mobile'),
          [`@media (min-width: ${theme('screens.md')})`]: {
            padding: theme('padding.tablet'),
          },
        },
        '.blind': {
          position: 'absolute !important',
          width: '1px !important',
          height: '1px !important',
          padding: '0 !important',
          margin: '-1px !important',
          overflow: 'hidden !important',
          clip: 'rect(0, 0, 0, 0) !important',
          whiteSpace: 'nowrap !important',
          border: '0 !important',
        },
        // ellipsis mixin
        '.ellipsis-1': {
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '1',
        },
        '.ellipsis-2': {
          display: '-webkit-box',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitBoxOrient: 'vertical',
          WebkitLineClamp: '2',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover', 'focus']);
    },
  ],
};
