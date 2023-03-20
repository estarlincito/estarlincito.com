"use client";
import { Children } from "@/app/types";
import React, { useEffect, useRef, useState } from "react";
import { AppContext } from "./appContext";

const ContextProvider = ({ children }: Children) => {
  const [collapse, setCollapse] = useState(false);
  const [theme, setTheme] = useState("");
  const appRender = useRef(0);

  //if theme change, save to local storage
  useEffect(() => {
    if (appRender.current === 0) {
      appRender.current += 1;
      return;
    }
    localStorage.setItem("theme", theme);

    theme === "light"
      ? document.documentElement.classList.remove("dark")
      : document.documentElement.classList.add("dark");
  }, [theme]);

  //whent app start
  useEffect(() => {
    const lsTheme = localStorage.getItem("theme");
    if (lsTheme === null) {
      // console.log(window.matchMedia("(prefers-color-scheme: dark)").matches);
      localStorage.setItem("theme", "light");
      setTheme("light");
    } else {
      setTheme(lsTheme);
    }
  }, []);

  return (
    <AppContext.Provider value={{ collapse, setCollapse, theme, setTheme }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
