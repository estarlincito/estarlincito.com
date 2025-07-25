import { AspectRatio } from '@repo/ui/components/aspect-ratio';
import { Blockquote } from '@repo/ui/components/blockquote';
import { Box } from '@repo/ui/components/box';
import { Image } from '@repo/ui/components/image';
import { Strong } from '@repo/ui/components/strong';
import { Text } from '@repo/ui/components/text';

interface ArticleQuoteProps {
  quote: string;
  author?: string;
  src: string;
  alt: string;
}
export const ArticleQuote = ({
  src,
  alt,
  quote,
  author,
}: ArticleQuoteProps) => (
  <Box>
    {src !== '' && (
      <AspectRatio ratio={16 / 9}>
        <Image alt={alt} className='rounded-sm' src={src} />
      </AspectRatio>
    )}
    <Blockquote className='mt-1'>
      <Text as='span'>{quote}</Text>
      {author && (
        <>
          <br />
          <Strong>-{author}-</Strong>
        </>
      )}
    </Blockquote>
  </Box>
);
