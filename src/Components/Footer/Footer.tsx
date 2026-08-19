import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { useContext } from "react";
import { ThemeContext, type Theme } from "../../ThemeContext";

const Footer = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: Theme;
  };

  const bgTheme = theme === "light" ? "bg-white" : "bg-darkbg";

  {
    /*Year on copyright*/
  }

  return (
    <section
      className={`flex-col ${bgTheme} min-w-full h-20 px-4 align-center justify-center sm:flex sm:justify-between sm:px-10 `}
      id="Footer"
    >
      <div className="w-full flex-col space-y-4 justify-center sm:flex-row">
        <h4 className="flex-row text-primary">
          <span className="text-hover-primary font-bold">IJ • </span>©
          {new Date().getFullYear()} Ijeoma Godspower
        </h4>
      </div>

      <div className="flex flex-row justify-center items-center gap-5 sm:justify-start ">
        <div>
          <a href="www.linkedin.com/in/ijeoma-ejeh-90540133a" target="_blank">
            <FaLinkedin className="text-primary hover:text-secondary w-6 h-6 hover:scale-120 transition-all duration-300" />
          </a>
        </div>

        <div>
          <a href="https://github.com/ijeomagodspower" target="_blank">
            <FaGithub className="text-primary hover:text-secondary w-6 h-6 hover:scale-120 transition-all duration-300" />
          </a>
        </div>

        <div>
          <a href="https://wa.me/2348133235527" target="_blank">
            <FaWhatsapp className="text-primary hover:text-secondary w-6 h-6 hover:scale-120 transition-all duration-300" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Footer;
