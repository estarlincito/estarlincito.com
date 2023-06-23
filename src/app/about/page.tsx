import Title from '@/components/UI/title';
import About from '@/constants/about';
import SEO from '@/lib/seo';
import clsx from 'clsx';

export const { metadata } = new SEO({
  title: About.seo.title,
  description: About.seo.description,
  openGraph: About.seo.openGraph,
  imagesUrl: About.seo.imagesUrl,
  imagesAlt: About.seo.imagesAlt,
});

const AboutPage = () => {
  return (
    <section>
      <Title text='Acerca de Estarlincito' size='text-2xl' className='mb-3' />
      <p className={clsx('text-neutral-600 dark:text-neutral-300')}>
        {About.seo.description}
      </p>

      <p className='my-5'>{About.moreinf}</p>

      <div className='my-5'>
        <h3 className='text-lg font-bold'>{About.temeabout}</h3>
        <ul>
          {About.temas.map((tema, id) => (
            <li key={id}>{tema}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutPage;
