import Container from '@/components/container';
import Tags from '@/constants/tags';
import SEO from '@/lib/seo';
import TagsLayout from '../components/tags';

export const { metadata } = new SEO({
  title: Tags.seo.title,
  description: Tags.seo.description,
  openGraph: Tags.seo.openGraph,
  imagesUrl: Tags.seo.imagesUrl,
  imagesAlt: Tags.seo.imagesAlt,
});

const TagsPage = () => {
  return (
    <Container size='3'>
      <TagsLayout />
    </Container>
  );
};

export default TagsPage;
