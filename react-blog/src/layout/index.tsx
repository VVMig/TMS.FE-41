import { useContext, useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
import { authService } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/user";
import { NavPanel } from "./NavPanel";
import { Link, Outlet } from "react-router-dom";
import { Routes } from "../constants/Routes";
import { Header } from "./Header";
import style from "../style/Layout.module.css";
import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import { ThemeContext, ThemeProvider, useTheme } from "../hooks/useTheme";
import clsx from "clsx";
import { Theme } from "../constants/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const Root = () => {
  const { theme } = useContext<any>(ThemeContext);
  const user = useSelector((store: any) => store.user);
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
      mode: theme,
    },
  });

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    // <>
    <MuiThemeProvider theme={muiTheme}>
       <ToastContainer theme={theme} />
       <div
        className={clsx("wrapper", {
          "wrapper-dark": theme === Theme.dark,
        })}
      > 
      <header className={style.header}>
        <NavPanel />
        {/* <div>
        <Link to={Routes.Register} className="register">Register</Link>
        </div>
        <div> */}
        <form className={style.header__search}>
          <input
            className={style.header__input}
            id="inputSearch"
            type="text"
            name="text"
            placeholder="Search...">
            </input>
        </form>
        <h3 className={style.header__username}>{user && user?.username}</h3>
      </header>
      <div>
        <Outlet />
      </div>
      </div>
      </MuiThemeProvider>
    // </>
  );
};
