import type { NextPage } from 'next'
import Films from '../data.json'
import Film from '../components/film'
import { FilmData } from '../types/Film.interface'

const Home: NextPage = () => {
   const renderFilms = (films: FilmData[]) => {}

   return (
      <main className="grid grid-cols-movies gap-8">
         <Film />
         <Film />
      </main>
   )
}

export default Home
