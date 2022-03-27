import type { NextPage } from 'next'

const Home: NextPage = () => {
   return (
      <main>
         <input
            type="text"
            className="w-[100%] pb-2 pt-2 placeholder:text-slateBlue, text-headingSM"
            placeholder="Search for movies or TV series"
         />
      </main>
   )
}

export default Home
