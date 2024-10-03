import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import Contact from '@/constants/contact';
import SEO from '@/lib/seo';
import { Blockquote, Link, Text } from '@radix-ui/themes';
import Title from '@UI/title';

export const { metadata } = new SEO({
  title: Contact.seo.title,
  description: Contact.seo.description,
  openGraph: Contact.seo.openGraph,
  image_url: Contact.seo.image_url,
  image_alt: Contact.seo.image_alt,
});

const ContactPage = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <Title text='Get in Touch!' />
        <Blockquote mb='7'>{Contact.quote}</Blockquote>

        <Text>
          {Contact.talkme.main}
          <Text as='span' role='img' aria-label='Raising hands'>
            🙌
          </Text>
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
    </Container>
  );
};

export default ContactPage;
