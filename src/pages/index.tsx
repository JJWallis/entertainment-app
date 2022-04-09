import type { NextPage } from 'next'
import Film from '../components/film'

const Home: NextPage = () => {
   return (
      <main className="grid grid-cols-movies gap-8">
         <Film />
         <Film />
      </main>
   )
}

export default Home
