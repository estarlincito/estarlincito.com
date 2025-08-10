import { routes } from '@repo/content/quotely/routes';
import type { Locale } from '@repo/content/utils/locales';
import type { returnSchema } from '@repo/lib/schemas/quotes/return';
import { Link } from '@repo/ui/components/link';
import { Topic, TopicContent, TopicItem } from '@repo/ui/components/topic';
import type { z } from 'zod/v4';

interface AuthorListProps {
  authors: z.infer<typeof returnSchema.quote>['authors'];
  lng: Locale;
}

export const AuthorList = ({ authors, lng }: AuthorListProps) => (
  <Topic>
    <TopicContent>
      {authors.map(({ name, id, slug }) => (
        <TopicItem className='rounded-sm opacity-90' key={id}>
          <Link
            className='hover:no-underline'
            route={`${lng}${routes.authors}/${slug}`}
            variant='default'
          >
            {name}
          </Link>
        </TopicItem>
      ))}
    </TopicContent>
  </Topic>
);
