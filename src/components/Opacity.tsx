"use client";
import { useAppContext } from "../context";

const Opacity = () => {
  const { collapse, setCollapse } = useAppContext();

  const handleOff = () => {
    setCollapse(false);
  };

  return (
    <>
      {collapse ? (
        <div
          onClick={handleOff}
          className="bg-[#000000d2] fixed w-[100vw] h-[100vh]"
        ></div>
      ) : null}
    </>
  );
};

export default Opacity;
