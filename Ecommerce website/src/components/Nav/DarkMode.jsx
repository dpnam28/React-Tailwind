import LightBtn from "../../assets/website/light-mode-button.png";
import DarkBtn from "../../assets/website/dark-mode-button.png";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const htmlElement = document.documentElement;

  let handleChangeTheme = () => {
    if (theme === "light") {
      htmlElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
      setTheme(theme === "light" ? "dark" : "light");
    } else {
      htmlElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme(theme === "light" ? "dark" : "light");
    }
  };
  return (
    <>
      <img
        src={LightBtn}
        alt=""
        onClick={() => handleChangeTheme()}
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute z-10
  ${theme === "dark" ? "opacity-0" : "opacity-100"}`}
      ></img>
      <img
        src={DarkBtn}
        alt=""
        onClick={() => handleChangeTheme()}
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300"
      />
    </>
  );
};

export default DarkMode;
