import Hr from '@/components/UI/hr';
import Imagedoc from '@/components/UI/imagedoc';
import Linkdoc from '@/components/UI/linkdoc';
import Title from '@/components/UI/title';
import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import Home from '@/constants/home';
import SEO from '@/lib/seo';
import clsx from 'clsx';
import { TbArrowUpRight, TbBrandGithubCopilot } from 'react-icons/tb';

export const { metadata } = new SEO({
  title: Home.seo.title,
  description: Home.seo.description,
  openGraph: Home.seo.openGraph,
  imagesUrl: Home.seo.imagesUrl,
  imagesAlt: Home.seo.imagesAlt,
});

const HomePage = () => {
  return (
    <Container className='flex'>
      <Wrapper>
        <section className='flex flex-col items-center gap-y-2 mb-8'>
          <figure className='w-32 mb-3'>
            <Imagedoc
              alt={Home.seo.title}
              className='rounded-full'
              src='/images/avatar.jpeg'
            />
          </figure>

          <Title text={Home.seo.title} size='text-3xl' />
          <p
            className={clsx(
              'text-center p-2 md:w-[500px] md:p-0 text-base',
              'text-neutral-600 dark:text-neutral-300'
            )}
          >
            {Home.aboutme}
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
          <p className='py-5 text-left'>{Home.moreinf}</p>
          <Hr />

          <ul className='mt-5 md:flex md:justify-center md:gap-x-5'>
            {Home.links.map((link, index) => (
              <li key={index} className='mb-1 md:mb-0'>
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
