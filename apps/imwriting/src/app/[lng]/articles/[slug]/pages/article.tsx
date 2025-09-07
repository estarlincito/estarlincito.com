import {
  type ArticleProps,
  getArticleContent,
} from '@repo/content/imwriting/articles/article';
import type { Locale } from '@repo/content/shared/locales';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';
import CatchAll from '@repo/ui/pages/catch-all';

import { ArticleAuthor } from '@/features/articles/components/article-author';
import { ArticleCheck } from '@/features/articles/components/article-check';
import { ArticleContent } from '@/features/articles/components/article-content';
import { ArticleInteresting } from '@/features/articles/components/article-interesting';
import { ArticleQuote } from '@/features/articles/components/article-quote';
import { ArticleShare } from '@/features/articles/components/article-share';

export const ArticlePage = async ({ params }: ArticleProps) => {
  const content = await getArticleContent(params);
  if (!content) return CatchAll({ params });

  return (
    <Container className='p-0' size='3'>
      <Breadcrumb links={content.links} />
      <Heading className='my-5' content={content.title} />

      <ArticleCheck
        check={content.check}
        readingTime={content.readingTime}
        underReview={content.underReview}
        verified={content.verified}
      />

      <ArticleQuote
        alt={content.coverAlt}
        quote={content.description}
        src={content.cover}
      />

      <ArticleAuthor
        authors={content.authors}
        avatar={content.avatar}
        by={content.by}
        lang={content.lang}
        last={content.last}
        modifiedTime={content.modifiedTime}
      />

      <ArticleContent content={content._body.code} />

      <ArticleShare
        category={content.category}
        description={content.description}
        share={content.share}
        url={content.meta.article.openGraph.url}
      />

      <ArticleInteresting
        interesting={content.interesting}
        label={content.label}
        lng={content.lang as Locale}
        pathname={content.urls.article}
        route={content.route}
      />
    </Container>
  );
};
