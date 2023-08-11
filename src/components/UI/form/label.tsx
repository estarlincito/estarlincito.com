import clsx from 'clsx';

interface LabelProps {
  title: string;
  bold?: boolean;
}

const Label = ({ title, bold }: LabelProps) => {
  return <label className={clsx(bold && 'font-bold')}>{title}</label>;
};

export default Label;
