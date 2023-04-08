import clsx from 'clsx';

interface Props {
  className?: string;
}

const Hr: React.FC<Props> = ({ className }) => {
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
