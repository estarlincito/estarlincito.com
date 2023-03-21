import { Children } from "@/app/types";

const Card = ({ children }: Children) => {
  return (
    <div className="h-full max-w-md min-w-[200px] overflow-hidden rounded-lg border-[1px] border-neutral-400 dark:border-neutral-700 border-opacity-90">
      {children}
    </div>
  );
};

export default Card;
