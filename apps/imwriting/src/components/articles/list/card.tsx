import { dateFormat } from '@estarlincito/utils';
import {
  Box,
  Card as CardRadix,
  Flex,
  Grid,
  Link,
  Text,
} from '@radix-ui/themes';
import stylez from '@stylezjs/stylez';
import { type Articles } from 'contentlayer/generated';
import React from 'react';

import Image from '@/components/ui/image';

const styles = {
  card: stylez.create({
    padding: 0,
  }),
};

const Card = (props: Articles) => {
  const {
    meta: { pathnames },
    title,
    authors,
    cover,
    publishedTime,
  } = props;

  return (
    <CardRadix variant='surface' {...stylez.className(styles.card)}>
      <Box height='15rem' asChild>
        <figure>
          <Link href={pathnames.article} target='_self'>
            <Image src={cover} alt={title} />
          </Link>
        </figure>
      </Box>

      <Grid gap='1' height='7rem' p='3' asChild>
        <figcaption>
          <Link
            href={pathnames.article}
            size='3'
            target='_self'
            weight='bold'
            color='gray'
          >
            {title}
          </Link>

          <Flex direction='row' justify='between'>
            <Text as='span'>
              By&nbsp;
              <Link href='/' target='_self' color='gray' weight='bold'>
                {...authors}
              </Link>
            </Text>

            <time dateTime={publishedTime}>{dateFormat(publishedTime)}</time>
          </Flex>
        </figcaption>
      </Grid>
    </CardRadix>
  );
};

export default Card;
