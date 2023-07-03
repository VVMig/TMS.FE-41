import { Box, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useTheme } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/useTheme";

export const ThemeSwitcher = () => {
  const { theme, changeTheme } = useContext<any>(ThemeContext);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button
        sx={{
          width: "100%",
          borderRadius: 0,
        }}
        variant={theme === Theme.light ? "contained" : "outlined"}
        onClick={changeTheme(Theme.light)}
      >
        <LightModeIcon />
      </Button>
      <Button
        sx={{
          width: "100%",
          borderRadius: 0,
        }}
        variant={theme === Theme.dark ? "contained" : "outlined"}
        onClick={changeTheme(Theme.dark)}
      >
        <DarkModeIcon />
      </Button>
    </Box>
  );
};
