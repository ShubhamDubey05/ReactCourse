import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <h1 className='bg-amber-500 text-2xl p-3 rounded-2xl mb-2'>Shubham Tailwind</h1>
         <Card title="Shubham"/>
         <Card title = "Kariman"/>
      
    </>
  )
}

export default App
