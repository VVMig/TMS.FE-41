import { Box, Button } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

export const ThemeSwitcher = () => {
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
        variant="contained"
      >
        <LightModeIcon />
      </Button>
      <Button
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
