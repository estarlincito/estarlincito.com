import { Blog } from "contentlayer/generated";
import Card from "./Card";

type props = {
  posts: Blog[];
};

const List = ({ posts }: props) => {
  return (
    <section className="body-font text-gray-600">
      <div className="container mx-auto px-5 py-24">
        <div className="-m-4 flex flex-wrap">
          {posts.map((post) => (
            <Card key={post.slug} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default List;
