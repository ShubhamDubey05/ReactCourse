import React from 'react'

const Failed = ({data}) => {
  return (
    <div className="h-full w-[300px] flex-shrink-0 rounded-xl p-5 bg-green-400">
        <div className="flex justify-between items-center">
          <h3 className="bg-blue-500 text-sm px-5 py-1 rounded-xl">{data.category}</h3>
          <h4 className="text-sm">{data.date}</h4>
        </div>
        <h1 className="text-2xl mt-5 font-semibold">{data.title}</h1>
        <p className="text-sm mt-3">
          {data.description}
        </p>
        <div className='mt-4 flex justify-center '>
           <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Failed</button>
          
        </div>
      </div>
  )
}

export default Failed
