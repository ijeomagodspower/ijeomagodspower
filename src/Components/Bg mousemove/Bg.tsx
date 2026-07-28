import React, { useState } from "react";
import { useRef } from "react";
import Header from "../Header/Header";
import { ThemeContext } from "../../ThemeContext";

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
  const [theme, setTheme] = useState("dark");

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
      className={`${theme} min-h-screen min-w-full max-w-full justify-center
        select-none transition-colors duration-300 py-10 px-5  `}
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
      <ThemeContext.Provider value={{ theme, onSet }}>
        <Header onSet={onSet} themeState={theme} />
        {children}
      </ThemeContext.Provider>
    </div>
  );
};

export default Bg;
