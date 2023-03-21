import { Blog } from "contentlayer/generated";
import Link from "next/link";
import Contents from "../layout/Contents";
import Title from "../layout/Title";
import Wrapper from "../layout/Wrapper";
import Mdx from "./Postmdx";

const Postlayout = ({ title, category, body }: Blog) => {
  return (
    <Wrapper>
      <p className="text-center text-base uppercase tracking-wide text-indigo-600 select-none">
        <Link href={`/blog/${category.toLocaleLowerCase()}`}>{category}</Link>
      </p>
      <Title text={title} />
      <Contents>
        <Mdx doc={body.code} />
      </Contents>
    </Wrapper>
  );
};

export default Postlayout;
