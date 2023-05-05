import clsx from 'clsx';

//Types
interface Props {
  className?: string;
}

const Box: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={clsx('bg-neutral-300 dark:bg-neutral-500 rounded', className)}
    />
  );
};

export default Box;
