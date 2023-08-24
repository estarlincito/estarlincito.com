import Wrapper from '@/components/wrapper';
import Home from '@/constants/home';
import SEO from '@/lib/seo';
import { Avatar, Box, Flex, Link, Separator, Text } from '@radix-ui/themes';

export const { metadata } = new SEO({
  title: Home.seo.title,
  description: Home.seo.description,
  openGraph: Home.seo.openGraph,
  imagesUrl: Home.seo.imagesUrl,
  imagesAlt: Home.seo.imagesAlt,
});

const Welcome = () => {
  return (
    <Flex direction='column' align='center' gap='3'>
      <Avatar radius='full' size='9' src='/images/avatar.jpeg' fallback='E' />

      <Box className='max-w-lg text-center'>
        <Text>{Home.aboutme}</Text>
      </Box>

      <Link href='https://github.com/estarlincito' target='_blank'>
        Mira mis proyectos web
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
    <ul className='mt-5 md:flex md:justify-center md:gap-x-5'>
      {Home.links.map((link, index) => (
        <li key={index} className='mb-1 md:mb-0'>
          <Link href={link.route} target={link.target!}>
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const HomePage = () => {
  return (
    <Wrapper>
      <Welcome />
      <Moreinf />
      <Nav />
    </Wrapper>
  );
};

export default HomePage;
