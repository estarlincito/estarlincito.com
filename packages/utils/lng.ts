import type { Locale } from '@repo/content/shared/locales';

export const pickLng = async (
  params: Promise<{
    lng: string;
  }>,
): Promise<Locale> => params.then(({ lng }) => (lng === 'es' ? 'es' : 'en'));
