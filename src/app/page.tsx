import { Hr, Imagedoc, Linkdoc, Title } from '@/components/HOC';
import { SEO } from '@/lib';
import { Links } from '@/types';
import { Container, Wrapper } from '@UI/organisms';
import clsx from 'clsx';
import { TbArrowUpRight, TbBrandGithubCopilot } from 'react-icons/tb';
const name = 'Estarlincito';

//SEO
export const { metadata } = new SEO({
  title: name,
  description: 'Desarrollador Web, escritor y creador.',
  openGraph: { type: 'website', url: 'https://estarlincito.com/' },
  imagesUrl: 'https://estarlincito.com/images/avatar.jpeg',
  imagesAlt: 'Avathar',
});

//list of links
const links: Links[] = [
  {
    route: 'https://twitter.com/estarlincito',
    label: 'Sígueme en Twitter',
    target: '_blank',
  },
  {
    route: '/blog',
    label: 'Mira mi Blog',
    target: '_self',
  },
  {
    route: '/contact',
    label: 'Contratame',
    target: '_self',
  },
];

const HomePage = () => {
  return (
    <Container className='flex'>
      <Wrapper>
        <section className='flex flex-col items-center gap-y-2 mb-8'>
          <figure className='w-32 mb-3'>
            <Imagedoc
              alt={name}
              className='rounded-full'
              src='/images/avatar.jpeg'
            />
          </figure>

          <Title text={name} size='text-3xl' />
          <p
            className={clsx(
              'text-center p-2 md:w-[500px] md:p-0 text-base',
              'text-neutral-600 dark:text-neutral-300'
            )}
          >
            Hola, soy Estarlicito. Trabajo con el <b>Diseño de páginas web</b>,
            escribo sobre <b>Tecnológia</b>,&nbsp;
            <b>Psicológia y otros temas.</b>
          </p>
          <Linkdoc
            href='https://github.com/estarlincito'
            target='_blank'
            orden='vertically'
            color='neutral'
          >
            <TbBrandGithubCopilot />
            Proyectos web
          </Linkdoc>
        </section>

        <section>
          <Hr />
          <p className='py-5 text-left'>
            Soy un diseñador web con más de 5 años de experiencia. Me
            especializo en la creación de sitios web modernos, interactivos,
            adaptados a dispositivos móviles y amigables para los motores de
            búsqueda.
            <br />
            <br />
            Utilizo las últimas tendencias y tecnologías para garantizar que mis
            diseños sean únicos, atractivos y funcionales. Disfruto buscar
            soluciones creativas a los desafíos de diseño y me apasiona
            encontrar formas de mejorar la experiencia de usuario.
            <br />
            <br />
            Me he especializado en HTML5, CSS3, JavaScript y Nextjs. Durante mi
            carrera he colaborado en muchos proyectos exitosos para clientes de
            todo el mundo. Estoy orgulloso de mi trabajo y listo para aceptar
            nuevos desafíos.
          </p>
          <Hr />

          <ul className='mt-5 md:flex md:justify-center md:gap-x-5'>
            {links.map((link, index) => (
              <li key={index}>
                <Linkdoc
                  href={link.route}
                  target={link.target!}
                  orden='horizontally'
                >
                  <TbArrowUpRight /> {link.label}
                </Linkdoc>
              </li>
            ))}
          </ul>
        </section>
      </Wrapper>
    </Container>
  );
};

export default HomePage;
