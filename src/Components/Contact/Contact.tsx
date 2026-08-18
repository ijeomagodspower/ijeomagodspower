import { ThemeContext, type Theme } from "../../ThemeContext";
import { useContext } from "react";
import ShinyText from "../../../@/components/ShinyText";

const Contact = () => {
  const { theme } = useContext(ThemeContext) as {
    theme: Theme;
  };

  const txtSwPry = theme === "light" ? "text-primary" : "text-lightbg";

  {
    /*const txtSwSec = theme === "light" ? "text-green" : "text-lightbg"; */
  }

  return (
    <section
      id="contact"
      className="flex flex-col w-full my-10 justify-center md:w-[calc(100% - 20px)]"
    >
      <div className="flex-col my-10">
        <h3
          className={` ${txtSwPry} text-2xl text-center sm:text-4xl font-bold `}
        >
          Book a Call
        </h3>
        <h2 className="text-4xl font-bold bg-linear-to-br from-primary via-secondary to-primary bg-clip-text text-transparent text-center">
          Speak With Me
        </h2>
      </div>

      {/*Contact Context */}
      <div className="flex flex-col w-full bg-white/15 border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)] p-2 md-p-6 rounded-3xl">
        <div
          className="flex flex-col w-full bg-lightbg rounded-3xl p-2 
       md:flex-row md:p-6
      "
        >
          <div className="flex-col w-full md:w-[calc(100% - 12px)]">
            <ShinyText
              text="Get in Touch"
              speed={2}
              delay={0}
              color="#00b862"
              shineColor="#ffffff"
              spread={120}
              direction="left"
              yoyo={false}
              pauseOnHover={false}
              disabled={false}
              className="text-2xl md:text-5xl font-bold"
            />
            <div className="w-10 border-t-2 border-dashed mt-4 mb-8 border-secondary"></div>
            <p className="flex-col flex-wrap wrap-break font-sora text-secondary sm:text-lg">
              xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
            </p>
          </div>
          {/* 2nd Col */}
          <div className="flex-col w-full md:w-[calc(100% - 12px)]"></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
