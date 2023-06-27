import { useSelector } from "react-redux";
const themeSelector = () => {
const theme = useSelector((state:any) => state.theme.theme);
return theme;
}

export default themeSelector;