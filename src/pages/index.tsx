import type { NextPage } from 'next'
import data from '../data.json'
import Image from 'next/image'

const Home: NextPage = () => {
   return (
      <main>
         <section aria-labelledby={''} className="border-2 border-red">
            {/* <button className='className="block'>
               {/* <Image
                  src={data[0].thumbnail.regular.small}
                  alt="lol"
                  width={'100%'}
                  height={'100%'}
               /> */}
            {/* </button>  */}
            <button
               aria-label="bookmark dynamic-film"
               className="block bg-[#000] bg-opacity-50 hover:bg-white"
            >
               <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                     d="m10.518.75.399 12.214-5.084-4.24-4.535 4.426L.75 1.036l9.768-.285Z"
                     stroke="#FFF"
                     strokeWidth="1.2"
                     fill="none"
                  />
               </svg>
            </button>
         </section>
      </main>
   )
}

// bookmark + film component

export default Home
