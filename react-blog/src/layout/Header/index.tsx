import { useContext, useEffect } from "react";
import { NavPanel } from "../NavPanel";
import "./Header.scss";
import { ThemeContext } from "../../hooks/useTheme";
import { Theme } from "../../constants/Theme";
import { clsx } from "clsx";
import SearchBar from "../SearchBar/SearchBar";
import { useLocation } from "react-router";
import axios from "axios";
import { Link, useSearchParams } from "react-router-dom";
import { Routes } from "../../constants/Routes";

export const Header = () => {
  const { theme } = useContext<any>(ThemeContext);

  const [query, setQuery] = useSearchParams();

  const postQuery = query.get("query") || "";

  console.log(postQuery);
  

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
        {/* <Link to={}> */}
          <SearchBar postQuery={postQuery} setQuery={setQuery} />
        {/* </Link> */}
      </div>
    </header>
  );
};
