import React, { useState } from 'react'

interface Props {
   bookmarked: boolean
}

const Bookmark: React.FC<Props> = ({ bookmarked }) => {
   const [bookmark, setBoomark] = useState(bookmarked)

   return (
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
   )
}
