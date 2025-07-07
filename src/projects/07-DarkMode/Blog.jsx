import React from "react";
import Title from "../components/Title";
import Button from "../components/Button";
import { ThemeContext } from "./context/theme-context";

export default function Blog() {
  const { theme, changeTheme } = React.useContext(ThemeContext);
  return (
    <div
      className={
        "  container p-1" +
        (theme === "dark" ? " bg-dark text-light" : " bg-light")
      }
    >
      <Title text={`My Blog with ${theme} Theme`} />
      <span style={{ position: "absolute", top: 0, right: 0, padding: "10px" }}>
        <Button
          btnClass={`btn-${theme === "light" ? "dark" : "light"} btn-sm`}
          text={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
          onClick={changeTheme}
        />
      </span>
      <p className={" mt-3" + (theme === "dark" ? " text-light" : "")}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem,
        cumque. Ullam, ut unde voluptates repellat vitae sit eligendi optio
        porro, odio vero ipsam beatae voluptatum, voluptas ad dignissimos
        recusandae. Sed.
      </p>
    </div>
  );
}
