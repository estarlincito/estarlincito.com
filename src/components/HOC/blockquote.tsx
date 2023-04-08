import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  styled?: 'none';
  className?: string;
}

const Blockquote: React.FC<Props> = ({ children, styled, className }) => {
  return (
    <blockquote
      className={clsx(
        styled === undefined &&
          'font-light text-sm text-neutral-700 dark:text-neutral-300',
        className && className
      )}
    >
      {children}
    </blockquote>
  );
};

export default Blockquote;
