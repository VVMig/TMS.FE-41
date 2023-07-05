import { createContext, useCallback, useState } from "react";
import { Theme } from "../constants/Theme";

export const ThemeContext = createContext<{
  onChangeTheme: (newTheme: Theme) => (...args: any[]) => void;
  theme: Theme;
} | null>(null);

export const ThemeProvider = ThemeContext.Provider;

export const useTheme = () => {
  const [theme, setTheme] = useState(Theme.light);

  const onChangeTheme = useCallback(
    (newTheme: Theme) =>
      (...args: any[]) => {
        setTheme(newTheme);
      },
    []
  );

  return { theme, onChangeTheme };
};
