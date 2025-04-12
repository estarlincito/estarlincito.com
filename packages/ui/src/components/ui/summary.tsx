import type { TextProps } from '@radix-ui/themes';

import { withDefaultProps } from '@/hocs/default-props.jsx';

import { Blockquote as Q, type BlockquoteProps } from './blockquote.jsx';
import { Text as T } from './text.jsx';

interface SummaryProps extends BlockquoteProps {
  blockquote?: boolean;
}

const Text = withDefaultProps(T, { color: 'gray', size: '5' });
const Blockquote = withDefaultProps(Q, { size: '5' });

export const Summary = ({ blockquote, ...props }: SummaryProps & TextProps) =>
  blockquote ? <Blockquote {...props} /> : <Text {...props} />;
