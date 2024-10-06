import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import Home from '@/constants/home';
import SEO from '@/lib/seo';
import { Avatar, Box, Flex, Link, Separator, Text } from '@radix-ui/themes';

export const { metadata } = new SEO({
  title: Home.seo.title,
  description: Home.seo.description,
  openGraph: Home.seo.openGraph,
  image_url: Home.seo.image_url,
  image_alt: Home.seo.image_alt,
});

const Welcome = () => {
  return (
    <Flex direction='column' align='center' gap='3'>
      <Avatar radius='full' size='9' src='/images/avatar.jpeg' fallback='E' />

      <Box maxWidth={'500px'} style={{ textAlign: 'center' }}>
        <Text>{Home.aboutme}</Text>
      </Box>

      <Link href='/blog' target='_self'>
        Look at my blog!
      </Link>
    </Flex>
  );
};

const Moreinf = () => {
  return (
    <Flex direction='column' align='center' gap='3'>
      <Separator my='3' size='4' />
      <Text>{Home.moreinf}</Text>
    </Flex>
  );
};

const Nav = () => {
  return (
    <Flex
      asChild
      justify='center'
      gapX='4'
      mt='4'
      direction={{ initial: 'column', xs: 'row' }}
    >
      <ul>
        {Home.links.map((link, index) => (
          <li key={index}>
            <Link href={link.route} target={link.target!}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
};

const HomePage = () => {
  return (
    <Container size='3'>
      <Wrapper>
        <Welcome />
        <Moreinf />
        <Nav />
      </Wrapper>
    </Container>
  );
};

export default HomePage;
