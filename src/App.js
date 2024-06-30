// import "./App.css"
import './ComponentCss/ComponentCss.css'
import { BrowserRouter } from "react-router-dom";
import Navbar1 from "./Components/Navbar";
import Intro from "./Components/Intro";
import Skills from "./Components/Skills";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar1 />
        <Intro />
        <Skills />
        <Portfolio />
        <Contact />
      </BrowserRouter>
    </>
  );
}

export default App;
