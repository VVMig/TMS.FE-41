import styled from "styled-components";
import { Theme } from "../../constants/Theme";
import { useContext } from "react";
import { ThemeContext } from "../../hooks/useTheme";

const Container = styled.div<{ theme: Theme }>`
  padding: 12px 6px;
  background-color: ${(props) =>
    props.theme === Theme.dark ? "white" : "black"};
  color: ${(props) => (props.theme === Theme.light ? "white" : "black")};
`;



export const NavMenu = () => {
  const { theme } = useContext<any>(ThemeContext);

  return <Container theme={theme}>12345</Container>;
};
