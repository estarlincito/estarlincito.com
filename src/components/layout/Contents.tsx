import { Children } from "@/types";

const Contents = ({ children }: Children) => {
  return (
    <div className="py-16 text-neutral-900 dark:text-neutral-300">
      {children}
    </div>
  );
};

export default Contents;
