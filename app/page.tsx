import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";
import { FaGithubAlt } from "react-icons/fa";
import { about, avatar, bio, name } from "./components/bio";
import Wrapper from "./components/Wrapper";

export const metadata: Metadata = {
  title: "Estarlincito",
  description: "Desarrollador Web, escritor y creador.",
};

const HomePage = () => {
  return (
    <Wrapper>
      <section>
        <h1 className="font-bold text-3xl font-serif">{name}</h1>
        <p className="my-5 max-w-[460px] text-neutral-800 dark:text-neutral-200">
          {about()}
        </p>
        <div className="flex items-start md:items-center my-8 flex-col md:flex-row">
          <Image
            alt={name}
            className="rounded-full grayscale"
            src={avatar}
            placeholder="blur"
            width={100}
            priority
          />
          <div className="mt-8 md:mt-0 ml-0 md:ml-6 space-y-2 text-neutral-600 dark:text-neutral-400">
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
        <p className="my-5 max-w-[600px] text-neutral-800 dark:text-neutral-200">
          {bio()}
        </p>
        <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-500 dark:text-neutral-400">
          <li>
            <Link
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
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
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              href="./contact"
            >
              <MdArrowOutward />
              <p className="h-7">Contratarme</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center hover:text-neutral-700 dark:hover:text-neutral-200 transition-all"
              rel="noopener noreferrer"
              href="./blog"
            >
              <MdArrowOutward />
              <p className="h-7">Mi Blog</p>
            </Link>
          </li>
        </ul>
      </section>
    </Wrapper>
  );
};

export default HomePage;
