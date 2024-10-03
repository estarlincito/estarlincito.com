import dateFormat from '@/lib/dateFormat';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Avatar, Box, Flex, Link, Strong, Text } from '@radix-ui/themes';

interface AuthorProps {
  author: string;
  avathar: string;
  updated: string;
}

const Author = (props: AuthorProps) => {
  return (
    <Box ml='5' mb='5' mt='5'>
      <Flex direction='row' align='center' gap='5'>
        <Box width='8'>
          <Avatar
            fallback='E'
            src={props.avathar}
            alt='Avathar'
            radius='full'
            size='4'
          />
        </Box>
        <Text as='p'>
          By&nbsp;
          <Link
            target='_self'
            href='https://estarlincito.com'
            color='gray'
            weight='bold'
          >
            {props.author}
          </Link>
        </Text>
      </Flex>

      <Flex mt='3' direction='row' align='center' gap='2'>
        <Text as='span' color='gray'>
          <CalendarIcon />
        </Text>

        <Text as='span'>
          <Strong>Last update:</Strong>&nbsp;
          <time dateTime={props.updated}>{dateFormat(props.updated)}</time>
        </Text>
      </Flex>
    </Box>
  );
};

export default Author;
