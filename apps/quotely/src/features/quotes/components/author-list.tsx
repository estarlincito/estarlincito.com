import { type Quote } from '@repo/content/quotely/utils/quotes';
import type { Locale } from '@repo/content/shared/locales';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';
import { Link } from '@repo/ui/components/link';
import { Gallery } from '@repo/ui/layouts/gallery';

import { AuthorAvatar } from './author-avatar';

interface AuthorListProps {
  authors: Quote['authors'];
  lng: Locale;
}

export const AuthorList = ({ authors, lng }: AuthorListProps) => (
  <Gallery>
    {authors.map(({ name, slug, bio, avatar }) => (
      <Link key={slug} route={`/${lng}/authors/${slug}`} variant='default'>
        <Card className='hover:bg-muted duration-300 h-full'>
          <CardContent>
            <AuthorAvatar fallback={name} src={avatar} />
          </CardContent>
          <CardHeader>
            <CardTitle className='text-center'>{name}</CardTitle>
            <CardDescription className='text-center truncate-3-line'>
              {bio}
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    ))}
  </Gallery>
);
