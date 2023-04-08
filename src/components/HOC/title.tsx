import clsx from 'clsx';

interface Props {
  children: React.ReactNode;
  styled?: 'none';
  className?: string;
}

const Title: React.FC<Props> = ({ children, styled, className }) => {
  return (
    <h1
      className={clsx(
        styled === undefined && 'font-bold',
        className && className
      )}
    >
      {children}
    </h1>
  );
};

export default Title;
