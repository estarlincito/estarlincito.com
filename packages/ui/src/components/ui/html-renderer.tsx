import DOMPurify from 'dompurify';

import { Box } from './radix.js';

interface Props {
  html: string;
}

export const HtmlRenderer = ({ html }: Props) => {
  const sanitizedHtml = DOMPurify.sanitize(html);

  return <Box dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
};
