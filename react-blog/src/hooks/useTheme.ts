import { ThemeProvider } from "@mui/material"
import {createContext, useContext} from "react"
import { Theme } from "../constants/theme" 

const themeContext = createContext<Theme>(Theme.light)

export const useTheme = () => {
   const theme = useContext(themeContext)
   return ThemeProvider
}