import { Post } from "@/app/types";
import { setFormat } from "@/app/utils";
import Link from "next/link";
import { MdOutlineChevronRight } from "react-icons/md";

const Info = ({ post }: Post) => {
  return (
    <div className="grid grid-flow-col-dense items-center sm:grid-flow-dense xl:grid-flow-col-dense">
      <span className="sm:col-span-12">
        <Link href={post.slug}>
          <h2 className="inline-flex items-center text-indigo-500">
            Leer más
            <span className="mt-[3px]">
              <MdOutlineChevronRight />
            </span>
          </h2>
        </Link>
      </span>

      <time
        dateTime={post.publishedAt}
        className="text-neutral-400 border-r-2 border-gray-300 max-w-max py-1 pr-3 mr-3"
      >
        {setFormat(post.publishedAt)}
      </time>

      <span className="text-neutral-400 sm:col-span-12">
        {post.readingTime}
      </span>
    </div>
  );
};

export default Info;
