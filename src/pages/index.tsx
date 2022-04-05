import type { NextPage } from 'next'
import TestImg from '../assets/thumbnails/112/regular/small.jpg'
import Image from 'next/image'

const Home: NextPage = () => {
   // bookmark - selected state
   return (
      <main>
         <section
            aria-labelledby={''}
            className="grid grid-cols-movie place-items-center h-20 border-2 border-red"
         >
            <button className="relative border-2">
               <Image
                  src={TestImg}
                  // process.env.PUBLIC_URL
                  alt="lol"
                  width={'100%'}
                  height={'100%'}
               />
               <button
                  aria-label="bookmark dynamic-film"
                  className="absolute top-2 right-2 grid place-items-center col-span-full row-span-full w-6 h-6 rounded-full bg-[#000] bg-opacity-70 hover:bg-white group transition-bg duration-200 ease-in-out"
               >
                  <svg
                     width="12"
                     height="14"
                     xmlns="http://www.w3.org/2000/svg"
                  >
                     <path
                        className="group-hover:stroke-deepBlue transition-stroke duration-200 ease-in-out"
                        d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                        stroke="#FFF"
                        strokeWidth="1.2"
                        fill="none"
                     />
                  </svg>
               </button>
            </button>
         </section>
      </main>
   )
}

// bookmark + film component

export default Home
