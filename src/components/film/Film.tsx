import React from 'react'
import TestImg from '../../assets/thumbnails/112/regular/large.jpg'
import Play from '../../assets/icon-play.svg'
import Image from 'next/image'
import Bookmark from './Bookmark'

//  process.env.PUBLIC_URL => dunamic imgs

const Film: React.FC = () => {
   return (
      <button className="relative block">
         <Image
            src={TestImg}
            alt={''}
            width={'100%'}
            height={'100%'}
            className="rounded-lg"
            layout="responsive"
         />
         <Bookmark bookmarked={true} />
         <div className="absolute z-10 inset-0 grid place-items-center bg-deepBlue bg-opacity-60 opacity-0 rounded-lg hover:opacity-100 transition-opacity 1s ease-in">
            {/* dont make focusable unless visible */}
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
