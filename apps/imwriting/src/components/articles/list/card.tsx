import { dateFormat } from '@estarlincito/utils';
import {
  Box,
  Card as CardRadix,
  Flex,
  Grid,
  Image,
  Link,
  Text,
} from '@repo/ui';
import stylez from '@stylezjs/stylez';
import { type Articles } from 'contentlayer/generated';

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
      <Box asChild height='15rem'>
        <figure>
          <Link href={pathnames.article} target='_self'>
            <Image alt={title} src={cover} />
          </Link>
        </figure>
      </Box>

      <Grid asChild gap='1' height='7rem' p='3'>
        <figcaption>
          <Link
            color='gray'
            href={pathnames.article}
            size='3'
            target='_self'
            weight='bold'
          >
            {title}
          </Link>

          <Flex direction='row' justify='between'>
            <Text as='span'>
              By&nbsp;
              <Link color='gray' href='/' target='_self' weight='bold'>
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
