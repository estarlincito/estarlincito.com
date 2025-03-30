import { IconButton, Link as LinkRadix } from '@radix-ui/themes';
import React from 'react';
interface Props {
  description: string;
  url: string;
  tag: string;
  host: string;
  IconType: React.ReactNode;
}

const ShareLink = ({ host, description, url, tag, IconType }: Props) => {
  const line_break = '%0A';
  const href = `${host}${description}${line_break}${line_break}Tag: ${tag.toLowerCase()}${line_break}${line_break}${url}`;

  return (
    <LinkRadix href={href} target='_blank'>
      <IconButton variant='soft'>{IconType}</IconButton>
    </LinkRadix>
  );
};

export default ShareLink;
