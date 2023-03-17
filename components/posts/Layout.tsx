import { Blog } from "contentlayer/generated";
import Mdx from "@/components/posts/Mdx";

const Layout = ({ title, category, body }: Blog) => {
  return (
    <div className="px-4 py-24">
      <div className="mx-auto max-w-prose">
        <p className="block text-center text-base font-semibold uppercase tracking-wide text-indigo-600">
          {category}
        </p>
        <h1 className="mt-2 block text-center text-3xl font-extrabold leading-8 tracking-tight text-neutral-900 dark:text-neutral-300 sm:text-4xl">
          {title}
        </h1>
        <article className="mx-autotext-gray-500 prose-md prose prose-indigo py-24 lg:prose-lg text-neutral-900 dark:text-neutral-300">
          <Mdx doc={body.code} />
        </article>
      </div>
    </div>
  );
};

export default Layout;
