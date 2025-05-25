import { SECTIONS } from '@app/portfolio/constants/home';
import { Blockquote } from '@repo/ui/components/blockquote';
import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { Flex } from '@repo/ui/layouts/flex';
import ReactMarkdown from 'react-markdown';

export const Bio = () => (
  <Flex className='flex-col gap-y-5'>
    <ReactMarkdown
      components={{
        a: ({ href, children }) => (
          <Link route={href} variant='default'>
            {children}
          </Link>
        ),
        blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
        p: ({ children }) => <Text>{children}</Text>,
      }}
    >
      {SECTIONS.BIO}
    </ReactMarkdown>
  </Flex>
);
