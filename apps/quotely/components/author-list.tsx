import { AUTHORS_ROUTE } from '@app/quotely/constants/authors';
import type { returnSchema } from '@app/quotely/schema/quotes/return';
import { Link } from '@repo/ui/components/link';
import { Topic, TopicContent, TopicItem } from '@repo/ui/components/topic';
import type { z } from 'zod';
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
            route={`${AUTHORS_ROUTE}/${slug}`}
            variant='default'
          >
            {name}
          </Link>
        </TopicItem>
      ))}
    </TopicContent>
  </Topic>
);
