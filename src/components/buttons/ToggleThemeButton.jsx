import React from "react";
import { MdOutlineDarkMode, MdOutlineLightMode } from "react-icons/md";
import useTheme from "../../hooks/useTheme";


function ToggleThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="toggle-theme"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === 'dark' ? <MdOutlineLightMode /> : <MdOutlineDarkMode />}
    </button>
  );
}

export default ToggleThemeButton;