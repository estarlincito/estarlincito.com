import { Post } from "@/types";
import Link from "next/link";
import Info from "./Info";

const Header = ({ post }: Post) => {
  return (
    <div className="p-6">
      <h2 className="mb-1 text-xs font-medium tracking-widest text-neutral-400 dark:text-neutral-400 select-none">
        <Link href={`/blog/${post.category.toLocaleLowerCase()}`}>
          {post.category}
        </Link>
      </h2>
      <h1 className="mb-3 text-lg font-bold text-neutral-900 dark:text-neutral-100">
        {post.title}
      </h1>
      <p className="mb-3 leading-relaxed text-neutral-700 dark:text-neutral-300">
        {post.summary}
      </p>

      <Info post={post} />
    </div>
  );
};

export default Header;
