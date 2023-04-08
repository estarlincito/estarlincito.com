import { ArticleList, Container } from '@/components/UI/organisms';
import clsx from 'clsx';
import { allBlogs } from 'contentlayer/generated';
import { redirect } from 'next/navigation';

interface Props {
  params: { tag: string };
}

//SEO
export const generateMetadata = ({ params }: Props) => {
  const { tag } = params;
  const title = `${tag.charAt(0).toUpperCase()}${tag.slice(1)} | Estarlincito`;

  return {
    title,
    description:
      'Artículos informativos, consejos prácticos y enlaces a recursos útiles.',
  };
};

const TagPage: React.FC<Props> = ({ params }) => {
  const { tag } = params;

  const articles = allBlogs.filter((item) =>
    item.tags.some((tagItem) => tagItem === tag)
  );

  if (articles.length === 0) {
    redirect('/not-found');
  }

  return (
    <Container>
      <ArticleList
        articles={articles}
        justify={clsx(
          'justify-center',
          articles.length > 1 && 'md:justify-between'
        )}
      />
    </Container>
  );
};

export default TagPage;
