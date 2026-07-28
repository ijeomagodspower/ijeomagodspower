import {
  ContactRound,
  Folder,
  Home,
  Toolbox,
  Wrench,
  Sun,
  MessageCircleMore,
  MoonStar,
} from "lucide-react";

type Props = {
  themeState: string;
  onSet: () => void;
};

const Header = ({ onSet, themeState }: Props) => {
  return (
    <div className="flex flex-wrap fixed z-50 justify-between min-w-full max-w-full pr-2 sm:px-5 sm:pr-15 sm:mb-10  ">
      <div
        className="hidden p-4 bg-white/15 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)] rounded-full
        transition-all duration-300 hover:scale-120 cursor-pointer
        group
        sm:flex
        "
        onClick={onSet}
      >
        {themeState === "light" ? (
          <Sun className="w-6 h-6 text-yellow-400 group-hover:text-secondary " />
        ) : (
          <MoonStar className="text-primary group-hover:text-secondary " />
        )}
      </div>
      {/* MOBILE NAVIGATION */}
      <nav
        className="flex min-w-full sm:min-w-11/12 items-center justify-between px-3 py-4 gap-4
      bg-white/10 border border-white/20 rounded-full backdrop-blur-2xl shadow-[0_8px_32px_rgba(31,38,135,0.15)]
      transition-all duration-300 hover:scale-105
      sm:hidden
      "
      >
        <a href="/" className="text-lg font-semibold group">
          <Home className="text-primary hover:text-secondary hover:scale-120" />
        </a>
        <a href="#about" className="text-lg font-semibold">
          <Toolbox className="text-primary hover:text-secondary hover:scale-120" />
        </a>
        <a href="#projects" className="text-lg font-semibold">
          <Folder className="text-primary hover:text-secondary hover:scale-120" />
        </a>
        <a href="#skills" className="text-lg font-semibold">
          <Wrench className="text-primary hover:text-secondary hover:scale-120" />
        </a>
        <a href="#contact" className="text-lg font-semibold">
          <ContactRound className="text-primary hove-text-secondary hover:scale-120" />
        </a>
        <div onClick={onSet} className="sm:hidden">
          {themeState === "light" ? (
            <MoonStar className="text-yellow-500 hover:text-secondary " />
          ) : (
            <Sun className="w-6 h-6 text-yellow-400 hover:text-secondary " />
          )}
        </div>
      </nav>

      {/* DESKTOP NAVIGATION */}
      <nav
        className="hidden items-center justify-between px-10 py-4 gap-10
        bg-white/10 border border-white/20 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)]
        transition-all duration-300 hover:scale-110
        sm:flex"
      >
        <a
          href="#homehero"
          className="relative group items-center text-lg font-semibold  "
        >
          <Home className="text-primary hover:text-secondary hover:scale-120" />
          <h4
            className="flex opacity-0 absolute group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-500 
          text-secondary -ml-3 "
          >
            Home
          </h4>
        </a>

        <a
          href="#about"
          className="relative group items-center text-lg font-semibold"
        >
          <Toolbox className="text-primary hover:text-secondary hover:scale-120" />

          <h4
            className="flex opacity-0 absolute group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-500 
          text-secondary -ml-15 "
          >
            About/Experience
          </h4>
        </a>

        <a
          href="#projects"
          className="relative group items-center text-lg font-semibold"
        >
          <Folder className="text-primary hover:text-secondary hover:scale-120" />
          <h4
            className="flex opacity-0 absolute group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-500 
          text-secondary -ml-5 "
          >
            Projects
          </h4>
        </a>

        <a
          href="#skills"
          className="relative group items-center text-lg font-semibold"
        >
          <Wrench className="text-primary hover:text-secondary hover:scale-120" />

          <h4
            className="flex opacity-0 absolute group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-500 
          text-secondary -ml-2 "
          >
            Skills
          </h4>
        </a>
        <a
          href="#contact"
          className="relative group items-center text-lg font-semibold"
        >
          <ContactRound className="text-primary hover:text-secondary hover:scale-120" />
          <h4
            className="flex opacity-0 absolute group-hover:opacity-100 group-hover:translate-y-5 transition-all duration-500 
          text-secondary -ml-5 "
          >
            Contact
          </h4>
        </a>
      </nav>
      <div className="hidden transition-all duration-300 hover:scale-120 group sm:flex cursor-pointer">
        <button
          className="p-4 flex gap-2 cursor-pointer
          bg-white/10 border border-white/20 rounded-full backdrop-blur-xl shadow-[0_8px_32px_rgba(31,38,135,0.15)]
          
        "
        >
          <MessageCircleMore className="text-primary group-hover:text-secondary" />
        </button>
      </div>
    </div>
  );
};

export default Header;
