"use client";
import { useAppContext } from "@/app/context";
import Link from "next/link";
import { MdClose } from "react-icons/md";
import DarkmodeSwitch from "../theme/DarkmodeSwitch";

const links = [
  { label: "Home", route: "/" },
  { label: "Blog", route: "/blog" },
  { label: "Contacto", route: "/contact" },
];

const Collapse = () => {
  const { setCollapse } = useAppContext();

  const handleClose = () => {
    setCollapse(false);
  };

  return (
    <div className="relative">
      <div className="grid grid-cols-8 grid-rows-6 absolute w-[80vw] sm:w-[50vw] md:w-[40vw] lg:w-[27vw] h-[90vh] bg-white  rounded-br-lg z-50 dark:bg-[#171616] dark:shadow-md dark:shadow-neutral-800">
        {/* close button */}
        <button
          onClick={handleClose}
          className="row-start-1 col-start-7 text-3xl text-neutral-900 hover:opacity-70 active:opacity-40 dark:text-neutral-50"
        >
          <MdClose />
        </button>
        {/* links */}
        <ul className="row-start-2 col-start-2">
          {links.map((link, id) => (
            <li
              key={id}
              className="text-lg font-bold text-neutral-900 hover:opacity-70 active:opacity-40 dark:text-neutral-200 mb-1"
            >
              <Link onClick={handleClose} href={link.route}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* dark Switch */}
        <div className="row-start-6 col-start-2">
          <DarkmodeSwitch />
        </div>
      </div>
    </div>
  );
};

export default Collapse;
