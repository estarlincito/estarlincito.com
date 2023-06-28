import clsx from 'clsx';
import Action from './action';
import GPTForm from './form';
import Header from './header';
import Result from './result';

const Gpt = () => {
  return (
    <div
      className={clsx(
        'bg-cyan-800 rounded-sm p-8 m-2',
        'flex flex-col gap-10 justify-center',
        'min-w-[400px] md:min-w-[700px]'
      )}
    >
      <Header />
      <GPTForm />
      <Result />
      <Action />
    </div>
  );
};

export default Gpt;
