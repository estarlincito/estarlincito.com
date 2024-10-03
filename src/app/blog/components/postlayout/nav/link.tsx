import Linkdoc from '@UI/linkdoc';
import React from 'react';

interface LinkProps {
  children: React.ReactNode;
  href: string;
}

const Link = (props: LinkProps) => {
  return (
    <li>
      <Linkdoc href={props.href} target='_self' orden='horizontally'>
        {props.children}
      </Linkdoc>
    </li>
  );
};

export default Link;
