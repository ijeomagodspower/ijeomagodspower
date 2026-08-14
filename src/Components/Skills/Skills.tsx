import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div className="flex flex-col min-h-full mt-30 " id="skills">
      <div className="justify-center items-center mb-10 ">
        <h2
          className="text-4xl font-bold bg-linear-to-br from-primary via-secondary to-primary bg-clip-text text-transparent
        justify-center items-center text-center
        "
        >
          My Skills
        </h2>
      </div>
      <div
        className="grid grid-cols-2 grid-rows-3 min-w-full min-h-full gap-4 px-2 py-4 justify-center item-center 
      font-sora "
      >
        <div className="flex flex-row bg-lightbg px-2 py-4 gap-3 rounded-3xl items-center">
          <FaJs className="text-4xl text-yellow-500" />
          <p>JS</p>
        </div>
        <div className="flex flex-row bg-lightbg px-2 py-4 gap-3 rounded-3xl items-center">
          <FaHtml5 className="text-4xl text-orange-500" />
          <p>HTML</p>
        </div>
        <div className="flex flex-row bg-lightbg px-2 py-4 gap-3 rounded-3xl items-center">
          <FaCss3Alt className="text-4xl text-blue-500" />
          <p>CSS</p>
        </div>
        <div className="flex flex-row bg-lightbg px-2 py-4 gap-3 rounded-3xl items-center">
          <FaReact className="text-4xl text-blue-500" />
          <p>React</p>
        </div>
        <div className="flex flex-row bg-lightbg px-2 py-4 gap-3 rounded-3xl items-center">
          <FaGithub className="text-4xl text-orange-500" />
          <p>GitHub</p>
        </div>
        <div className="flex flex-row bg-lightbg px-2 py-4 gap-3 rounded-3xl items-center">
          <SiTailwindcss className="text-4xl text-blue-500" />
          <p>Tailwind Css</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
