import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const IconPlus: React.FC<Props> = ({ children, className }) => {
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
