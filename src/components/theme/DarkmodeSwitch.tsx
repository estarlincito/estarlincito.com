"use client";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";
import { useAppContext } from "@/context";

const DarkmodeSwitch = () => {
  const { theme, setTheme } = useAppContext();

  const handleDark = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <li className="text-2xl text-neutral-900 hover:opacity-70 active:opacity-40 dark:text-neutral-50 cursor-pointer">
      {theme === "dark" ? (
        <MdOutlineLightMode onClick={handleDark} />
      ) : (
        <MdOutlineDarkMode onClick={handleDark} />
      )}
    </li>
  );
};
export default DarkmodeSwitch;
