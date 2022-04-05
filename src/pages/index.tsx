import type { NextPage } from 'next'
import Film from '../components/film'

const Home: NextPage = () => {
   return (
      <main className="border-2 border-white grid grid-cols-movies">
         <Film />
         <Film />
         <Film />
         <Film />
      </main>
   )
}

// bookmark + film component

export default Home
