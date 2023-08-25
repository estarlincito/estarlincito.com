import { Flex, Heading, Link, Text } from '@radix-ui/themes';

interface TagsProps {
  tags: string[];
}

const Tags = (props: TagsProps) => {
  return (
    <Flex align='center'>
      <Heading as='h5' size='4' weight='bold'>
        Tags:
      </Heading>

      <Flex>
        {props.tags.map((tag, id) => (
          <Text as='span' m='1' key={id}>
            <Link href={`/blog/tags/${tag}`} target='_self' size='2'>
              #{tag}
            </Link>
          </Text>
        ))}
      </Flex>
    </Flex>
  );
};

export default Tags;
