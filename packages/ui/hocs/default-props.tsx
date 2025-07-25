import React from 'react';

export const withDefaultProps = <P,>(
  Component: React.ComponentType<P>,
  defaultProps: Partial<P>,
) =>
  function Wrapper(props: P) {
    return <Component {...defaultProps} {...props} />;
  };
