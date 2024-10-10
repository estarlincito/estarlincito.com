import Wrapper from '@/components/wrapper';
import {
  Box,
  Button,
  Container,
  Heading,
  Separator,
  Text,
} from '@radix-ui/themes';
import Link from 'next/link';
import Quote from './components/quote';

export const metadata = {
  title: 'Estarlincito Quote',
  description: 'Hey check a random quote',
};

const QoutePage = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <Box>
          <Heading size='6'>Hello There, check a radom Quote!</Heading>
          <Text>Here you can find a quote to inspire your day!</Text>
        </Box>

        <Separator orientation='horizontal' size='4' />

        <Quote />

        <Link href='quote/quotes'>
          <Button variant='soft'>View more Quotes</Button>
        </Link>
      </Wrapper>
    </Container>
  );
};

export default QoutePage;
