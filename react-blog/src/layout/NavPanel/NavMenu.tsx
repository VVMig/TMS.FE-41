import styled from "styled-components";
import { Theme } from "../../constants/Theme";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/useTheme";
import { Routes } from "../../constants/Routes";
import { Link, useLocation } from "react-router-dom";

const RouteItem = styled.div<{ theme: Theme }>`
  padding: 12px 6px;
  border-bottom: 1px solid
    ${(props) => (props.theme === Theme.dark ? "#e3e3e3" : "#8a8a8a")};
  text-align: center;
`;

const StyledLink = styled(Link)<{ theme: Theme; active: boolean }>`
  text-decoration: none;
  color: ${(props) => {
    if (props.active) {
      return props.theme === Theme.dark ? "#ff0000" : "#bb00ff";
    }

    return props.theme === Theme.dark ? "#e3e3e3" : "#27319d";
  }};
`;

const routes: {
  label: string;
  url: string;
}[] = [
  {
    label: "Home",
    url: Routes.Home,
  },
  {
    label: "Add post",
    url: Routes.AddPost,
  },
];

export const NavMenu = () => {
  const { theme } = useContext<any>(ThemeContext);

  const location = useLocation();

  return (
    <div>
      <RouteItem theme={theme}>
        <StyledLink
          to={"/post"}
          theme={theme}
          active={false}
          data-testid="to-post-link"
        >
          To post
        </StyledLink>
      </RouteItem>
      {routes.map((route) => (
        <RouteItem key={route.label} theme={theme}>
          <StyledLink
            to={route.url}
            theme={theme}
            active={route.url === location.pathname}
          >
            {route.label}
          </StyledLink>
        </RouteItem>
      ))}
    </div>
  );
};
