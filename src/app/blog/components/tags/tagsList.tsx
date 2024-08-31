import Post from '@/lib/post';
import { Link, Table, Text } from '@radix-ui/themes';

const { allTags } = Post;
const _allTags = new Array();

interface CreateUnorderedList {
  tag: string;
  count: number;
}

const createUnorderedList = (
  array: CreateUnorderedList[],
  startIndex: number
) => {
  const endIndex = Math.min(startIndex + 2, array.length - 1);
  const listItems = array.slice(startIndex, endIndex + 1);

  const _listItems = listItems.map((item) => (
    <Table.Cell key={startIndex}>
      <Link href={`/blog/tags/${item.tag}`} target='_self'>
        {item.tag}&nbsp;
        <Text as='span' color='gray'>
          ({item.count})
        </Text>
      </Link>
    </Table.Cell>
  ));

  return <Table.Row key={startIndex}>{_listItems}</Table.Row>;
};

const TasgList = () => {
  for (let i = 0; i < allTags.length; i += 3) {
    const unorderedList = createUnorderedList(allTags, i);
    _allTags.push(unorderedList);
  }

  return (
    <Table.Root size='1'>
      <Table.Body>{_allTags}</Table.Body>
    </Table.Root>
  );
};

export default TasgList;
