import { Blog } from "contentlayer/generated";
import Postcard from "./Card/Postcard";

type props = {
  posts: Blog[];
};

const Postlist = ({ posts }: props) => {
  return (
    <main className="m-[5%]">
      <section className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Postcard key={post._id} post={post} counter={posts.length} />
        ))}
      </section>
    </main>
  );
};

export default Postlist;
