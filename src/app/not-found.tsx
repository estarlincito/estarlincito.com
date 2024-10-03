import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import SEO from '@/lib/seo';
import { Box, Link, Strong, Text } from '@radix-ui/themes';

export const { metadata } = new SEO({
  title: 'Page not found',
  description:
    'Looks like that page took a little detour and doesn’t exist anymore.',
  openGraph: { type: 'website', url: 'https://estarlincito.com/not-found' },
  image_url:
    'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png',
  image_alt: 'Oops!',
});

const NotFound = () => {
  return (
    <Container size='1'>
      <Wrapper align='center'>
        <Box>
          <Text size='9'>Oops!</Text>
          <br />
          <br />
          <Text>
            Looks like that page took a little detour and doesn’t exist anymore.
          </Text>
          <br />
          <br />
          <Text>
            No worries! Head back to&nbsp;
            <Link target='_self' href='http://estarlincito.com' color='sky'>
              <Strong>Home</Strong>
            </Link>
            &nbsp; and keep exploring!
          </Text>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
