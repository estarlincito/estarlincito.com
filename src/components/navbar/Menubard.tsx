"use client";
import { useAppContext } from "@/context";
import { AiOutlineMenu } from "react-icons/ai";
import Collapse from "./Collapse";

const Menubard = () => {
  const { collapse, setCollapse } = useAppContext();
  const handleMenu = () => {
    setCollapse(true);
  };
  return (
    <>
      {!collapse ? (
        <li className="text-2xl m-5 text-neutral-900 w-7 hover:opacity-70 active:opacity-40 dark:text-neutral-50">
          <button onClick={handleMenu}>
            <AiOutlineMenu />
          </button>
        </li>
      ) : (
        <Collapse />
      )}
    </>
  );
};
export default Menubard;
