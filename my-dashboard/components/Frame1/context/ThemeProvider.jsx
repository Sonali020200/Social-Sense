'use client'

import React from 'react'
import { createContext,useState,useContext } from 'react'
import {ThemeProvider as StyledThemeProvider} from "styled-components";

const ThemeContext=createContext()

export const ThemeProvider = ({children}) => {
    const [theme,setTheme]=useState({color:'white'})
    return (
    <ThemeContext.Provider value={{theme,setTheme}}>
        <StyledThemeProvider theme={theme}>
            {children}
        </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export const useTheme=()=>useContext(ThemeContext);