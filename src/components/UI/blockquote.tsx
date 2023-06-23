import clsx from 'clsx';

interface BlockquoteProps {
  children: React.ReactNode;
  className?: string;
}

const Blockquote = (props: BlockquoteProps) => {
  const { children, className } = props;

  return (
    <blockquote
      className={clsx(
        'border-l-2 pl-3 border-slate-600 border:text-slate-400',
        'font-light text-neutral-600 dark:text-neutral-400',
        className && className
      )}
    >
      {children}
    </blockquote>
  );
};

export default Blockquote;
