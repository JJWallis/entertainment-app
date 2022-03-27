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
         bodyS: '.8125rem',
         bodyM: '.9375rem',
         headingXS: '1.125rem',
         headingSM: '1.5rem',
         headingL: '2rem',
      },
      fontWeight: {
         light: 300,
         normal: 400,
         medium: 500,
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
