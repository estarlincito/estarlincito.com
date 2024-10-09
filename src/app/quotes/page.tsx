import Wrapper from '@/components/wrapper';
import { Box, Container, Heading, Separator, Text } from '@radix-ui/themes';
import Quote from './components/quote';

export const metadata = {
  title: 'Estarlincito Quotes',
  description: 'Hey Check my favorite quotes list',
};

const QoutesPage = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <Box>
          <Heading size='6'>Hello There, Welcome to my Quotes list!</Heading>
          <Text>
            Here you can find amazing quotes to inspire your day, good luck!
          </Text>
        </Box>

        <Separator orientation='horizontal' size='4' />

        <Quote />

        {/* <Link href='/quotes'>
          <Button variant='soft'>View more Quotes</Button>
        </Link> */}
      </Wrapper>
    </Container>
  );
};

export default QoutesPage;
