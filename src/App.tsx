import "./App.css";
import About from "./Components/About/About";
import Bg from "./Components/Bg mousemove/Bg";
import Herosection from "./Components/Herosection/Herosection";
import Projects from "./Components/Projects/Projects";

function App() {
  return (
    <Bg>
      <div className="min-full min-h-screen mb-10 sm:min-w-11/12 sm:px-5">
        <Herosection />
      </div>
      <div className="min-full sm:min-w-11/12 my-40 sm:px-20">
        <About />
      </div>
      <div className="min-full sm:min-w-11/12 my-10 sm:px-20">
        <Projects />
      </div>
    </Bg>
  );
}

export default App;
