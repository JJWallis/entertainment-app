import type { NextPage } from 'next'
import Image from 'next/image'
import SearchIcon from '../assets/icon-search.svg'

const Home: NextPage = () => {
   return (
      <main>
         <div className="grid grid-cols-search">
            <button
               aria-label="Search desired movie or tv show"
               className="grid place-items-center"
            >
               <Image src={SearchIcon} alt="" />
            </button>
            <input
               type="text"
               placeholder="Search for movies or TV series"
               className="outline-none w-[100%] border-b-2 border-b-slateBlue border-opacity-0 pt-2 caret-red text-headingSM text-white bg-deepBlue hover:border-opacity-100 focus:border-opacity-100 transition-border duration-150 ease-in-out"
            />
            {/* error styles */}
         </div>
      </main>
   )
}

export default Home