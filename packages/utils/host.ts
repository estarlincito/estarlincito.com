/* eslint-disable sort-keys-fix/sort-keys-fix */
import { isDev } from '@estarlincito/utils';
import type { AppNames } from '@repo/types/app';

const appPorts = {
  estarlincito: 3000,
  quotely: 3001,
  imwriting: 3002,
  carly: 3003,
  budget: 3004,
  accounts: 3005,
  ibukku: 3006,
  aniverse: 3007,
  portfolio: 3008,
  fixly: 3009,
  imasking: 3010,
  support: 3011,
  holdpass: 3012,
} as const;

type AppPorts = typeof appPorts;

type PortForApp<T extends AppNames> = AppPorts[T];
type ProdUrl<T extends AppNames> = T extends 'estarlincito'
  ? 'https://estarlincito.com'
  : `https://${T}.estarlincito.com`;
type DevUrl<T extends AppNames> = `http://localhost:${PortForApp<T>}`;

export const getHost = <T extends AppNames>(app: T): DevUrl<T> | ProdUrl<T> => {
  if (isDev) {
    const port = appPorts[app];

    return `http://localhost:${port}`;
  }

  return (
    app === 'estarlincito'
      ? 'https://estarlincito.com'
      : `https://${app}.estarlincito.com`
  ) as ProdUrl<T>;
};
