import { IconButton } from '@radix-ui/themes';
import React from 'react';

interface IconBTNProps {
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const IconBTN = ({ children, onClick }: IconBTNProps) => {
  return (
    <IconButton
      variant='soft'
      size='3'
      style={{ cursor: 'pointer' }}
      onClick={onClick}
    >
      {children}
    </IconButton>
  );
};

export default IconBTN;
