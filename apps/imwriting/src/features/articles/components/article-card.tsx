import { dateFormat } from '@estarlincito/utils';
import { type Articles } from '@repo/content/.mdxlayer/imwriting/generated';
import { AspectRatio } from '@repo/ui/components/aspect-ratio';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Image } from '@repo/ui/components/image';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { cn } from '@repo/ui/lib/utils';

export const ArticleCard = ({
  readingTime,
  title,
  cover,
  publishedTime,
  urls,
}: Articles) => (
  <Link className='block h-full' route={urls.article} variant='default'>
    <Card
      className={cn('hover:bg-muted duration-300', 'flex flex-col h-full pt-0')}
    >
      <CardContent className='p-0'>
        <AspectRatio className='overflow-hidden' ratio={16 / 9}>
          <Image alt={title} className='rounded-t-xl' src={cover} />
        </AspectRatio>
      </CardContent>

      <CardHeader className='flex-1'>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardFooter className='justify-between mt-auto'>
        <Text as='span'>{readingTime}</Text>
        <time dateTime={publishedTime}>{dateFormat(publishedTime)}</time>
      </CardFooter>
    </Card>
  </Link>
);
