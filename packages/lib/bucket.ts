import { throwAppError } from '@estarlincito/utils';

export const getBucketName = (siteName: string) => {
  const buckets = {
    Accounts: 'estarlincito',
    Aniverse: 'aniverse',
    Budget: 'budget',
    Carly: 'carly',
    'Estarlin R': 'estarlincito',
    Estarlincito: 'estarlincito',
    Fixly: 'fixly',
    ImAsking: 'imasking',
    ImWriting: 'imwriting',
    Jokelet: 'jokelet',
    MyEbook: 'myebook',
    Quotely: 'quotely',
    Support: 'support',
  }[siteName];

  if (!buckets) throwAppError(`bucket: ${siteName}, not found in cdn`);

  return buckets;
};
