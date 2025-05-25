import { dateFormat } from '@estarlincito/utils';
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Image } from '@repo/ui/components/image';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';
import { type Articles } from 'contentlayer/generated';

export const ArticleCard = ({
  title,
  authors,
  cover,
  publishedTime,
  meta,
}: Articles) => (
  <Card className='pt-0 w-75'>
    <a href={meta.pathnames.article}>
      <CardHeader className='p-0 h-50'>
        <Image alt={title} className='rounded-t-lg h-fit' src={cover} />
        <CardTitle className='mt-2 px-5'>{title}</CardTitle>
      </CardHeader>
    </a>

    <CardFooter className='h-5'>
      <Flex className='flex-row justify-between items-center opacity-80 w-full'>
        <Text as='span'>
          By&nbsp;
          <Link
            className='font-bold p-0 text-inherit hover:no-underline'
            route={meta.pathnames.article}
          >
            {...authors}
          </Link>
          &nbsp;
        </Text>

        <time dateTime={publishedTime}>{dateFormat(publishedTime)}</time>
      </Flex>
    </CardFooter>
  </Card>
);
