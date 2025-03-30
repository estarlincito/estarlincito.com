import { GenerateMetadata } from '@estarlincito/utils';

export const notFoundMeta = ({
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
      'Looks like that page took a little detour and doesn’t exist anymore.',
    images: [
      {
        alt: 'Page not found cover',
        url: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_1280.png',
      },
    ],
    locale,
    siteName,
    title: 'Oops!',
    url: `${url}/not-found`,
  });
};
