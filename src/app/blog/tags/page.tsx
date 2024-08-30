import Title from '@/components/UI/title';
import Container from '@/components/container';
import Tags from '@/constants/tags';
import Post from '@/lib/post';
import SEO from '@/lib/seo';
import { Flex, Link, Text } from '@radix-ui/themes';

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
    <Container size='3'>
      <Flex
        style={{ backgroundColor: 'Highlight' }}
        justify='center'
        align='center'
        gap={{ sm: '5', initial: '6' }}
        minHeight='80vh'
        direction={{ sm: 'column' }}
      >
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
      </Flex>
    </Container>
  );
};

export default TagsPage;
