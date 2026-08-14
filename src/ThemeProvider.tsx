import Bg from "./Components/Bg mousemove/Bg";
import { ThemeContext, type Theme } from "./ThemeContext";
import { useState } from "react";

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<Theme>("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
      <Bg children={""} />
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
