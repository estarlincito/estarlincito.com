import { _Link } from '@/components/HOC';
import Main from '@/components/UI/organisms/main';
import clsx from 'clsx';

export const metadata = {
  title: 'Página no encontrada',
};

const NotFound = () => {
  return (
    <Main className='grid justify-center items-center'>
      <div>
        <h3 className=' text-3xl'>Lo sentimos…</h3>
        <p className='text-2xl'>Esta página no existe.</p>

        <p>
          Puedes volver a&nbsp;
          <_Link
            target='_self'
            href='http://estarlincito.com'
            className={clsx('text-sky-600', 'dark:text-sky-400', 'text-sm')}
          >
            inicio
          </_Link>
        </p>
      </div>
    </Main>
  );
};

export default NotFound;
