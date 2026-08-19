import { ThemeContext, type Theme } from "../../ThemeContext";
import { useContext } from "react";
import ShinyText from "../../../@/components/ShinyText";
import { MdEmail } from "react-icons/md";
import { IoCall } from "react-icons/io5";
import { PopupButton } from "react-calendly";

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
          className="flex flex-col w-full bg-lightbg rounded-3xl p-2 py-6 
       md:flex-row md:p-6
      "
        >
          <div className="flex-col w-full md:w-[calc(100% - 12px)]">
            <ShinyText
              text="Let's Work Together"
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
              Have a project in mind or an idea you’d like to bring to life? I’d
              love to hear about it. Let’s create something impactful together.
            </p>
          </div>
          {/* 2nd Col */}
          <div className="flex-col w-full md:w-[calc(100% - 12px)] text-lg font-bold align-middle space-y-10">
            <div className="flex w-full gap-6 text-primary">
              <IoCall className="w-6 h-6 text-primary" />
              <h3>(+234)-8133235527</h3>
            </div>
            <div className="flex w-full gap-6 text-primary">
              <MdEmail className="w-6 h-6 text-primary" />
              <h3>ejehijeoma197@gmail.com</h3>
            </div>
            <div className="flex justify-start">
              <div className="flex place-content-center py-4 px-8 rounded-full bg-primary ">
                <PopupButton
                  url="https://calendly.com/your_scheduling_page"
                  /*
                   * react-calendly uses React's Portal feature (https://reactjs.org/docs/portals.html) to render the popup modal. As a result, you'll need to
                   * specify the rootElement property to ensure that the modal is inserted into the correct domNode.
                   */
                  rootElement={document.getElementById("root") as HTMLElement}
                  text="Schedule Call"
                  className="text-white text-md"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
