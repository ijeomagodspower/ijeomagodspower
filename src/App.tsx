import "./App.css";
import Bg from "./Components/Bg mousemove/Bg";
import Herosection from "./Components/Herosection/Herosection";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Skills from "./Components/Skills/Skills";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Bg>
        <div className="min-full min-h-screen mb-10 px-3 sm:min-w-11/12 sm:px-5">
          <Herosection />
        </div>
        <div className="min-full sm:min-w-11/12 my-40 sm:px-20">
          <About />
        </div>
        <div className="min-full sm:min-w-11/12 my-15 sm:px-20">
          <Projects />
        </div>
        <div className="min-full sm:min-w-11/12 my-15 sm:px-20">
          <Skills />
        </div>
        <div className="min-full sm:min-w-11/12 my-30 pb-20 sm:px-20">
          <Contact />
        </div>
      </Bg>
      <div className="min-w-full">
        <Footer />
      </div>
    </>
  );
}

export default App;
