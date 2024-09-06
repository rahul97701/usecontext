import React from "react";
import { useTheme } from "./ThemeContext";

export const ThemeComponent = () => {
    const { theme, toggleTheme } = useTheme();

    const style = {

        background: theme === 'light' ? '#fff' : '#333',
        color: theme === 'light' ? '#000' : '#fff',
        padding: '20px',
        textAlign: 'center',
    };

    return (
        <div style={style}>
        <h1>{`Current theme: ${theme}`}</h1>
        <button onClick={toggleTheme}>Toggle Theme</button>

        </div>
    );
};

export default ThemeComponent;