import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
import { authService } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/user";
import { Header } from "./Header";
import { Footer } from "./Footer";
import "./styles.css";
import { ThemeProvider, createTheme } from "@mui/material";

export const Root = () => {
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

  const theme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <div className="wrapper">
        <Header />
        <main className="content">
          <Outlet />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};
