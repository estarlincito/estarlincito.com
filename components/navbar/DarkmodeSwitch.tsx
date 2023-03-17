import { useTheme } from "next-themes";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const DarkmodeSwitch = () => {
  const { theme, setTheme } = useTheme();

  const handleTheme = () => {
    // theme === "dark" ? setTheme("light") : setTheme("dark");
    console.log(theme);
  };

  return (
    <div className="select-none text-lg cursor-pointer">
      {theme === "dark" ? (
        <MdOutlineDarkMode onClick={handleTheme} />
      ) : (
        <MdOutlineLightMode onClick={handleTheme} />
      )}
    </div>
  );
};
export default DarkmodeSwitch;
