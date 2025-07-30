import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
     const[counter, setCounter] = useState(0);
  function addValue (){
      setCounter(counter =>{
        if(counter >= 20) return 20;
        return counter+1;
      });
  }
  const remove = ()=>{
       setCounter(counter=>{
        if(counter <=0) return 0
        return counter-1;
       });
  }
  

  return (
    <>
     <h1> The value : {counter}</h1>
     <button onClick={addValue}> Add</button>
     <br/>
     <p>  Shubham  : { counter}</p>
     <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
