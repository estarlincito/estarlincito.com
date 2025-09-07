import type { ArticleContent } from '@repo/content/imwriting/articles/article';
import { Box } from '@repo/ui/components/box';
import { Heading } from '@repo/ui/components/heading';
import { Flex } from '@repo/ui/layouts/flex';
import { FaThreads, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';

import { ShareLink } from '@/features/articles/components/article-share/share-link';
import { ShareUrl } from '@/features/articles/components/article-share/share-url';

interface ShareProps
  extends Pick<ArticleContent, 'description' | 'category' | 'share'> {
  url: string;
}

export const ArticleShare = ({
  category,
  description,
  url,
  share,
}: ShareProps) => (
  <Box>
    <Heading as='h3' className='my-4'>
      {share}
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

      <ShareUrl url={url} />
    </Flex>
  </Box>
);
