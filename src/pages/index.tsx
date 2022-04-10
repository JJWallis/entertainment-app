import type { NextPage } from 'next'
import Navbar from '../components/navbar'
import Films from '../data.json'

const Home: NextPage = () => {
   return (
      <main>
         <Navbar />
      </main>
   )
}

export default Home
