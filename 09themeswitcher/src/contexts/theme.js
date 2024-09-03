import { createContext, useContext } from "react";

export const ThemeComtext = createContext({
  themeMode: "light",
  darkTheme: () => {},
  lightTheme: () => {},
})

export const ThemeProvider = ThemeComtext.Provider

export default function useTheme (){
  return useContext(ThemeComtext)
}