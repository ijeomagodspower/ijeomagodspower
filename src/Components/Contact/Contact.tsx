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
          className="flex flex-col w-full bg-lightbg rounded-3xl p-2 pt-10 pb-6 space-10
           md:flex-row md:p-6 md:gap-10"
        >
          <div className="flex-col w-full md:w-[calc(100% - 12px)] ">
            <div className="md:hidden">
              <ShinyText
                text="Let's Work Together"
                speed={2}
                delay={0}
                color="#904aff"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
                className="font-inter text-2xl font-bold "
              />
            </div>
            <div className="hidden md:flex">
              <ShinyText
                text="Let's Work Together"
                speed={2}
                delay={0}
                color="#904aff"
                shineColor="#ffffff"
                spread={120}
                direction="left"
                yoyo={false}
                pauseOnHover={false}
                disabled={false}
                className="font-inter text-5xl font-bold"
              />
            </div>
            <div className="w-10 border-t-2 border-dashed mt-4 mb-12 border-secondary"></div>
            <p className="flex-col flex-wrap wrap-break font-sora text-secondary sm:text-lg">
              Have a project in mind or an idea you’d like to bring to life? I’d
              love to hear about it. Let’s create something impactful together.
            </p>
          </div>
          {/* 2nd Col */}
          <div className="flex flex-col w-full md:w-[calc(100% - 12px)] text-md font-bold py-6 space-y-8 pt-10 md:text-lg md:pt-0">
            <div className="flex-col justify-start align-middle items-center pt-6 space-y-6">
              <div className="flex w-full gap-6 text-secondary items-center">
                <IoCall className="w-6 h-6 text-secondary" />
                <h3>(+234)-8133235527</h3>
              </div>
              <div className="flex w-full gap-6 text-secondary items-center">
                <MdEmail className="w-6 h-6 text-secondary" />
                <h3>ejehijeoma197@gmail.com</h3>
              </div>
            </div>

            <div className="flex justify-start">
              <div className="flex place-content-center py-4 px-8 rounded-full bg-secondary hover:bg-primary transition-all duration-300 ">
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
