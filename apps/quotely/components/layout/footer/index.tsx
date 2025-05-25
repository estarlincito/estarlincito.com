import { Copyright } from '@app/quotely/components/layout/footer/copyright';
import { Box } from '@repo/ui/components/box';
import { Separator } from '@repo/ui/components/separator';
import { Flex } from '@repo/ui/layouts/flex';
import { cn } from '@repo/ui/lib/utils';

export const Footer = () => (
  <Box>
    <Separator />

    <footer className='p-5'>
      <Flex
        className={cn(
          'items-center gap-5 justify-center flex-col',
          'md:flex-row',
        )}
      >
        {/* <ThemeToggle /> */}
        <Copyright />
      </Flex>
    </footer>
  </Box>
);
