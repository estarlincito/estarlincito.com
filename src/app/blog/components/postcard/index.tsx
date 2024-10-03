import dateFormat from '@/lib/dateFormat';
import { Box, Card, Flex, Grid, Link, Text } from '@radix-ui/themes';
import Image from '@UI/image';
import { Blog } from 'contentlayer/generated';

const PostCard = (props: Blog) => {
  return (
    <Card variant='surface' style={{ padding: 0 }}>
      <article></article>
      <Box height='15rem' asChild>
        <figure>
          <Link href={props.urls.post} target='_self'>
            <Image src={props.cover} alt={props.title} />
          </Link>
        </figure>
      </Box>

      <Grid gap='1' height='7rem' p='2' asChild>
        <figcaption>
          <Link
            href={props.urls.post}
            size='3'
            target='_self'
            weight='bold'
            color='gray'
          >
            {props.title}
          </Link>

          <Flex direction='row' justify='between'>
            <Text as='span'>
              By&nbsp;
              <Link href='/' target='_self' color='gray' weight='bold'>
                {props.author}
              </Link>
            </Text>

            <time dateTime={props.publishedAt}>
              {dateFormat(props.publishedAt)}
            </time>
          </Flex>
        </figcaption>
      </Grid>
    </Card>
  );
};

export default PostCard;
