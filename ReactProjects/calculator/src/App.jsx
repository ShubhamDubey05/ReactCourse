import css from "./App.module.css"
import Button from "./components/Button"
import Display from "./components/Display"

const App = () => {
  return (
    <center>
 <div className={css.calculator}>
     <Display/>
     <Button/>
    </div>
    </center>
   
  )
}

export default App
