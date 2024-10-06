import { Box, Flex, Heading } from '@radix-ui/themes';
import Threads from './threads';
import URL from './url';
import Wa from './wa';
import X from './x';

interface ShareProps {
  summary: string;
  url: string;
  category: string;
}

const Share = ({ category, summary, url }: ShareProps) => {
  return (
    <Box>
      <Heading my='4' size='6'>
        Share to:
      </Heading>

      <Flex gap='3'>
        <Wa url={url} summary={summary} />
        <X url={url} summary={summary} tag={category} />
        <Threads url={url} summary={summary} tag={category} />
        <URL url={`https://estarlincito.com${url}`} />
      </Flex>
    </Box>
  );
};

export default Share;
