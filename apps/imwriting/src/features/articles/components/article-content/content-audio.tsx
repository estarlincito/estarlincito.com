import { Box } from '@repo/ui/components/box';
import { Text } from '@repo/ui/components/text';
import type {
  AudioHTMLAttributes,
  DetailedHTMLProps,
  SourceHTMLAttributes,
} from 'react';

type Props = DetailedHTMLProps<
  AudioHTMLAttributes<HTMLAudioElement>,
  HTMLAudioElement
> &
  DetailedHTMLProps<SourceHTMLAttributes<HTMLSourceElement>, HTMLSourceElement>;

export const ContentAudio = ({ src, type }: Props) => (
  <Box className='rounded-2xl border-2 p-3'>
    <Text className='my-2 text-3xl font-bold'>Listen to article</Text>

    <audio controls className='w-full outline-0 h-10 border-2 rounded-2xl'>
      <source src={src} type={type} />
      Your browser does not support the audio element.
    </audio>
  </Box>
);
