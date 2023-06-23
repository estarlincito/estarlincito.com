import clsx from 'clsx';

interface Props {
  className: string;
  children: React.ReactNode;
}

const Container = (props: Props) => {
  return (
    <div className={clsx('animate-pulse', props.className)}>
      {props.children}
    </div>
  );
};

export default Container;
