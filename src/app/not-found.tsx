import Linkdoc from '@/components/UI/linkdoc';
import SEO from '@/lib/seo';
import { Box, Grid, Heading } from '@radix-ui/themes';

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
    <Grid align='center'>
      <Box>
        <Heading>Lo sentimos…</Heading>
        <p className='text-2xl'>Esta página no existe.</p>

        <p>
          Puedes volver a&nbsp;
          <Linkdoc target='_self' href='http://estarlincito.com' color='sky'>
            inicio
          </Linkdoc>
        </p>
      </Box>
    </Grid>
  );
};

export default NotFound;
