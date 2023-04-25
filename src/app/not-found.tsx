import { Linkdoc } from '@/components/HOC';
import Main from '@/components/UI/organisms/maindoc';
import { setMetadata } from '@/lib';
import clsx from 'clsx';

export const metadata = setMetadata({
  title: 'Página no encontrada',
  description: 'Esta página no existe.',
  appUrl: `https://not-fount.com`,
  imageUrl: '/favicons/avathar.png',
  imageAlt: 'Avathar',
});

const NotFound = () => {
  return (
    <Main className='grid justify-center items-center'>
      <div>
        <h3 className=' text-3xl'>Lo sentimos…</h3>
        <p className='text-2xl'>Esta página no existe.</p>

        <p>
          Puedes volver a&nbsp;
          <Linkdoc
            target='_self'
            href='http://estarlincito.com'
            className={clsx('text-sky-600', 'dark:text-sky-400')}
          >
            inicio
          </Linkdoc>
        </p>
      </div>
    </Main>
  );
};

export default NotFound;
