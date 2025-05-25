import { Strong as S } from '@repo/ui/components/strong';
import type { DetailedHTMLProps, HTMLAttributes } from 'react';

type Props = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;

export const Strong = ({ children }: Props) => <S>{children}</S>;
