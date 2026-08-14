import { ArrowBigRight } from "lucide-react";
import Cyberhead from "../../../src/assets/cybereye.svg";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext, type Theme } from "../../ThemeContext";

const Herosection = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: Theme;
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  };

  return (
    <section
      id="homehero"
      className="flex flex-col items-center gap-y-40 sm:flex-row"
    >
      <div className="flex justify-between mt-30 sm:mt-35">
        <div className="flex flex-col social-icon-con gap-20.5 pl-2 pr-3 items-start sm:gap-21.5 sm:pt-6 sm:pr-5 sm:pl-3">
          <a href="www.linkedin.com/in/ijeoma-ejeh-90540133a" target="_blank">
            <FaLinkedin className="text-primary hover:text-secondary w-6 h-6 hover:scale-120 transition-all duration-300" />
          </a>
          <a href="https://github.com/ijeomagodspower" target="_blank">
            <FaGithub
              className="text-secondary
            hover:text-white w-6 h-6 hover:scale-120 transition-all duration-300"
            />
          </a>
          <a href="https://wa.me/2348133235527" target="_blank">
            <FaWhatsapp className="text-secondary hover:text-white sm:text-primary sm:hover:text-secondary w-6 h-6 hover:scale-120 transition-all duration-300" />
          </a>
        </div>

        <div className="flex flex-col gap-y-10 sm:gap-y-5 ">
          <div className="flex flex-col gap-y-5 sm:gap-y-4 ">
            <h3
              className={` ${theme === "light" ? "text-primary" : "text-lightbg"} font-inter text-2xl font-bold animate-bounce text-primary sm:text-5xl `}
            >
              Frontend Developer
            </h3>
            <h1 className="font-inter text-5xl sm:text-7xl font-bold bg-linear-to-br from-primary via-secondary to-primary bg-clip-text text-transparent ">
              Hi, i'm Ijeoma Godspower
            </h1>
            <p className="font-sora text-secondary sm:text-lg sm:hidden ">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              <br />
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
            <p className="hidden font-sora text-secondary sm:text-lg sm:flex ">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>

          <div className="flex flex-wrap mt-8 -ml-10 gap-4 font-sora sm:ml-0 sm:mt-5 pl-2 sm:pl-0 ">
            <button
              className="flex flex-row gap-4 px-6 sm:px-8 py-4 items-center cursor-pointer text-center text-md rounded-full text-lightbg bg-primary font-bold 
            transition-all duration-300 hover:scale-120 hover:text-primary hover:bg-lightbg basis-1/2 sm:basis-1/4
            "
            >
              <a href="#projects">My Work</a>
              <ArrowBigRight />
            </button>

            <button
              className="border-lightbg border-2 text-lightbg bg-secondary px-6 sm:px-8 py-4 items-center 
              text-center cursor-pointer text-md rounded-full font-bold
            transition-all duration-300 hover:scale-120 hover:text-primary hover:bg-lightbg 
            "
            >
              <a
                href="https://wa.me/2348133235527"
                className="ml-2"
                target="_blank"
              >
                Contact Me
              </a>
            </button>
          </div>
        </div>
      </div>

      <div className="flex animate-bounce-slow overflow-hidden ">
        <img
          src={Cyberhead}
          className="sm:w-150 sm:h-105 w-70 h-70 shadow-[0_8px_32px_rgba(31,38,135,0.15)] rounded-full bo backdrop-blur-xl"
        ></img>
      </div>
    </section>
  );
};

export default Herosection;
