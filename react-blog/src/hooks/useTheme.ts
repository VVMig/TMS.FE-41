import { createContext, useContext, useState, useCallback } from "react";
import { Theme } from "../constants/Theme";

export const ThemeContext = createContext<{
  changeTheme: (newTheme: Theme) => (...args: any[]) => void;
  theme: Theme;
} | null>(null);

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  const [theme, setTheme] = useState(Theme.light);

  const changeTheme = useCallback(
    (newTheme: Theme) =>
      (...args: any[]) => {
        setTheme(newTheme);
      },
    []
  );

  return { theme, changeTheme };
};
