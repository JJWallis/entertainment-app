import React from 'react'
import Logo from '../../assets/logo.svg'
import Link from 'next/link'
import Image from 'next/image'

const NavBar: React.FC = () => {
   return (
      <div className="pt-11 pb-11 bg-darkBlue w-[100%]">
         <div className="border-2 w-[90%] m-auto flex">
            <div className="grid place-items-center">
               <Image src={Logo} alt="" width="35px" height="35px" />
            </div>
            <nav>
               <ul>
                  <li>
                     <Link href="/" passHref>
                        {/* scvf */}
                     </Link>
                  </li>
               </ul>
            </nav>
            <div>{/* profile */}</div>
         </div>
      </div>
   )
}

export default NavBar
