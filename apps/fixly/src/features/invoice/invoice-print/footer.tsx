import type { PrintContent } from '@repo/content/fixly/invoice/print';
import { Box } from '@repo/ui/components/box';
import { Separator } from '@repo/ui/components/separator';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';

const Slogan = ({ slogan }: Pick<PrintContent, 'slogan'>) => (
  <Flex className=' items-end justify-center'>
    <Text className='italic font-serif'>{slogan}</Text>
  </Flex>
);

const Sign = ({ signature }: Pick<PrintContent, 'signature'>) => (
  <Flex className='flex-col items-end my-8'>
    <Box className='w-20'>
      <Separator />
      <Text unstyled className='font-bold'>
        Estarlin R
      </Text>
      <Text unstyled>{signature}</Text>
    </Box>
  </Flex>
);

export const Footer = ({
  signature,
  slogan,
}: Pick<PrintContent, 'signature' | 'slogan'>) => (
  <footer>
    <Sign {...{ signature }} />
    <Slogan {...{ slogan }} />
  </footer>
);
