import clsx from 'clsx';

interface textareaProps {
  name: string;
  placeholder: string;
  required?: boolean;
}

const textarea = ({ name, placeholder, required }: textareaProps) => {
  return (
    <textarea
      className={clsx(
        'outline-none p-2 rounded-sm',
        'bg-gray-300',
        'text-gray-700 placeholder:text-gray-400'
      )}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default textarea;
