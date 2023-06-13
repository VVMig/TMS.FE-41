import { Link, Outlet } from "react-router-dom";
import { Routes } from "../constants/Routes";

export const Root = () => {
  return (
    <>
      <header>
        <Link to={Routes.Register}>Register</Link>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
