import React from 'react'
import TestImg from '../assets/thumbnails/112/regular/large.jpg'
import Play from '../assets/icon-play.svg'
import Image from 'next/image'

// // process.env.PUBLIC_URL => dunamic imgs
// test with diff img sizes for TestImg

const Film: React.FC = () => {
   return (
      <button className="relative block">
         <Image
            src={TestImg}
            alt={''}
            width={'100%'}
            height={'100%'}
            className="rounded-lg"
         />
         <button
            aria-label={''}
            className="absolute z-20  top-2 right-2 grid place-items-center col-span-full row-span-full w-6 h-6 rounded-full bg-[#000] bg-opacity-70 hover:bg-white group transition-bg duration-200 ease-in-out"
         >
            <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
               <path
                  className="group-hover:stroke-deepBlue transition-stroke duration-200 ease-in-out"
                  d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                  stroke="#FFF"
                  strokeWidth="1.2"
                  fill="none"
               />
            </svg>
         </button>
         <div className="absolute z-10 inset-0 grid place-items-center bg-deepBlue bg-opacity-60 opacity-100 rounded-lg">
            <button className="flex items-center justify-center gap-2 p-1 pr-3 bg-white bg-opacity-20 rounded-3xl">
               <Image
                  src={Play}
                  alt={''}
                  width={'20px'}
                  height={'20px'}
                  className="rounded-lg"
               />
               <p className="mt-0.5">Play</p>
            </button>
         </div>
      </button>
   )
}

export default Film
