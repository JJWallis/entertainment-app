import type { NextPage } from 'next'
import data from '../data.json'
import Image from 'next/image'

const Home: NextPage = () => {
   return (
      <main>
         <section aria-labelledby={''} className="border-2 border-red">
            <button className='className="block border-2'>
               {/* <Image
                  src={data[0].thumbnail.regular.small}
                  alt="lol"
                  width={'100%'}
                  height={'100%'}
               /> */}
            </button>
         </section>

         {/*  grid layout | btn bookark | raw SVG */}
      </main>
   )
}

export default Home
