import type { Articles } from '@repo/content/.mdxlayer/imwriting/generated';
import { Gallery } from '@repo/ui/layouts/gallery';

import { ArticleCard } from '@/features/articles/components/article-card';

interface ArticlesListProps {
  articles: Articles[];
}

export const ArticlesList = ({ articles }: ArticlesListProps) => (
  <Gallery>
    {articles.map((article) => (
      <ArticleCard {...article} key={article._id} />
    ))}
  </Gallery>
);
