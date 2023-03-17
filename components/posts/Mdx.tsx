import { useMDXComponent } from "next-contentlayer/hooks";

type props = {
  doc: string;
};

const Mdx = ({ doc }: props) => {
  const MDXContent = useMDXComponent(doc);
  return <MDXContent />;
};
export default Mdx;
