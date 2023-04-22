import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Blockquote: React.FC<Props> = ({ children, className }) => {
  return (
    <blockquote
      className={clsx(
        'font-light text-neutral-700 dark:text-neutral-300',
        className && className
      )}
    >
      {children}
    </blockquote>
  );
};

export default Blockquote;
