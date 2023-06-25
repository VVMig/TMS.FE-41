import { Box, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../../store/reducers/theme";

export const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state:any) => state.theme.theme);

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <Button  onClick={()=>{
        localStorage.setItem('theme', 'theme__light');
        dispatch(setTheme('theme__light'));
        document.body.classList.remove('theme__dark');
        document.body.classList.add('theme__light');
        //let lightBTN = document.getElementsByClassName('lightBTN');
  }}
      className={theme}
        sx={{
          width: "100%",
          borderRadius: 0,
        }}
        variant="outlined"
      >
        <LightModeIcon />
      </Button >
      <Button onClick={()=>{localStorage.setItem('theme', 'theme__dark');
        dispatch(setTheme('theme__dark'));
            document.body.classList.remove('theme__light');
            document.body.classList.add('theme__dark');
    }}
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
