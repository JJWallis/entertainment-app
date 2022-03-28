import type { NextPage } from 'next'

const Home: NextPage = () => {
   return (
      <main>
         <input
            type="text"
            placeholder="Search for movies or TV series"
            className="outline-none w-[100%] border-b-2 border-b-slateBlue border-opacity-0 pb-2 pt-2 text-headingSM text-white bg-deepBlue hover:border-opacity-100 focus:border-opacity-100 transition-border duration-150 ease-in-out"
         />
         {/* transition alpha */}
      </main>
   )
}

export default Home
