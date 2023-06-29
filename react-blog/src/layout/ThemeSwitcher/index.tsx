import { Box, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/reducers/theme";
import { useTheme } from "@emotion/react";
import themeSelector from "./theme";
import { AppDispatch } from "../../store";
import  Theme from "../../constants/Theme"

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = themeSelector();
  const onClickThemeDark = () => {localStorage.setItem('theme', Theme.darkTheme);
  dispatch(setTheme(Theme.darkTheme));
      document.body.classList.remove(Theme.lightTheme);
      document.body.classList.add(Theme.darkTheme);
}
const onClickThemeLight = ()=>{
  localStorage.setItem('theme', Theme.lightTheme);
  dispatch(setTheme(Theme.lightTheme));
  document.body.classList.remove(Theme.darkTheme);
  document.body.classList.add(Theme.lightTheme);
}
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button  onClick={()=>{onClickThemeLight()}}
      className={theme}
        sx={{
          width: "100%",
          borderRadius: 0,
        }}
        variant="outlined"
      >
        <LightModeIcon />
      </Button >
      <Button onClick={()=>{onClickThemeDark()}}
    className={theme}
        sx={{
          width: "100%",
          borderRadius: 0,
        }}
        variant="outlined"
      >
        <DarkModeIcon />
      </Button>
    </Box>
  );
};
