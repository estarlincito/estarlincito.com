import { toCurrency } from '@repo/lib/currency';

export const toPrice = (price: number, lang: string) => {
  if (lang === 'es')
    return toCurrency({
      currency: 'DOP',
      locales: 'es-DO',
      value: price * 59,
    });
  return toCurrency({
    currency: 'USD',
    locales: 'en-US',
    value: price,
  });
};
