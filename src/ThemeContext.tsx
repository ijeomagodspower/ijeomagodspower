import { createContext } from "react";

type ThemeContextProp = {
  theme: string;
  onSet: () => void;
};

export const ThemeContext = createContext<ThemeContextProp>({
  theme: "light",
  onSet: () => {},
});
