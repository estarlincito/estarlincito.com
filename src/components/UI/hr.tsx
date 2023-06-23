import clsx from 'clsx';

interface HrProps {
  className?: string;
}

const Hr = ({ className }: HrProps) => {
  return (
    <hr
      className={clsx(
        'dark:border-neutral-700 border-neutral-300',
        className && className
      )}
    />
  );
};

export default Hr;
