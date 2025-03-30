import { GenerateMetadata } from '@estarlincito/utils';

export const errorMeta = ({
  locale,
  siteName,
  url,
}: {
  locale: string;
  siteName: string;
  url: string;
}) => {
  return GenerateMetadata.website({
    description: '...We apologize for the inconvenience.',
    images: [
      {
        alt: 'Page not found cover',
        url: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png',
      },
    ],
    locale,
    siteName,
    title: 'Oops!',
    url: `${url}`,
  });
};
