import { Copyright } from '@app/imwriting/components/layout/footer/copyright';
import { Box } from '@repo/ui/components/box';
import { Separator } from '@repo/ui/components/separator';
import { Flex } from '@repo/ui/layouts/flex';

export const Footer = () => (
  <Box>
    <Separator />

    <footer className='p-5'>
      <Flex className='items-center gap-5 justify-center flex-col md:flex-row'>
        <Copyright />
      </Flex>
    </footer>
  </Box>
);
