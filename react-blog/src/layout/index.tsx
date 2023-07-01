import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { LOCAL_STORAGE_KEYS } from "../constants/LocalStorageKeys";
import { authService } from "../services/auth";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../store/actions/user";
import { NavPanel } from "./NavPanel";
import { Link,Outlet } from "react-router-dom";
import { Routes } from "../constants/Routes";
import style from "./style/index.module.css";

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

  useEffect(() => {
    authUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className={style.header}>
      <NavPanel />
      {/* <div>
        <Link to={Routes.Register} className="register">Register</Link>
        </div>
        <div> */}
          <form className={style.header__search}>
            <input className={style.header__input} id="inputSearch" type="text" name="text" 
            placeholder="Search..."></input>
            </form>
        <h3 className={style.header__username}>{user && user?.username}</h3>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
