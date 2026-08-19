import React, { useContext } from "react";
import { useRef } from "react";
import Header from "../Header/Header";
import { ThemeContext, type Theme } from "../../ThemeContext";

type Bgprops = {
  children: React.ReactNode;
};

const Bg = ({ children }: Bgprops) => {
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!bgRef.current) return;
    const rect = bgRef.current.getBoundingClientRect();
    bgRef.current.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    bgRef.current.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };
  const bgRef = useRef<HTMLDivElement>(null);

  {
    /*Theme Light and Dark Mode*/
  }

  const { theme, setTheme } = useContext(ThemeContext) as {
    theme: "light" | "dark";
    setTheme: React.Dispatch<React.SetStateAction<Theme>>;
  };

  const onSet = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);

    document.documentElement.classList.remove("light", "dark");
    document.documentElement.classList.add(newTheme);
  };

  return (
    <div
      ref={bgRef}
      onMouseMove={handleMouseMove}
      className={`${theme} h-full min-w-full max-w-full justify-center
        select-none transition-colors duration-300 pt-10 pb-20 px-3 sm:px-5  `}
      style={
        {
          "--mouse-x": "50%",
          "--mouse-y": "50%",

          backgroundColor: theme === "light" ? "#ffffff" : "#1a1a1a",
          backgroundImage:
            theme === "light"
              ? `radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), rgba(255, 255, 255, 1), transparent 1000%),
                 radial-gradient(rgba(144, 74, 255, 0.9) 1px, transparent 8% )`
              : `radial-gradient(100px circle at var(--mouse-x) var(--mouse-y), rgba(144, 74, 255, 0.3), transparent 1000%),
                 radial-gradient(rgba(0, 184, 98, 0.3) 1px, transparent 9% )`,

          backgroundSize: "auto, 40px 40px",
          backgroundRepeat: "no-repeat, repeat",
        } as React.CSSProperties
      }
    >
      <Header onSet={onSet} themeState={theme} />
      {children}
    </div>
  );
};

export default Bg;
