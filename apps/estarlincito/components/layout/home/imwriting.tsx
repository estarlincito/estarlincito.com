import { allArticles as articles } from '@app/imwriting/.contentlayer/generated';
import { url } from '@app/imwriting/settings';
import { sortByDate, throwAppError } from '@estarlincito/utils';
import { Blockquote } from '@repo/ui/components/blockquote';
import { Heading } from '@repo/ui/components/heading';
import { Image } from '@repo/ui/components/image';
import { Link } from '@repo/ui/components/link';
import { Section } from '@repo/ui/layouts/section';

export const ImwritingUpdate = () => {
  if (articles.length === 0) {
    throwAppError('Please be sure imwriting contentlayer was builded');
  }
  const sortedArticles = sortByDate(articles, 'publishedTime');

  if (!sortedArticles[0])
    throwAppError('Please be sure imwriting contentlayer was builded');

  const { title, cover, coverAlt, description, meta } = sortedArticles[0];

  return (
    <Section>
      <Heading as='h3' className='mb-5' content={title} />
      <Image
        alt={coverAlt}
        className='rounded-2xl'
        src={`https://imwriting.estarlincito.com/${cover}`}
      />
      <Blockquote>{description}</Blockquote>

      <Link
        className='w-fit'
        label='Read more'
        route={url + meta.pathnames.article}
        target='_blank'
      />
    </Section>
  );
};
