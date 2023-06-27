import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
import { authService } from "../services/auth";
import { useDispatch } from "react-redux";
import { setUser } from "../store/actions/user";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./styles.scss";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ThemeProvider, useTheme } from "../hooks/useTheme";
import clsx from "clsx";
import { Theme } from "../constants/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Root = () => {
  const themeValues = useTheme();

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

  const muiTheme = createTheme({
    palette: {
      mode: themeValues.theme,
    },
  });

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <MuiThemeProvider theme={muiTheme}>
      <ThemeProvider value={themeValues}>
        <ToastContainer theme={themeValues.theme} />
        <div
          className={clsx("wrapper", {
            "wrapper-dark": themeValues.theme === Theme.dark,
          })}
        >
          <Header />
          <main className="content">
            <Outlet />
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </MuiThemeProvider>
  );
};
