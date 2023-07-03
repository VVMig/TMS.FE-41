import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
import { authService } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/user";
import "./style.scss";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ThemeProvider, useTheme } from "../hooks/useTheme";
import { Theme } from "../constants/Theme";
import { Header } from "./Header";
import { Footer } from "./Footer";
import clsx from "clsx";

export const Root = () => {
  const dispath = useDispatch();

  const authUser = async () => {
    const accessToken = localStorage.getItem(LOCAL_STORAGE_KEYS.ACCESS_TOKEN);

    if (accessToken) {
      try {
        const { data } = await authService.getCurrentUser();

        dispath(setUser(data));
      } catch (error) {}
    }
  };

  const themeValue = useTheme();

  const muiTheme = createTheme({
    palette: {
      mode: themeValue.theme,
    },
  });

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider value={themeValue}>
        <div
          className={clsx("wrapper", {
            "wrapper-dark": themeValue.theme === Theme.dark,
          })}
        >
          <Header />
          <main>
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
