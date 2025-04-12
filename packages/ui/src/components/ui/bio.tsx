import { estarlincito } from '@repo/constants';
import ReactMarkdown from 'react-markdown';

import { Link } from './link.jsx';
import { Blockquote, Flex, Strong } from './radix.js';
import { Text } from './text.jsx';

export const Bio = () => (
  <Flex direction='column' gapY='5'>
    <ReactMarkdown
      components={{
        a: ({ href, children }) => (
          <Link href={href} target='_blank'>
            {children}
          </Link>
        ),
        blockquote: ({ children }) => <Blockquote>{children}</Blockquote>,
        p: ({ children }) => <Text>{children}</Text>,
        strong: ({ children }) => <Strong>{children}</Strong>,
      }}
    >
      {estarlincito.about.overview.bio}
    </ReactMarkdown>
  </Flex>
);
