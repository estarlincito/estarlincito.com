import { dateFormat } from '@estarlincito/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import type { ArticleContent } from '@repo/content/imwriting/article';
import { Avatar } from '@repo/ui/components/avatar';
import { Box } from '@repo/ui/components/box';
import { Link } from '@repo/ui/components/link';
import { Strong } from '@repo/ui/components/strong';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';

interface AuthorProps extends Omit<ArticleContent['author'], 'author'> {
  authors: string[];
  avatar: string;
  modifiedTime: string;
}

export const ArticleAuthor = ({
  by,
  last,
  authors,
  avatar,
  modifiedTime,
}: AuthorProps) => (
  <Box className='mt-5 mb-10 opacity-80'>
    <Flex className='items-center flex-row gap-x-3'>
      <Box className='w-8'>
        <Avatar alt='Avatar' fallback='E' radius='xl' src={avatar} />
      </Box>
      <Text as='span'>
        {by}&nbsp;
        <Link
          className='font-bold'
          route='https://estarlincito.com'
          variant='default'
        >
          {...authors}
        </Link>
      </Text>
    </Flex>

    <Flex className='items-center flex-row gap-2 mt-3'>
      <Text as='span'>
        <CalendarIcon />
      </Text>

      <Text as='span'>
        <Strong>{last}</Strong>&nbsp;
        <time dateTime={modifiedTime}>{dateFormat(modifiedTime)}</time>
      </Text>
    </Flex>
  </Box>
);
