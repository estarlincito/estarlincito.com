import { Strong as StrongRadix } from '@repo/ui';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Strong = ({ children }: Props) => <StrongRadix>{children}</StrongRadix>;

export default Strong;
