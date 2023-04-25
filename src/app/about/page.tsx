import { Title } from '@/components/HOC';
import { Maindoc } from '@/components/UI/organisms';
import { setMetadata } from '@/lib';
import clsx from 'clsx';

export const metadata = setMetadata({
  title: 'Acerca de Estarlincito',
  description:
    'Este es un blog que explora la tecnología, la filosofía, la psicología y el desarrollo web y mucho más.',
  appUrl: `https://estarlincito.com/about`,
  imageUrl: '/favicons/avathar.png',
  imageAlt: 'Avathar',
});

const temas = [
  'Tecnología',
  'Privacidad en línea',
  'Desarrollo web',
  'Diseño Web',
  'SEO',
  'React',
  'Nextjs',
  'Psicología',
  'Filosofía',
];
const AboutPage = () => {
  return (
    <Maindoc>
      <section>
        <Title text='Acerca de Estarlincito' size='text-2xl' />
        <p className={clsx('text-neutral-600 dark:text-neutral-300')}>
          Blog de Tecnología, Filosofía, Psicología y Desarrollo Web y mucho más
        </p>

        <p className='my-5'>
          Este es un blog que explora la tecnología, la filosofía, la psicología
          y el desarrollo web y mucho más. Aquí encontrarás reflexiones,
          análisis y discusiones sobre cómo la tecnología está cambiando nuestra
          forma de pensar y relacionarnos con el mundo, así como su impacto en
          nuestra psicología y bienestar emocional.
        </p>

        <div className='my-5'>
          <h3 className='text-lg font-bold'>Temas que se abordan</h3>
          <ul>
            {temas.map((tema, id) => (
              <li key={id}></li>
            ))}
          </ul>
        </div>
      </section>
    </Maindoc>
  );
};

export default AboutPage;
