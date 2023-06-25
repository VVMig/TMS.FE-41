import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
import { authService } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/reducers/user";
import { NavPanel } from "./NavPanel";
import { Header } from "./Header";

export const Root = () => {

  const theme = useSelector((state:any) => state.theme.theme);

  useEffect(() => {
    if(!document.body.classList.contains('theme__light') && !document.body.classList.contains('theme__dark')){
      document.body.classList.add(theme);
    }
  }, []);
  
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

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header />
      <div>
        <Outlet />
      </div>
    </>
  );
};
