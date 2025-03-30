import { Box } from '@radix-ui/themes';
import React from 'react';

interface Props {
  text: string;
}
export const HtmlRenderer: React.FC<Props> = ({ text }) => {
  return <Box dangerouslySetInnerHTML={{ __html: text }} />;
};
