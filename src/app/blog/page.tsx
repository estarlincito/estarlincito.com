import { ArticleList, Container } from '@/components/UI/organisms';
import { allBlogs } from 'contentlayer/generated';
import { Metadata } from 'next';

//SEO
export const metadata: Metadata = {
  title: 'Blog | Estarlincito',
  description:
    'Lee mis pensamientos sobre desarrollo de software, diseño web criptomonedas y mucho más.',
};

const BlogPage = () => {
  return (
    <Container>
      <ArticleList
        justify='justify-center md:justify-between'
        articles={allBlogs}
      />
    </Container>
  );
};

export default BlogPage;
