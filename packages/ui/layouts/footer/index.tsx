import { Box } from '@repo/ui/components/box';
import { Separator } from '@repo/ui/components/separator';
import { Flex } from '@repo/ui/layouts/flex';
import {
  Copyright,
  type CopyrightProps,
} from '@repo/ui/layouts/footer/copyright';

export const Footer = ({ copyright }: CopyrightProps) => (
  <Box className='mt-5'>
    <Separator />

    <footer className='p-5 '>
      <Flex className='items-center gap-5 justify-center flex-col md:flex-row'>
        <Copyright copyright={copyright} />
      </Flex>
    </footer>
  </Box>
);
