import type { Locale } from '@repo/content/shared/locales';
export interface Currency {
  value: number | bigint;
}

export const toCurrency = (locale: Locale = 'en', value: number | bigint) => {
  const currencies = {
    en: 'USD',
    es: 'DOP',
  };

  const locales = { en: 'en-US', es: 'es-DO' };

  return new Intl.NumberFormat(locales[locale], {
    currency: currencies[locale],
    style: 'currency',
  }).format(value);
};
