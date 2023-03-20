import { Children } from "../types";

const Wrapper = ({ children }: Children) => {
  return <main className="px-4 py-24 mx-auto max-w-prose">{children}</main>;
};

export default Wrapper;
