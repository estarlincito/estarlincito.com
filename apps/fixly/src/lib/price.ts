import { toCurrency } from '@repo/lib/currency';

export const toPrice = (price: number, lang: string) => {
  if (lang === 'es') return toCurrency(lang, price * 59);
  return toCurrency(lang as 'en', price);
};
