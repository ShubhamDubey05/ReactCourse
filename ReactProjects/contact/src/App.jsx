import "./App.css";
import Contact from "./components/ContactForm/Contact";
import Header from "./components/ContactHeader/Header";
import Navigation from "./components/Navigation/Navigation";


function App() {

  return (
    <>
      <Navigation />
      <Header /> 
      <Contact/>
    </>
  );
}

export default App;
