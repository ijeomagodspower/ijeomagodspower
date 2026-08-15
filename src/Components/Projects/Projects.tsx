import { CircleArrowOutUpRight } from "lucide-react";
import Capstone from "../../assets/Capstone.jpg";
import UserForm from "../../assets/userform.jpg";
import Glnd from "../../assets/Glnd.jpg";
import Tevik from "../../assets/Tevikextract.jpg";
import { useContext } from "react";
import { ThemeContext, type Theme } from "../../ThemeContext";

const Projects = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: Theme;
  };
  const txtSwPry = theme === "light" ? "text-primary" : "text-lightbg";
  const txtSwBt = theme === "light" ? "text-bodytext" : "text-lightbg/80";

  return (
    <div id="projects" className="flex flex-col gap-y-6">
      {/* Project Heading */}
      <div className="flex flex-col justify-between items-center font-inter text-center mb-10 gap-y-2">
        <h3
          className={` ${txtSwPry} text-2xl text-lightbg sm:text-4xl font-bold `}
        >
          Portfolio
        </h3>
        <h2 className="text-4xl font-bold bg-linear-to-br from-primary via-secondary to-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
      </div>
      {/* Projects Container */}
      <div
        className="flex flex-col gap-y-20 min-w-full max-h-full py-2 pr-2 
         sm:flex-row sm:flex-wrap sm:min-w-full sm:gap-y-6 sm:gap-x-6 "
      >
        {/* Project 1 */}

        <div className="flex flex-col gap-y-6 basis-full sm:basis-[calc(50%-12px)] ">
          <div className="flex flex-row justify-between w-full px-4">
            <h3
              className={` ${txtSwPry} text-2xl sm:text-3xl font-bold text-lightbg `}
            >
              Capstone Project
            </h3>
            <a
              href="https://capstoneproject19.netlify.app/"
              target="_blank"
              className="flex flex-row gap-2 px-2 items-center text-center text-sm text-primary bg-lightbg 
            cursor-pointer border-none rounded-full transition-all duration-300 scale-120 hover:text-lightbg hover:bg-primary"
            >
              <span>View</span>
              <CircleArrowOutUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] p-2 sm:p-4 rounded-3xl object-cover h-80 ">
            <img
              src={Capstone}
              alt="Capstone Project"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className=" flex flex-row justify-start gap-x-6">
            <div
              className={`${txtSwBt} rounded-3xl bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32_rgba(31,38,135,0.15)] px-2 `}
            >
              <p>Html</p>
            </div>
            <div
              className={`${txtSwBt} rounded-3xl bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32_rgba(31,38,135,0.15)] px-2 `}
            >
              <p>Css</p>
            </div>
            <div
              className={`${txtSwBt} rounded-3xl bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32_rgba(31,38,135,0.15)] px-2 `}
            >
              <p>Javascript</p>
            </div>
          </div>
        </div>

        {/* Project 2 */}

        <div className="flex flex-col gap-y-6 basis-full sm:basis-[calc(50%-12px)]">
          <div className="flex flex-row flex-wrap justify-between w-full px-4">
            <h3
              className={` ${txtSwPry} text-2xl sm:text-3xl font-bold text-lightbg `}
            >
              User Data Form
            </h3>
            <a
              href="https://js-user-data-form.vercel.app/"
              target="_blank"
              className="flex flex-row flex-wrap gap-2 px-2 items-center text-center text-sm text-primary bg-lightbg 
            cursor-pointer border-none rounded-full transition-all duration-300 scale-120 hover:text-lightbg hover:bg-primary"
            >
              <span>View</span>
              <CircleArrowOutUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] p-2 sm:p-4 rounded-3xl object-cover h-80 ">
            <img
              src={UserForm}
              alt="User Data Form Project"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className=" flex flex-row justify-start gap-x-6">
            <div
              className={`${txtSwBt} rounded-3xl bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32_rgba(31,38,135,0.15)] px-2 `}
            >
              <p>Html</p>
            </div>
            <div
              className={`${txtSwBt} rounded-3xl bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32_rgba(31,38,135,0.15)] px-2 `}
            >
              <p>Css</p>
            </div>
            <div
              className={`${txtSwBt} rounded-3xl bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32_rgba(31,38,135,0.15)] px-2 `}
            >
              <p>Javascript</p>
            </div>
          </div>
        </div>

        {/* Project 3 */}

        <div className="flex flex-col gap-y-6 basis:full sm:basis-[calc(50%-12px)] ">
          <div className="flex flex-row justify-between w-full px-4">
            <h3
              className={` ${txtSwPry} text-2xl sm:text-3xl font-bold text-lightbg `}
            >
              GLN Store
            </h3>
            <a
              href="https://goldenlifenature.com/"
              target="_blank"
              className="flex flex-row gap-2 px-2 items-center text-center text-sm text-primary bg-lightbg 
            cursor-pointer border-none rounded-full transition-all duration-300 scale-120 hover:text-lightbg hover:bg-primary"
            >
              <span>View</span>
              <CircleArrowOutUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] p-2 sm:p-4 rounded-3xl object-cover h-80 ">
            <img
              src={Glnd}
              alt="Golden Life Nature Project"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className=" flex flex-row justify-start gap-x-6">
            <div
              className={`${txtSwBt} rounded-3xl bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32_rgba(31,38,135,0.15)] px-2 `}
            >
              <p>Wordpress</p>
            </div>
          </div>
        </div>

        {/* Project 4 */}

        <div className="flex flex-col gap-y-6 basis:full sm:basis-[calc(50%-12px)] ">
          <div className="flex flex-row justify-between w-full px-4 ">
            <h3
              className={` ${txtSwPry} text-2xl sm:text-3xl font-bold text-lightbg `}
            >
              Tevik Store
            </h3>
            <a
              href="https://tevikextract.com/"
              target="_blank"
              className="flex flex-row gap-2 px-2 items-center text-center text-sm text-primary bg-lightbg 
            cursor-pointer border-none rounded-full transition-all duration-300 scale-120 hover:text-lightbg hover:bg-primary"
            >
              <span>View</span>
              <CircleArrowOutUpRight className="w-3 h-3" />
            </a>
          </div>
          <div className="flex bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)] p-2 sm:p-4 rounded-3xl h-80 ">
            <img
              src={Tevik}
              alt="Tevik Extract Project"
              className="w-full h-full object-cover rounded-3xl"
            />
          </div>
          <div className=" flex flex-row justify-start gap-x-6">
            <div
              className={`${txtSwBt} rounded-3xl bg-white/15 border-white/20 backdrop-blur-xl shadow-[0_8px_32_rgba(31,38,135,0.15)] px-2 `}
            >
              <p>Wordpress</p>
            </div>
          </div>
        </div>

        {/* Project 5 */}
      </div>
    </div>
  );
};

export default Projects;
