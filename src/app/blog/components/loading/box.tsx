import clsx from 'clsx';

interface BoxProps {
  className?: string;
}

const Box = (props: BoxProps) => {
  return (
    <div
      className={clsx(
        'bg-neutral-300 dark:bg-neutral-500 rounded',
        props.className
      )}
    />
  );
};

export default Box;
