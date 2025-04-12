import { IconButton as RadixIconButton } from '@repo/ui';
import type { MouseEventHandler, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  variant: 'soft' | 'classic' | 'solid' | 'surface' | 'outline' | 'ghost';
  size?: '3' | '1' | '2' | '4';
}

const IconButton = ({ children, onClick, variant, size }: Props) => (
  <RadixIconButton
    className='--cursor-button'
    size={size}
    variant={variant}
    onClick={onClick}
  >
    {children}
  </RadixIconButton>
);

export default IconButton;
