import { Code as C } from '@repo/ui/components/code';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Code = ({ children }: Props) => <C>{children}</C>;
