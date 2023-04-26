import { Linkdoc } from '@/components/HOC';
import Main from '@/components/UI/organisms/container';
import { SEO } from '@/lib';
import clsx from 'clsx';

//SEO
export const { metadata } = new SEO({
  title: 'Página no encontrada',
  description: 'Esta página no existe.',
  openGraph: { url: 'https://not-fount.com' },
  imagesUrl:
    'https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imagesAlt: 'error',
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
