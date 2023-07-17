import Blockquote from '@/components/UI/blockquote';
import Title from '@/components/UI/title';
import MetasC from '@/constants/metas';
import SEO from '@/lib/seo';
import Card from './components/card';

export const { metadata } = new SEO({
  title: MetasC.seo.title,
  description: MetasC.seo.description,
  openGraph: MetasC.seo.openGraph,
  imagesUrl: MetasC.seo.imagesUrl,
  imagesAlt: MetasC.seo.imagesAlt,
});

const Metas = () => {
  return (
    <section className='flex flex-col gap-y-5'>
      <div>
        <Title text='Metas' size='text-3xl' className='mb-3' />
        <Blockquote>{MetasC.seo.description}</Blockquote>
      </div>
      <hr />
      {MetasC.metas.map(({ meta, motivo, id }) => (
        <Card meta={meta} motivo={motivo} key={id} />
      ))}
    </section>
  );
};

export default Metas;
