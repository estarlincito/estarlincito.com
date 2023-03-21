import { Blog } from "contentlayer/generated";
import Card from "./Postcard";

type props = {
  posts: Blog[];
};

const Postlist = ({ posts }: props) => {
  return (
    <main className="xl:m-[5%]">
      <section className="text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="-m-4 flex flex-wrap">
            {posts.map((post) => (
              <Card key={post.slug} {...post} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Postlist;
