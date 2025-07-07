import React from "react";
import Blog from "./Blog";
import { ThemeContext, themes } from "./context/theme-context";

export default function DarkMode() {
  const [theme, setTheme] = React.useState(themes.light);

  const changeTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === themes.light ? themes.dark : themes.light
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, changeTheme }}>
      <Blog />
    </ThemeContext.Provider>
  );
}
