interface ButtonProps {
  type: 'submit' | 'button';
  title: string;
}

const Button = ({ type, title }: ButtonProps) => {
  return (
    <button
      className='font-bold text-lg mt-5 hover:text-sky-600 active:text-sky-800'
      type={type}
    >
      {title}
    </button>
  );
};

export default Button;
