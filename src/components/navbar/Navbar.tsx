import DarkmodeSwitch from "../theme";
import HireMeLink from "./HireMeLink";
import Menubard from "./Menubard";
import TwitterLink from "./TwitterLink";

const Navbar = () => {
  return (
    <nav className="grid grid-cols-8 select-none">
      <menu className="col-span-5">
        <Menubard />
      </menu>

      <ul className="col-span-3 m-5 grid  grid-flow-col justify-end items-center gap-2">
        <DarkmodeSwitch />
        <li className="text-2xl text-neutral-900 hover:opacity-70 active:opacity-40 dark:text-neutral-50">
          <HireMeLink />
        </li>
        <li className="text-2xl text-neutral-900 hover:opacity-70 active:opacity-40 dark:text-neutral-50">
          <TwitterLink />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
