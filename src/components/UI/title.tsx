import clsx from 'clsx';

interface TitleProps {
  text: string;
  size: 'text-lg' | 'text-xl' | 'text-2xl' | 'text-3xl' | 'text-4xl';
  className?: string;
}

const Title = (props: TitleProps) => {
  const { text, size, className } = props;

  return (
    <h1 className={clsx('font-bold', size, className && className)}>{text}</h1>
  );
};

export default Title;
