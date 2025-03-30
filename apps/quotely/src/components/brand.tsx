import { Box, Flex, Link, Strong } from '@radix-ui/themes';
import { quotely } from '@repo/constants';
import stylez from '@stylezjs/stylez';
import Image from 'next/image';

const styles = stylez.create({
  borderRadius: '100%',
  //backgroundColor: 'var(--sky-8)',
  //boxShadow: '4px 4px 10px 2px rgba(0, 0, 0, 0.3)',
  height: '100%',
  width: '100%',
});

const Brand = () => {
  return (
    <Box>
      <Flex
        asChild
        direction='row'
        align='center'
        gapX='2'
        width='40px'
        height='40px'
      >
        <Link href='/'>
          <Image
            width={100}
            height={100}
            src='/assets/favicons/android-chrome-512x512.png'
            alt='Logo'
            {...stylez.className(styles)}
          />
          <Strong>{quotely.siteName}</Strong>
        </Link>
      </Flex>
    </Box>
  );
};

export default Brand;
