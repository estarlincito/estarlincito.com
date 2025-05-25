import { isDev } from '@estarlincito/utils';

const appPorts = {
  accounts: 3005,
  aniverse: 3007,
  budget: 3004,
  carly: 3003,
  estarlincito: 3000,
  imwriting: 3002,
  myebook: 3006,
  portfolio: 3008,
  quotely: 3001,
} as const;

type AppPorts = typeof appPorts;
type AppNames = keyof typeof appPorts;

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
