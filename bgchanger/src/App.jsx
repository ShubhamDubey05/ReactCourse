import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  return (
   <div  className='w-full h-screen duration-500'
   style={{backgroundColor:color}}
   >
    <div className=' fixed flex flex-wrap justify-center bottom-12 fixed px-2 inset-x-0'>
      <div className='flex flex-wrap justify-center bg-white rounded-xl py-2 px-3 gap-2  '>
        <button
          onClick={()=> setColor("red")}
         className='outline-none px-5 py-1 rounded-4xl cursor-pointer'
         style={{backgroundColor:"red"}}
        > Red</button>
      <button
          onClick={()=> setColor("blue")}
         className='outline-none px-5 py-1 rounded-4xl cursor-pointer'
         style={{backgroundColor:"blue"}}
        > Blue</button>
       <button
          onClick={()=> setColor("green")}
         className='outline-none px-5 py-1 rounded-4xl cursor-pointer'
         style={{backgroundColor:"green"}}
        > Green</button>
        <button
          onClick={()=> setColor("orange")}
         className='outline-none px-5 py-1 rounded-4xl cursor-pointer'
         style={{backgroundColor:"orange"}}
        > Orange</button>
        <button
          onClick={()=> setColor("pink")}
         className='outline-none px-5 py-1 rounded-4xl cursor-pointer'
         style={{backgroundColor:"pink"}}
        > Pink</button>
      <button
          onClick={()=> setColor("gray")}
         className='outline-none px-5 py-1 rounded-4xl cursor-pointer'
         style={{backgroundColor:"gray"}}
        > Gray</button>
       <button
          onClick={()=> setColor("black")}
         className='outline-none px-5 py-1  text-white rounded-4xl cursor-pointer'
         style={{backgroundColor:"black"}}
        > Black</button>
        <button
          onClick={()=> setColor("lavender")}
         className='outline-none px-5 py-1 rounded-4xl cursor-pointer'
         style={{backgroundColor:"lavender"}}
        > Lavender</button>
      </div>
    </div>

   </div>
  )
}

export default App
