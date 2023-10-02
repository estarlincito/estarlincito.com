import { Box, Heading } from '@radix-ui/themes';
import { Message } from 'ai';
import Styled from '../../gpt.module.scss';
import Quote from './quote';

interface HeaderPros {
  messages: Message[];
}

const Header = ({ messages }: HeaderPros) => {
  return (
    <>
      {messages.length === 0 ? (
        <Box className={Styled.box}>
          <Heading size='4' mb='1'>
            GPT001
          </Heading>
          <Quote />
        </Box>
      ) : null}
    </>
  );
};

export default Header;
