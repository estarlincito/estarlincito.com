import DarkmodeSwitch from "@/components/navbar/DarkmodeSwitch";
import {
  AiOutlineMenu,
  AiOutlineClose,
  AiOutlineMessage,
  AiOutlineTwitter,
} from "react-icons/ai";
import Link from "next/link";

const Menu = () => {
  return (
    <menu className="grid p-2 grid-cols-9 text-lg">
      <button className="col-start-1">
        <AiOutlineMenu />
      </button>

      <div className="col-start-7 flex justify-center items-center">
        <Link href="/contact" className="inline-flex">
          {" "}
          <AiOutlineMessage /> Contratarme
        </Link>
        <DarkmodeSwitch />
        <Link href="https://twitter.com/estarlincito" target="_blank">
          <AiOutlineTwitter />
        </Link>
      </div>
    </menu>
  );
};
export default Menu;
