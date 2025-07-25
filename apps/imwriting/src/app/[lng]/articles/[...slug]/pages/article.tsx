import { type Articles } from '@repo/content/.mdxlayer/imwriting/generated';
import { getArticleContent } from '@repo/content/imwriting/article';
import type { Locale } from '@repo/content/utils/locales';
import { Breadcrumb } from '@repo/ui/components/breadcrumb';
import { Heading } from '@repo/ui/components/heading';
import { Container } from '@repo/ui/layouts/container';

import { ArticleAuthor } from '@/features/articles/components/article-author';
import { ArticleCheck } from '@/features/articles/components/article-check';
import { ArticleContent } from '@/features/articles/components/article-content';
import { ArticleInteresting } from '@/features/articles/components/article-interesting';
import { ArticleQuote } from '@/features/articles/components/article-quote';
import { ArticleShare } from '@/features/articles/components/article-share';

export const ArticlePage = async ({
  lang,
  breadcrumb,
  slugs,
  category,
  title,
  check,
  cover,
  coverAlt,
  readingTime,
  description,
  authors,
  meta,
  _body,
  avatar,
  modifiedTime,
}: Articles) => {
  const content = await getArticleContent(lang as Locale);

  return (
    <Container className='p-0' size='3'>
      <Breadcrumb links={breadcrumb.article} />
      <Heading className='my-5' content={title} />
      <ArticleCheck
        check={check}
        readingTime={readingTime}
        {...content.check}
      />
      <ArticleQuote alt={coverAlt} quote={description} src={cover} />
      <ArticleAuthor
        authors={authors}
        avatar={avatar}
        {...content.author}
        modifiedTime={modifiedTime}
      />
      <ArticleContent content={_body.code} />
      <ArticleShare
        category={category}
        description={description}
        title={content.share.title}
        url={meta.article.openGraph.url}
      />
      <ArticleInteresting
        lng={lang as Locale}
        pathname={slugs.article}
        title={content.interesting.title}
      />
    </Container>
  );
};
