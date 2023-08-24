import Title from '@/components/UI/title';
import Tags from '@/constants/tags';
import Post from '@/lib/post';
import SEO from '@/lib/seo';
import { Box, Link, Text } from '@radix-ui/themes';
import Styled from './tags.module.scss';

export const { metadata } = new SEO({
  title: Tags.seo.title,
  description: Tags.seo.description,
  openGraph: Tags.seo.openGraph,
  imagesUrl: Tags.seo.imagesUrl,
  imagesAlt: Tags.seo.imagesAlt,
});

const TagsPage = () => {
  const { allTags } = Post;

  return (
    <Box className={Styled.tags}>
      <Title text='Tags' />

      <ul>
        {allTags.map(({ tag, count }, id) => (
          <li key={id}>
            <Link href={`/blog/tags/${tag}`} target='_self'>
              {tag}&nbsp;
              <Text as='span' color='gray'>
                ({count})
              </Text>
            </Link>
          </li>
        ))}
      </ul>
    </Box>
  );
};

export default TagsPage;
