import { createContext, useState } from "react";

const DarkMode = createContext();

const DarkModeProvider = (props) => {
  const [colorMode, setIColorMode] = useState("dark");

  const handleModeChange = (mode) => {
    if (mode == "dark") {
      document.documentElement.style.setProperty(
        "--primary-bg",
        "rgba(0, 0, 0, 0.835)"
      );
      document.documentElement.style.setProperty(
        "--textbox-bg",
        "rgb(67 67 67 / 91%)"
      );
      document.documentElement.style.setProperty("--badge-bg", "white");
      document.documentElement.style.setProperty("--badge-text", "black");
      document.documentElement.style.setProperty("--primary-text", "white");
    } else {
      document.documentElement.style.setProperty(
        "--primary-bg",
        "rgba(197, 197, 197, 0.829)"
      );
      document.documentElement.style.setProperty(
        "--textbox-bg",
        "rgba(246, 246, 246, 0.938)"
      );
      document.documentElement.style.setProperty("--badge-bg", "black");
      document.documentElement.style.setProperty("--badge-text", "white");
      document.documentElement.style.setProperty("--primary-text", "black");
    }
  };

  return (
    <DarkMode.Provider value={{ colorMode, setIColorMode, handleModeChange }}>
      {props.children}
    </DarkMode.Provider>
  );
};

export { DarkMode, DarkModeProvider };
