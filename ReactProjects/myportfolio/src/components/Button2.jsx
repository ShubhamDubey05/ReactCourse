import React from 'react'

const Button2 = ({ icon }) => {
  return (
    <button className="flex items-center space-x-2 px-4 py-2 bg-[#141618] text-white font-semibold rounded-lg hover:text-yellow-400 transition">
      {icon}
    </button>
  )
}

export default Button2
