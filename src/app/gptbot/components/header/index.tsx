import { Box, Heading } from '@radix-ui/themes';
import { Message } from 'ai';
import Quote from './quote';

interface HeaderPros {
  messages: Message[];
}

const Header = ({ messages }: HeaderPros) => {
  return (
    <>
      {messages.length === 0 ? (
        <Box
          style={{
            padding: '2.5rem',
            border: '0.0625rem solid var(--gray-8)',
            borderRadius: '0.5125rem',
          }}
        >
          <Heading size='4' mb='1'>
            GptBot
          </Heading>
          <Quote />
        </Box>
      ) : null}
    </>
  );
};

export default Header;
