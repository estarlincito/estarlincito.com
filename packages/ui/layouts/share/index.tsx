import { Box } from '@repo/ui/components/box';
import { Heading } from '@repo/ui/components/heading';
import { Flex } from '@repo/ui/layouts/flex';
import { Url } from '@repo/ui/layouts/share//url';
import { ShareLink } from '@repo/ui/layouts/share/link';
import { FaThreads, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

interface Props {
  description: string;
  url: string;
  category: string;
}

export const Share = ({ category, description, url }: Props) => (
  <Box>
    <Heading as='h3' className='my-4'>
      Share to:
    </Heading>

    <Flex className='gap-3'>
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
