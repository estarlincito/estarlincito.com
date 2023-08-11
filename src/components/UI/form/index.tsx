import clsx from 'clsx';

interface FormProps {
  action: (formdata: FormData) => Promise<void>;
  children: React.ReactNode;
  title: string;
}

const Form = ({ action, children, title }: FormProps) => {
  return (
    <form
      action={action}
      className={clsx(
        'border border-gray-400 rounded-lg',
        'dark:border-gray-500',
        'flex flex-col p-8 gap-y-2'
      )}
    >
      <h1 className='font-bold text-lg mb-5'>{title}</h1>
      {children}
    </form>
  );
};

export default Form;
