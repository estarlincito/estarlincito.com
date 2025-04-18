import { dateFormat } from '@estarlincito/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Avatar, Box, Flex, Link, Strong, Text } from '@repo/ui';

interface Props {
  authors: string[];
  avatar: string;
  modifiedTime: string;
}

const Author = (props: Props) => (
  <Box mb='5' ml='5' mt='5'>
    <Flex align='center' direction='row' gap='5'>
      <Box width='8'>
        <Avatar
          alt='Avatar'
          fallback='E'
          radius='full'
          size='4'
          src={props.avatar}
        />
      </Box>
      <Text as='p'>
        By&nbsp;
        <Link
          color='gray'
          href='https://estarlincito.com'
          target='_blank'
          weight='bold'
        >
          {...props.authors}
        </Link>
      </Text>
    </Flex>

    <Flex align='center' direction='row' gap='2' mt='3'>
      <Text as='span'>
        <CalendarIcon />
      </Text>

      <Text as='span'>
        <Strong>Last update:</Strong>&nbsp;
        <time dateTime={props.modifiedTime}>
          {dateFormat(props.modifiedTime)}
        </time>
      </Text>
    </Flex>
  </Box>
);

export default Author;
