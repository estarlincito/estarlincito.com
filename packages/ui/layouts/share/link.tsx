import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';
import type { ReactNode } from 'react';

interface Props {
  description: string;
  url: string;
  tag: string;
  host: string;
  IconType: ReactNode;
}

export const ShareLink = ({ host, description, url, tag, IconType }: Props) => {
  const line_break = '%0A';
  const href = `${host}${description}${line_break}${line_break}Tag: ${tag.toLowerCase()}${line_break}${line_break}${url}`;

  return (
    <Button asChild variant='ghost'>
      <Link route={href} variant='default'>
        {IconType}
      </Link>
    </Button>
  );
};
