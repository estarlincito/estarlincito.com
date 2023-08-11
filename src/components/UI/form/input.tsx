import clsx from 'clsx';

interface InputProps {
  type: 'text' | 'number' | 'email' | 'time';
  name: string;
  placeholder: string;
  required?: boolean;
}

const Input = ({ type, name, placeholder, required }: InputProps) => {
  return (
    <input
      className={clsx(
        'outline-none p-2 rounded-sm',
        'bg-gray-300',
        'text-gray-700 placeholder:text-gray-400'
      )}
      type={type}
      name={name}
      placeholder={placeholder}
      required={required}
    />
  );
};

export default Input;
