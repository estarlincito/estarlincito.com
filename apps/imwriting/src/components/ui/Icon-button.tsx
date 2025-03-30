import { IconButton as RadixIconButton } from '@radix-ui/themes';
import React from 'react';

interface Props {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  variant: 'soft' | 'classic' | 'solid' | 'surface' | 'outline' | 'ghost';
  size?: '3' | '1' | '2' | '4';
}

const IconButton = ({ children, onClick, variant, size }: Props) => {
  return (
    <RadixIconButton
      variant={variant}
      size={size}
      className='--cursor-button'
      onClick={onClick}
    >
      {children}
    </RadixIconButton>
  );
};

export default IconButton;
