import clsx from 'clsx';

const Header = () => {
  return (
    <div className={clsx('dark:text-white', 'text-white')}>
      <h1 className='font-bold text-lg'>Estarlincito GPT</h1>
      <p>
        <em>Success takes time. Stay focused. Be patient.</em>
      </p>
    </div>
  );
};

export default Header;
