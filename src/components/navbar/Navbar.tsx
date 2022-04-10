import React from 'react'

const NavBar: React.FC = () => {
   return (
      <div className="pt-11 pb-11 bg-darkBlue w-[100%]">
         <div className="border-2 w-[90%] m-auto flex">
            <div>{/* logo */}</div>
            <nav></nav>
            <div>{/* profile */}</div>
         </div>
      </div>
   )
}

export default NavBar
