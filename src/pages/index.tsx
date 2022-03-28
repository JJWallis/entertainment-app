import type { NextPage } from 'next'

const Home: NextPage = () => {
   return (
      <main>
         <input
            type="text"
            className="w-[100%] border-0 pb-2 pt-2 text-headingSM text-white bg-deepBlue focus:border-b-2 focus:border-slateBlue focus:outline-none"
            placeholder="Search for movies or TV series"
         />
         <p className="font-outfit">test</p>
         <p>test without</p>
      </main>
   )
}

export default Home
