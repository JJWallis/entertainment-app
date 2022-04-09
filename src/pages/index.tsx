import type { NextPage } from 'next'
import Films from '../data.json'
import Film from '../components/film'
import { FilmData } from '../types/Film.interface'

const Home: NextPage = () => {
   const renderFilms = (films: FilmData[]) => {
      return films.map((film, idx) => <Film key={idx} data={film} />)
   }

   return (
      <main className="grid grid-cols-movies gap-8">{renderFilms(Films)}</main>
   )
}

export default Home
