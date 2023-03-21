import { useMDXComponent } from "next-contentlayer/hooks";

type props = {
  doc: string;
};

const Postmdx = ({ doc }: props) => {
  const MDXContent = useMDXComponent(doc);
  return <MDXContent />;
};
export default Postmdx;
