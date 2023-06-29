import clsx from 'clsx';
import React from 'react';

interface BoxlProps {
  children: React.ReactNode;
}

const Boxl = (props: BoxlProps) => {
  return (
    <div
      className={clsx(
        'border border-gray-400 rounded-lg',
        'dark:border-gray-500',
        'p-8'
      )}
    >
      {props.children}
    </div>
  );
};

export default Boxl;
