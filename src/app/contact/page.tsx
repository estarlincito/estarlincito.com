import Blockquote from '@/components/UI/blockquote';
import Linkdoc from '@/components/UI/linkdoc';
import Title from '@/components/UI/title';
import Contact from '@/constants/contact';
import SEO from '@/lib/seo';

//SEO
export const { metadata } = new SEO({
  title: Contact.seo.title,
  description: Contact.seo.description,
  openGraph: Contact.seo.openGraph,
  imagesUrl: Contact.seo.imagesUrl,
  imagesAlt: Contact.seo.imagesAlt,
});

const ContactPage = () => {
  return (
    <section className='flex flex-col gap-y-5'>
      <div>
        <Title text='Ponte en contacto conmigo' size='text-3xl' />
        <Blockquote>{Contact.quote}</Blockquote>
      </div>

      <p>
        {Contact.talkme.main}
        <span role='img' aria-label='Levantando las manos'>
          🙌
        </span>
      </p>

      <p>
        {Contact.talkme.sendme}
        <br />
        <Linkdoc href={Contact.talkme.mailto} target='_self'>
          {Contact.talkme.email}
        </Linkdoc>
      </p>

      <p>{Contact.talkme.able}</p>
      <p>{Contact.talkme.general}</p>

      <ul>
        {Contact.talkme.list.map((cat, id) => (
          <li key={id}>- {cat}</li>
        ))}
      </ul>

      <p>
        {Contact.talkme.hello}
        <Linkdoc href={Contact.talkme.twitterlink} target='_blank'>
          Tweet!
        </Linkdoc>
      </p>
    </section>
  );
};

export default ContactPage;
