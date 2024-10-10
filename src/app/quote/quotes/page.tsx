import Wrapper from '@/components/wrapper';
import { Box, Container, Heading, Separator, Text } from '@radix-ui/themes';
import Quotes from '../components/quotes';

export const metadata = {
  title: 'Estarlincito Quotes',
  description: 'Hey Check my favorite quotes list',
};

const QuotesPage = () => {
  return (
    <Container size='3'>
      <Wrapper align='start'>
        <Box>
          <Heading size='6'>Welcome to my Quotes list!</Heading>
          <Text>
            Here you can find amazing quotes to inspire your day, good luck!
          </Text>
        </Box>

        <Separator orientation='horizontal' size='4' />

        <Quotes />
      </Wrapper>
    </Container>
  );
};

export default QuotesPage;
