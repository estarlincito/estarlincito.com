'use client';
import useGPT from '@/Hooks/useGPT';
import { Box, Heading } from '@radix-ui/themes';
import Styled from '../../gpt.module.scss';
import Quote from './quote';

const Header = () => {
  const { chat } = useGPT();

  return (
    <>
      {chat.length === 1 ? (
        <Box className={Styled.box}>
          <Heading size='4'>GPT001</Heading>
          <Quote />
        </Box>
      ) : null}
    </>
  );
};

export default Header;
