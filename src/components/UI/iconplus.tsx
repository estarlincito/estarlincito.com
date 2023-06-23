import clsx from 'clsx';

interface IconPlusProps {
  children: React.ReactNode;
  className?: string;
}

const IconPlus = (props: IconPlusProps) => {
  const { children, className } = props;

  return (
    <li
      className={clsx(
        'flex flex-row items-center gap-x-1',
        className && className
      )}
    >
      {children}
    </li>
  );
};

export default IconPlus;
