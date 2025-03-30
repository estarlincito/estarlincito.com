import { Box, Strong, Text } from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import React, {
  AudioHTMLAttributes,
  DetailedHTMLProps,
  SourceHTMLAttributes,
} from 'react';

const styles = {
  audio: stylez.create({
    borderRadius: '0.25rem',
    height: '2.5rem',
    outline: 'none',
    width: '100%',
  }),

  box: stylez.create({
    backgroundColor: 'var(--gray-4)',
    borderRadius: '0.5rem',
  }),
};

type Props = DetailedHTMLProps<
  AudioHTMLAttributes<HTMLAudioElement>,
  HTMLAudioElement
> &
  DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;

const Audio = ({ src, type }: Props) => {
  return (
    <Box p='3' {...stylez.className(styles.box)}>
      <Text as='p' size='5' my='2'>
        <Strong>Listen to article</Strong>
      </Text>

      <audio controls {...stylez.className(styles.audio)}>
        <source src={src} type={type} />
        Your browser does not support the audio element.
      </audio>
    </Box>
  );
};

export default Audio;
