import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";
import Wrapper from "./components/layout/Wrapper";
import Title from "./components/layout/Title";
import Contents from "./components/layout/Contents";
import { name } from "./components/me/name";
import { avatar } from "./components/me/avatar";
import About from "./components/me/About";
import Bio from "./components/me/Bio";

export const metadata: Metadata = {
  title: name,
  description: "Desarrollador Web, escritor y creador.",
};

const HomePage = () => {
  return (
    <Wrapper>
      <div className="flex items-center flex-col">
        <Image
          alt={name}
          className="rounded-full mb-3"
          src={avatar}
          placeholder="blur"
          width={100}
          priority
        />
        <Title text={name} />
        <p className="mt-5 italic text-center text-neutral-700 dark:text-neutral-300">
          <About />
        </p>

        <div className="mt-5 text-neutral-600 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-300 transition-all">
          <Link
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/estarlincito"
            className="flex items-center gap-2"
          >
            <FaGithubAlt />
            Proyectos web
          </Link>
        </div>
      </div>
      <Contents>
        <p className="mb-5">
          <Bio />
        </p>
        <ul className="flex flex-col md:justify-center md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm">
          <li>
            <Link
              className="flex items-center hover:text-neutral-500 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/estarlincito"
            >
              <MdArrowOutward />
              <p className="h-7">Sígueme en Twitter</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center hover:text-neutral-500 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              href="./contact"
            >
              <MdArrowOutward />
              <p className="h-7">Contratarme</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center hover:text-neutral-500 dark:hover:text-neutral-100 transition-all"
              rel="noopener noreferrer"
              href="./blog"
            >
              <MdArrowOutward />
              <p className="h-7">Mi Blog</p>
            </Link>
          </li>
        </ul>
      </Contents>
    </Wrapper>
  );
};

export default HomePage;
