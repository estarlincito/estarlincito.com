type Locales = 'en-US' | 'es-DO';
type Currencies = 'USD' | 'DOP';

export interface Currency {
  value: number | bigint;
  locales: Locales;
  currency: Currencies;
}

export const toCurrency = ({
  currency = 'USD',
  locales = 'en-US',
  value,
}: Currency) => {
  const { format } = new Intl.NumberFormat(locales, {
    currency,
    style: 'currency',
  });

  return format(value);
};
