import { useContext } from "react";
import "./style.scss";
import { ThemeContext } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { clsx } from "clsx";

export const Footer = () => {
  const { theme } = useContext<any>(ThemeContext);

  return (
    <footer
      className={clsx("footer", {
        "footer-dark": theme === Theme.dark,
      })}
    >
      <h6 className="footer__text"></h6>
    </footer>
  );
};
