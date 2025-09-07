import type { Quote } from '@repo/content/quotely/utils/quotes';
import type { Locale } from '@repo/content/shared/locales';
import { Card, CardContent } from '@repo/ui/components/card';
import { Link } from '@repo/ui/components/link';
import { Gallery } from '@repo/ui/layouts/gallery';

interface TagListProps {
  topics: Quote['tags'];
  lng: Locale;
}

export const TopicList = ({ topics, lng }: TagListProps) => (
  <Gallery>
    {topics.map(({ name, slug }) => (
      <Link
        className='hover:no-underline'
        key={slug}
        route={`/${lng}/topics/${slug}`}
        variant='default'
      >
        <Card className='hover:bg-muted duration-300'>
          <CardContent className='text-center'>{name}</CardContent>
        </Card>
      </Link>
    ))}
  </Gallery>
);
