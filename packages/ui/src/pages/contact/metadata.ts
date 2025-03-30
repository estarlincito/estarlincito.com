import { GenerateMetadata } from '@estarlincito/utils';

export const contactMeta = ({
  locale,
  siteName,
  url,
}: {
  locale: string;
  siteName: string;
  url: string;
}) => {
  return GenerateMetadata.website({
    description:
      'Seeks collaboration on building something impactful and sustainable!',
    images: [
      {
        alt: '',
        url: '',
      },
    ],
    locale,
    siteName,
    title: 'Contact',
    url: `${url}/contact`,
  });
};
