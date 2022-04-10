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
                        <a>
                           <svg
                              width="20"
                              height="20"
                              xmlns="http://www.w3.org/2000/svg"
                              className="group"
                           >
                              <path
                                 d="M8 0H1C.4 0 0 .4 0 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11H1c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1ZM19 0h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1V1c0-.6-.4-1-1-1Zm0 11h-7c-.6 0-1 .4-1 1v7c0 .6.4 1 1 1h7c.6 0 1-.4 1-1v-7c0-.6-.4-1-1-1Z"
                                 fill="#5A698F"
                                 className="group-hover:fill-white cursor-pointer transition-fill duration-200 ease-in-out"
                              />
                           </svg>
                        </a>
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
