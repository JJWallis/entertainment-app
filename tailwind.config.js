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
      extend: {
         colors: {
            red: '#FC4747',
            darkBlue: '#10141e',
            slateBlue: '#5A698F',
         },
      },
   },
   plugins: [],
}
