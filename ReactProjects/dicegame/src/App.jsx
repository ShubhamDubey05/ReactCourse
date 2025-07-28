import React, { useState } from "react";
import Start from "./components/Start";
import Play from "./components/Play";


function App() {
       const[isGameOn, setIsGameOn] =useState(false);
       const start= ()=>{
        setIsGameOn((prev) => !prev);
       }


  return (
    <>
      {isGameOn ? <Play/> : <Start toggle = {start} />}

    </>
  );
}

export default App;

