import Link from "next/link";
import { MdOutlineContactPage } from "react-icons/md";

const HireMeLink = () => {
  return (
    <Link href="/contact">
      <MdOutlineContactPage />
    </Link>
  );
};

export default HireMeLink;
