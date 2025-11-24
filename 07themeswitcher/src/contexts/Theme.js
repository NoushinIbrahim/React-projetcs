import { createContext, useContext } from "react";


export const Themecontext = createContext({
    themeMode: 'Light',
    darkTheme: ()=>{},
    lightTheme: ()=>{},
})

export const Themeprovider = Themecontext.Provider

export default function useTheme(){
    return useContext(Themecontext)
}