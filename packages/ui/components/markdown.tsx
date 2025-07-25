import { Link } from '@repo/ui/components/link';
import { Text } from '@repo/ui/components/text';
import { cn } from '@repo/ui/lib/utils';
import ReactMarkdown from 'react-markdown';

interface MarkdownProps {
  content: string;
  className?: string;
}

export const Markdown = ({ content, className }: MarkdownProps) => (
  <ReactMarkdown
    components={{
      a: ({ href = '#', children }) => {
        const underline = href.includes('#underline');
        const cleanHref = href.replace('#underline', '');

        return (
          <Link
            className={cn('font-medium', underline && 'underline')}
            route={cleanHref}
            variant='default'
          >
            {children}
          </Link>
        );
      },

      p: ({ children }) => <Text className={cn(className)}>{children}</Text>,
    }}
  >
    {content}
  </ReactMarkdown>
);
