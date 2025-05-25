import type { Metadata } from '@estarlincito/utils';
import { locale, siteName, url } from 'imwriting/settings';

export const HOME_TITLE = siteName;
export const HOME_DESCRIPTION =
  'Here, you will dive into thought-provoking discussions on philosophy, psychology, web development, and technology. ImWriting is a space for exploring how innovation reshapes our thinking, emotions, and interactions with the world.💡✨';
export const HOME_ROUTE = '/';

export const METADATA: Metadata.Website = {
  description: HOME_DESCRIPTION,
  images: [
    {
      alt: '',
      url: '',
    },
  ],
  locale,
  siteName,
  title: HOME_TITLE,
  url: url + HOME_ROUTE,
};

export const SECTIONS = {
  HEADER: {
    summary: HOME_DESCRIPTION,
    title: `Hey there! 👋 Welcome to ${HOME_TITLE}`,
  },
};
