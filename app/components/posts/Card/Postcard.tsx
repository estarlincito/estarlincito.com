import { Post } from "@/app/types";
import Imagecard from "./Image";
import Card from "./Card";
import Header from "./Header";

const Postcard = ({ post }: Post) => {
  return (
    <Card>
      <Imagecard post={post} />
      <Header post={post} />
    </Card>
  );
};

export default Postcard;
