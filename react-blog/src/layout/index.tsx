import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
import { authService } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/user";
import { NavPanel } from "./NavPanel";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./styles.css";
import { ThemeContext, ThemeProvider, useTheme } from "../hooks/useTheme";
import { Theme } from "../constants/Theme";

export const Root = () => {
  const user = useSelector((store: any) => store.user);

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

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const darkClass = themeValues.theme === Theme.dark ? 'wrapper-dark' : ''

  return (
    <ThemeProvider value={themeValues}>
      <div className={`wrapper ${darkClass}`}>
        <Header />
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
