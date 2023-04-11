import { Blockquote, Paragraph, Title } from '@/components/HOC';
import { _Main } from '@/components/UI/organisms';
import clsx from 'clsx';

export const metadata = {
  title: 'Acerca de Estarlincito',
  description:
    'Este es un blog que explora la tecnología, la filosofía, la psicología y el desarrollo web y mucho más.',
};

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
    <_Main>
      <section>
        <Title className='text-2xl'>Acerca de Estarlincito</Title>
        <Blockquote className={clsx('text-neutral-600 dark:text-neutral-300')}>
          Blog de Tecnología, Filosofía, Psicología y Desarrollo Web y mucho más
        </Blockquote>

        <Paragraph className='my-5'>
          Este es un blog que explora la tecnología, la filosofía, la psicología
          y el desarrollo web y mucho más. Aquí encontrarás reflexiones,
          análisis y discusiones sobre cómo la tecnología está cambiando nuestra
          forma de pensar y relacionarnos con el mundo, así como su impacto en
          nuestra psicología y bienestar emocional.
        </Paragraph>

        <div className='my-5'>
          <h3 className='text-lg font-bold'>Temas que se abordan</h3>
          <ul>
            {temas.map((tema, id) => (
              <li key={id}></li>
            ))}
          </ul>
        </div>
      </section>
    </_Main>
  );
};

export default AboutPage;
