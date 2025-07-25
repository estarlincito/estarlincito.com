import { Blockquote } from '@repo/ui/components/blockquote';
import { Text } from '@repo/ui/components/text';
import type { ComponentProps } from 'react';

interface SummaryProps extends ComponentProps<typeof Blockquote> {
  blockquote?: boolean;
}

export const Summary = ({ blockquote, ...props }: SummaryProps) =>
  blockquote ? <Blockquote {...props} /> : <Text {...props} />;
