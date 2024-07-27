import Container from '@/components/container';
import Wrapper from '@/components/wrapper';
import SEO from '@/lib/seo';
import { Box, Grid, Link, Text } from '@radix-ui/themes';

export const { metadata } = new SEO({
  title: 'Página no encontrada',
  description: 'Esta página no existe.',
  openGraph: { type: 'website', url: 'https://estarlincito.com/not-found' },
  imagesUrl:
    'https://images.pexels.com/photos/4439425/pexels-photo-4439425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  imagesAlt: 'error',
});

const NotFound = () => {
  return (
    <Container size='1'>
      <Wrapper>
        <Grid align='center'>
          <Box>
            <Text size='9'>404</Text>
            <br />
            <br />
            <Text>Lo sentimos…</Text>
            <br />
            <Text className='text-2xl'>Esta página no existe.</Text>
            <br />
            <Text>
              Puedes volver a&nbsp;
              <Link target='_self' href='http://estarlincito.com' color='sky'>
                inicio
              </Link>
            </Text>
          </Box>
        </Grid>
      </Wrapper>
    </Container>
  );
};

export default NotFound;
