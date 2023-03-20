import Link from "next/link";
import Image from "next/image";
import { Blog } from "contentlayer/generated";
import { setFormat } from "@/app/utils";

const Card = ({
  title,
  summary,
  slug,
  image,
  category,
  publishedAt,
  readingTime,
}: Blog) => {
  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full overflow-hidden rounded-lg border-[1px] border-neutral-300 dark:border-neutral-700 border-opacity-60">
        <div className="w-full bg-neutral-300 md:h-36 lg:h-48">
          <Image
            src={image}
            alt={`Imagen para ${title}`}
            priority
            width={720}
            height={0}
            className="w-[100%] h-[100%]"
          />
        </div>
        <div className="p-6">
          <h2 className="title-font mb-1 text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-400">
            {category}
          </h2>
          <h1 className="title-font mb-3 text-lg font-medium text-neutral-900 dark:text-neutral-200">
            {title}
          </h1>
          <p className="mb-3 leading-relaxed text-neutral-700 dark:text-neutral-300">
            {summary}
          </p>
          <div className="flex flex-wrap items-center ">
            <Link href={`/blog/${slug}`}>
              <h2 className="inline-flex items-center text-indigo-500 md:mb-2 lg:mb-0">
                Leer más
                <svg
                  className="ml-2 h-4 w-4"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </h2>
            </Link>
            <time
              dateTime={publishedAt}
              className="mr-3 ml-auto inline-flex items-center border-r-2 border-gray-300 py-1 pr-3 text-sm leading-none text-neutral-400 md:ml-0 lg:ml-auto"
            >
              {setFormat(publishedAt)}
            </time>
            <span className="inline-flex items-center text-sm leading-none text-neutral-400">
              {readingTime}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
