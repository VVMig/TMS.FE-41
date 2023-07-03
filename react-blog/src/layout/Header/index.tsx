import { useContext } from "react";
import { NavPanel } from "../NavPanel";
import "./style.scss";
import { ThemeContext } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { clsx } from "clsx";
import { useSelector } from "react-redux";

export const Header = () => {
  const { theme } = useContext<any>(ThemeContext);

  const user = useSelector((store: any) => store.user);

  return (
    <header
      className={clsx("header", {
        "header-dark": theme === Theme.dark,
      })}
    >
      <NavPanel />
      <form className="header__search">
        <input
          className="header__input"
          id="inputSearch"
          type="text"
          name="text"
          placeholder="Search..."
        />
      </form>
      <h3 className="header__username">{user && user?.username}</h3>
    </header>
  );
};
