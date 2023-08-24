import { Flex, Heading, Link } from '@radix-ui/themes';

interface TagsProps {
  tags: string[];
}

const Tags = (props: TagsProps) => {
  return (
    <Flex align='center'>
      <Heading as='h5' size='4' weight='bold'>
        Tags:
      </Heading>

      <ul className='flex'>
        {props.tags.map((tag, id) => (
          <li key={id} className='m-1'>
            <Link href={`/blog/tags/${tag}`} target='_self' size='2'>
              #{tag}
            </Link>
          </li>
        ))}
      </ul>
    </Flex>
  );
};

export default Tags;
