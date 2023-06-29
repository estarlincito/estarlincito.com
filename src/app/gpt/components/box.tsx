import clsx from 'clsx';
import Chat from './chat';
import Header from './header';
import Search from './search';

const Box = () => {
  return (
    <div
      className={clsx(
        'max-w-2xl mx-auto',
        'h-[80vh]',
        'flex flex-col justify-between',
        'p-5'
      )}
    >
      <Header />
      <Chat />
      <Search />
    </div>
  );
};

export default Box;
