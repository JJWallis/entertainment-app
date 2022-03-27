module.exports = {
   content: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
   ],
   mode: 'jit',
   // compiles css as write it
   purge: [
      './src/pages/**/*.{js,ts,jsx,tsx}',
      './src/components/**/*.{js,ts,jsx,tsx}',
   ],
   // remove unused css
   theme: {
      screens: {
         sm: '640px',
         md: '768px',
         lg: '1024px',
         xl: '1280px',
         '2xl': '1536px',
      },
      colors: {
         red: '#FC4747',
         deepBlue: '#10141e',
         slateBlue: '#5A698F',
         darkBlue: '#161d2f',
         white: '#ffffff',
      },
      fontFamily: {
         outfit: ['Outfit', 'sans-serif'],
      },
      fontSize: {
         xs: '.75rem',
         sm: '.875rem',
         tiny: '.875rem',
         base: '1rem',
         lg: '1.125rem',
         xl: '1.25rem',
         '2xl': '1.5rem',
         '3xl': '1.875rem',
         '4xl': '2.25rem',
         '5xl': '3rem',
         '6xl': '4rem',
         '7xl': '5rem',
      },
      extend: {
         spacing: {
            128: '32rem',
            144: '36rem',
         },
         borderRadius: {
            '4xl': '2rem',
         },
      },
   },
   plugins: [],
}
