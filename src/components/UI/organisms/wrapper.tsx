import { Children } from '@/types';

const Wrapper: React.FC<Children> = ({ children }) => {
  return (
    <section className='p-5 md:max-w-[600px] m-auto text-left'>
      {children}
    </section>
  );
};

export default Wrapper;
