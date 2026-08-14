import { FaReact, FaHtml5, FaJs, FaCss3Alt, FaGithub } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl font-bold bg-linear-to-br from-primary via-secondary to-primary bg-clip-text text-transparent">
          My Skills
        </h2>
      </div>
      <div className="grid grid-cols-2 grid-rows-3 min-w-full min-h-full gap-4 px-2 py-4 justify-center item-center">
        <div className="bg-lightbg p-4 rounded-3xl">
          <FaJs className="text-4xl" />
          <p>Description of Skill 1</p>
        </div>
        <div className="bg-lightbg p-4 rounded-3xl">
          <FaHtml5 className="text-4xl" />
          <p>Description of Skill 2</p>
        </div>
        <div className="bg-lightbg p-4 rounded-3xl">
          <FaCss3Alt className="text-4xl" />
          <p>Description of Skill 3</p>
        </div>
        <div className="bg-lightbg p-4 rounded-3xl">
          <FaReact className="text-4xl" />
          <p>Description of Skill 4</p>
        </div>
        <div className="bg-lightbg p-4 rounded-3xl">
          <FaGithub className="text-4xl" />
          <p>Description of Skill 5</p>
        </div>
        <div className="bg-lightbg p-4 rounded-3xl">
          <SiTailwindcss className="text-4xl" />
          <p>Description of Skill 6</p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
