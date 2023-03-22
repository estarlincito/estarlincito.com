import { Post } from "@/types";
import Image from "next/image";

const Imagecard = ({ post }: Post) => {
  return (
    <div className="w-full bg-neutral-300 md:h-48">
      <Image
        src={post.image}
        alt={`Imagen para ${post.title}`}
        priority
        width={720}
        height={0}
        className="w-[100%] h-[100%]"
      />
    </div>
  );
};

export default Imagecard;
