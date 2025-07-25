import { routes } from '@repo/content/quotely/routes';
import type { returnSchema } from '@repo/lib/schemas/quotes/return';
import { Link } from '@repo/ui/components/link';
import { Topic, TopicContent, TopicItem } from '@repo/ui/components/topic';
import type { z } from 'zod/v4';

interface AuthorListProps {
  authors: z.infer<typeof returnSchema.quote>['authors'];
}

export const AuthorList = ({ authors }: AuthorListProps) => (
  <Topic>
    <TopicContent>
      {authors.map(({ name, id, slug }) => (
        <TopicItem className='rounded-sm opacity-90' key={id}>
          <Link
            className='hover:no-underline'
            route={`${routes.authors}/${slug}`}
            variant='default'
          >
            {name}
          </Link>
        </TopicItem>
      ))}
    </TopicContent>
  </Topic>
);
