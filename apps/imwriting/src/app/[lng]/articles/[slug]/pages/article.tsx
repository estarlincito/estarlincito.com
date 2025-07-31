import { type Articles } from '@repo/content/.mdxlayer/imwriting/generated';
import { getArticleContent } from '@repo/content/imwriting/article';
import { loadTranslations } from '@repo/content/imwriting/locales';
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
  category,
  subcategory,
  title,
  check,
  cover,
  urls,
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
  const { labels } = await loadTranslations(lang as Locale);

  const links = [
    { label: labels.nav.articles, route: urls.articles },
    { label: category, route: urls.category },
    { label: subcategory, route: urls.subcategory },
  ];

  return (
    <Container className='p-0' size='3'>
      <Breadcrumb links={links} />
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
        lang={lang}
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
        pathname={urls.article}
        title={content.interesting.title}
      />
    </Container>
  );
};
