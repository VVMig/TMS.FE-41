import { useContext } from "react";
import { NavPanel } from "../NavPanel";
import "./Header.scss";
import { ThemeContext } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { clsx } from "clsx";

export const Header = () => {
  const { theme } = useContext<any>(ThemeContext);

  return (
    <header
      className={clsx("header", {
        "header-dark": theme === Theme.dark,
      })}
    >
      <div>
        <NavPanel />
      </div>
      <div>
        <form>
          <input
            className="header__search"
            type="text"
            placeholder="Serch..."
          />
        </form>
      </div>
    </header>
  );
};
