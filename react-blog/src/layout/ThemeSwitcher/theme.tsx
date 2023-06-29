import { useSelector } from "react-redux";
const useTheme = () => {
const theme = useSelector((state:any) => state.theme.theme);
return theme;
}

export default useTheme;