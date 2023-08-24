import { IconButton as IconButtonr } from '@radix-ui/themes';
import React from 'react';

interface IconButtonProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconButton = ({ children, onClick }: IconButtonProps) => {
  return (
    <IconButtonr variant='soft' onClick={onClick} size='2'>
      {children}
    </IconButtonr>
  );
};

export default IconButton;
