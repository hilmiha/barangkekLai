import { createContext, useState } from "react";

export const AppThemeContext = createContext();

export const AppThemeProvider = (props) => {
    const [theme, setTheme] = useState("dark");
    document.documentElement.setAttribute("data-theme", theme);

    const changeTheme = () => {
        theme === "dark" ? setTheme("light") : setTheme("dark");
    };

    return (
        <>
            <AppThemeContext.Provider value={{ theme, changeTheme }}>
                {props.children}
            </AppThemeContext.Provider>
        </>
    );
};
