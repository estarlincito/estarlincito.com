import { dateFormat } from '@estarlincito/utils';
import { CalendarIcon } from '@radix-ui/react-icons';
import { Avatar, Box, Flex, Link, Strong, Text } from '@radix-ui/themes';
import React from 'react';

interface Props {
  authors: string[];
  avatar: string;
  modifiedTime: string;
}

const Author = (props: Props) => {
  return (
    <Box ml='5' mb='5' mt='5'>
      <Flex direction='row' align='center' gap='5'>
        <Box width='8'>
          <Avatar
            fallback='E'
            src={props.avatar}
            alt='Avatar'
            radius='full'
            size='4'
          />
        </Box>
        <Text as='p'>
          By&nbsp;
          <Link
            target='_blank'
            href='https://estarlincito.com'
            weight='bold'
            color='gray'
          >
            {...props.authors}
          </Link>
        </Text>
      </Flex>

      <Flex mt='3' direction='row' align='center' gap='2'>
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
};

export default Author;
