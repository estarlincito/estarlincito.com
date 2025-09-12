import type { PrintContent } from '@repo/content/fixly/invoice/print';
import { Avatar } from '@repo/ui/components/avatar';
import { Box } from '@repo/ui/components/box';
import { Heading } from '@repo/ui/components/heading';
import { Link } from '@repo/ui/components/link';
import { Separator } from '@repo/ui/components/separator';
import { Strong } from '@repo/ui/components/strong';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';
import { Grid } from '@repo/ui/layouts/grid';
import { cn } from '@repo/ui/lib/utils';

export const Brand = ({ by, lng }: Pick<PrintContent, 'by' | 'lng'>) => (
  <Link
    className={cn(
      'text-xl',
      'flex items-center justify-center gap-x-2 w-fit',
      'w-80',
    )}
    route={`https://fixly.estarlincito.com/${lng}`}
    variant='default'
  >
    <Avatar
      className='w-20 h-20 text-xl'
      fallback='E'
      radius='sm'
      src='https://cdn.estarlincito.com/fixly/assets/avatars/avatar-2.png'
    />

    <Flex className='items-baseline gap-x-1'>
      <Text as='span' className='text-5xl font-bold'>
        Fixly
      </Text>
      <Text as='span' className='text-[16px] font-extralight'>
        {by}
      </Text>
    </Flex>
  </Link>
);

const int = [
  { label: 'Tel', route: 'tel:809-250-7747', value: '809-250-7747' },
  {
    label: 'Web',
    value: 'fixly.estarlincito.com',
  },
  {
    label: 'Email',

    value: 'contact@estarlincito.com',
  },
  { label: 'BRD', value: '9600214274' },
  { label: 'BHD', value: '31789560010' },
  { label: 'BPD', value: '829240720' },
  { label: 'APAP', value: '1028624115' },
];

export const Header = ({
  summary,
  by,
  lng,
}: Pick<PrintContent, 'summary' | 'by' | 'lng'>) => (
  <Flex className='justify-center'>
    <Brand {...{ by, lng }} />
    <Box>
      <Separator className='mx-3 block' orientation='vertical' />
    </Box>
    <Flex className='flex-col w-80'>
      <Heading as='h5'>{summary}</Heading>
      <Flex unstyled className='flex-col'>
        {int.slice(0, 3).map(({ label, value }) => {
          let route = `https://${value}/${lng}`;
          if (label === 'Tel') route = `tel:${value}`;
          if (label === 'Email') route = `mailto:${value}`;

          return (
            <Text unstyled key={label}>
              <Strong className='text-gray-700'>{label}: </Strong>
              <Link
                className='text-blue-700'
                label={value}
                route={route}
                variant='default'
              />
            </Text>
          );
        })}
      </Flex>

      <Grid className='grid-cols-2 gap-x-1 w-fit'>
        {int.slice(3, 7).map(({ label, value }) => (
          <Text unstyled key={label}>
            <Strong className='text-gray-700'>{label}:</Strong> {value}
          </Text>
        ))}
      </Grid>
    </Flex>
  </Flex>
);
