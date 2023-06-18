import { Link, Outlet } from "react-router-dom";
import { Routes } from "../constants/Routes";
import './header.css';

export const Root = () => {
  return (
    <>
      <header className="header">
        <div>
          <Link to={Routes.Register} className="register">Register</Link>
        </div>
        <div>
          <form>
            <input className="search" type="text" placeholder="Serch..." />
          </form>
        </div>
      </header>
      <div>
        <Outlet />
      </div>
    </>
  );
};
