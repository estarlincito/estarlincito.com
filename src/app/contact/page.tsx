import Title from '@/components/UI/title';
import Wrapper from '@/components/wrapper';
import Contact from '@/constants/contact';
import SEO from '@/lib/seo';
import { Blockquote, Link, Text } from '@radix-ui/themes';

export const { metadata } = new SEO({
  title: Contact.seo.title,
  description: Contact.seo.description,
  openGraph: Contact.seo.openGraph,
  imagesUrl: Contact.seo.imagesUrl,
  imagesAlt: Contact.seo.imagesAlt,
});

const ContactPage = () => {
  return (
    <Wrapper>
      <Title text='Ponte en contacto conmigo' />
      <Blockquote>{Contact.quote}</Blockquote>

      <Text>
        {Contact.talkme.main}
        <span role='img' aria-label='Levantando las manos'>
          🙌
        </span>
        <br />
        <br />
        {Contact.talkme.sendme}
        <br />
        <Link href={Contact.talkme.mailto} target='_self'>
          {Contact.talkme.email}
        </Link>
      </Text>

      <Text>
        {Contact.talkme.able}
        <br />
        <br />
        {Contact.talkme.general}
      </Text>

      <Text>
        {Contact.talkme.hello}
        <Link href={Contact.talkme.twitterlink} target='_blank'>
          Tweet!
        </Link>
      </Text>
    </Wrapper>
  );
};

export default ContactPage;
