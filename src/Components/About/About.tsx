import MyPhoto from "../../assets/My-photo.png";
import { Circle } from "lucide-react";
import { FaCode } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="flex rounded-3xl px-2 pt-2 sm:px-6 sm:pt-6 sm:pb-0 bg-white/15 backdrop-blur-xl border border-white/20 shadow-[0_8px_32px_rgba(31,38,135,0.15)] 
    "
    >
      {/*About Grid Container8*/}
      <div className="min-w-full flex-col flex-wrap overflow-hidden space-y-2 sm:space-y-6 place-items-center text-bodytext ">
        <div className="flex flex-row min-w-full sm:space-x-6 space-x-2 ">
          <div
            className="flex flex-col flex-wrap place-content-center break-all p-1 bg-lightbg text-bodytext
           rounded-3xl w-2/4 h-50 sm:h-60 sm:w-1/4 text-center items-center "
          >
            <h3 className="text-2xl text-center font-bold font-inter ">
              IJEOMA <br /> GODSPOWER
            </h3>
            <div className=" w-1/4 border-t-2 font-sora border-dashed my-4 border-primary"></div>
            <h3 className="font-sora ">Frontend Developer</h3>
          </div>
          <div
            className="flex w-2/4 h-50 sm:h-60 bg-cover overflow-hidden object-cover bg-lightbg rounded-3xl
           sm:w-3/4 "
          >
            <img
              src={MyPhoto}
              className=" w-full h-full bg-cover object-cover rounded-3xl sm:hidden"
            />
            <div className="hidden w-full p-5 flex-wrap bg-lightbg rounded-3xl sm:flex sm:flex-col ">
              <div className="flex flex-row w-full justify-between">
                <h4 className="text-2xl font-bold font-inter ">About Me</h4>
                <Circle className="w-4 h-4 text-green-500 bg-green-600 rounded-full animate-pulse " />
              </div>
              <div className=" w-10 border-t-2 border-dashed mt-4 mb-4 border-primary"></div>
              <div>
                <p className="break-normal ">
                  I enjoy bringing ideas to life on the web. My journey into web
                  development started with curiosity and has grown into a
                  passion for building websites that people genuinely enjoy
                  using. Over the past year, I've dedicated myself to learning,
                  experimenting, and creating projects that challenge me to
                  become a better developer. I primarily work with React,
                  TypeScript, JavaScript, Tailwind CSS, HTML, and CSS, and I
                  also have experience building websites with WordPress.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* About Grid Container2 */}

        <div className="flex flex-col min-w-full space-y-2 md:space-x-6 md:space-y-6 md:flex-row">
          <div className="flex flex-col w-full min-h-full px-2 py-4 md:p-4 h-100 flex-wrap bg-lightbg md:basis-3/4 rounded-3xl ">
            <div className="flex flex-row w-full justify-between md:hidden">
              <h4 className="text-2xl font-bold font-inter ">About Me</h4>
              <Circle className="w-4 h-4 text-green-500 bg-green-600 rounded-full animate-pulse " />
            </div>
            <div className=" w-10 border-t-2 border-dashed mt-4 mb-8 border-primary md:hidden "></div>
            <div className="flex flex-col flex-wrap w-full min-h-full md:hidden ">
              <p className="break-all whitespace-normal indent-10 ">
                I enjoy bringing ideas to life on the web. My journey into web
                development started with curiosity and has grown into a passion
                for building websites and applications that people genuinely
                enjoy using. Over the past year, I've dedicated myself to
                learning, experimenting, and creating projects that challenge me
                to become a better developer every day. I primarily work with
                React, TypeScript, JavaScript, Tailwind CSS, HTML, and CSS, and
                I also have experience building websites with WordPress.
              </p>
            </div>

            {/*Desktop Focus section*/}

            <div className="hidden w-full p-5 h-100 flex-wrap bg-lightbg md:basis-1/4 rounded-3xl md:flex md:flex-col ">
              <div className="flex flex-row flex-wrap w-full justify-between">
                <h4 className="text-2xl font-bold font-inter ">Focus</h4>
                <Circle className="w-4 h-4 text-primary bg-hover-primary rounded-full animate-pulse " />
              </div>
              <div className=" w-10 border-t-2 border-dashed mt-4 mb-8 border-primary"></div>
              <div className="flex flex-col flex-wrap gap-5">
                <span className="flex flex-row gap-5 font-bold align ">
                  <FaCode className="w-4 h-4 mt-1 text-yellow-400 " />
                  <h3>Building modern interfaces with React.</h3>
                </span>
                <span className="flex flex-row gap-5  font-bold align ">
                  <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                  <h3>Developing powerful websites with WordPress.</h3>
                </span>
                <span className="flex flex-row gap-5  font-bold align ">
                  <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                  <h3>Focused on becoming a Full Stack Developer.</h3>
                </span>
                <span className="flex flex-row gap-5  font-bold align ">
                  <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                  <h3>Contributing solutions in various sectors.</h3>
                </span>
                <span className="flex flex-row gap-5  font-bold align ">
                  <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                  <h3>Building softwares to solve real-problems.</h3>
                </span>
                <span className="flex flex-row gap-5  font-bold align ">
                  <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                  <h3>Open to collab and remote opportunities.</h3>
                </span>
              </div>
            </div>
          </div>

          {/*Mobile Focus section*/}
          <div className="flex flex-col flex-wrap min-w-full px-2 py-4 h-full bg-lightbg rounded-3xl md:hidden">
            {/* Focus Section */}

            <div className="flex flex-row flex-wrap min-w-full justify-between">
              <h4 className="text-2xl font-bold font-inter ">Focus</h4>
              <Circle className="w-4 h-4 text-primary bg-hover-primary rounded-full animate-pulse " />
            </div>
            <div className=" w-10 border-t-2 border-dashed mt-4 mb-6 border-primary"></div>
            <div className="flex-col flex-wrap w-full space-y-4 px-2">
              <span className="flex flex-row gap-3 font-bold align ">
                <FaCode className="w-4 h-4 mt-1 text-yellow-400 " />
                <h3 className="break-words">
                  Building modern interfaces with React.
                </h3>
              </span>
              <span className="flex flex-row gap-3 font-bold align ">
                <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                <h3 className="break-words">
                  Developing powerful websites with WordPress.
                </h3>
              </span>
              <span className="flex flex-row gap-3  font-bold align ">
                <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                <h3 className="break-words">
                  Focused on becoming a Full Stack Developer.
                </h3>
              </span>
              <span className="flex flex-row gap-3  font-bold align ">
                <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                <h3 className="break-words">
                  Contributing solutions in various sectors.
                </h3>
              </span>
              <span className="flex flex-row gap-3  font-bold align ">
                <FaCode className="w-4 h-4 mt-1 text-yellow-400" />
                <h3 className="break-words">
                  Open to collab and remote opportunities.
                </h3>
              </span>
            </div>
          </div>

          <div className="hidden w-full h-100 overflow-hidden bg-cover flex-wrap bg-lightbg sm:basis-1/4 rounded-3xl sm:flex">
            <img
              src={MyPhoto}
              className="min-w-full min-h-full object-cover rounded-3xl "
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
