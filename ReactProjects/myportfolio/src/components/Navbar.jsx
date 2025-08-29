import React from 'react'

const Navbar = () => {
  return (
    <div className="w-full h-24 sticky top-0 z-50 bg-[#212428] border-b border-gray-600 flex items-center px-6">
      
      {/* Logo Left */}
      <div className="flex-shrink-0 mr-5">
        <img src="./logo.png" alt="Logo" className="w-16 h-16 " />
      </div>

      {/* Menu Right */}
      <ul className="flex items-center gap-10 font-sm ml-auto h-full">
        <li className="flex items-center text-gray-400 cursor-pointer hover:text-yellow-300 duration-300 h-full">
          Home
        </li>
        <li className="flex items-center text-gray-400 cursor-pointer hover:text-yellow-300 duration-300 h-full">
          Features
        </li>
        <li className="flex items-center text-gray-400 cursor-pointer hover:text-yellow-300 duration-300 h-full">
          Projects
        </li>
        <li className="flex items-center text-gray-400 cursor-pointer hover:text-yellow-300 duration-300 h-full">
          Resume
        </li>
        <li className="flex items-center text-gray-400 cursor-pointer hover:text-yellow-300 duration-300 h-full">
          Contact
        </li>
      </ul>
      
    </div>
  )
}

export default Navbar
