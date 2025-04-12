import { Box, Flex, Heading } from '@repo/ui';
import { FaThreads, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

import ShareLink from './link';
import Url from './url';

interface Props {
  description: string;
  url: string;
  category: string;
}

const Share = ({ category, description, url }: Props) => (
  <Box>
    <Heading my='4' size='6'>
      Share to:
    </Heading>

    <Flex gap='3'>
      <ShareLink
        description={description}
        host='whatsapp://send?text='
        IconType={<FaWhatsapp />}
        tag={category}
        url={url}
      />

      <ShareLink
        description={description}
        host='https://twitter.com/intent/tweet?text='
        IconType={<FaXTwitter />}
        tag={category}
        url={url}
      />

      <ShareLink
        description={description}
        host='https://threads.net/intent/post?text='
        IconType={<FaThreads />}
        tag={category}
        url={url}
      />

      <Url url={url} />
    </Flex>
  </Box>
);

export default Share;
