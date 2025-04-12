import { Code as CodeRadix } from '@repo/ui';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

const Code = ({ children }: Props) => <CodeRadix>{children}</CodeRadix>;

export default Code;
