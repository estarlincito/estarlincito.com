import { routes } from '@repo/content/quotely/routes';
import type { returnSchema } from '@repo/lib/schemas/quotes/return';
import { Link } from '@repo/ui/components/link';
import { Topic, TopicContent, TopicItem } from '@repo/ui/components/topic';
import type { z } from 'zod/v4';

interface TagsListProps {
  tags: z.infer<typeof returnSchema.quote>['tags'];
  lng?: 'en';
}

export const TagsList = ({ tags, lng = 'en' }: TagsListProps) => (
  <Topic>
    <TopicContent>
      {tags.map(({ name, id }) => (
        <TopicItem className='rounded-sm opacity-90' key={id}>
          <Link
            className='hover:no-underline'
            route={`/${lng}/${routes.tags}/${name}`}
            variant='default'
          >
            {name}
          </Link>
        </TopicItem>
      ))}
    </TopicContent>
  </Topic>
);
