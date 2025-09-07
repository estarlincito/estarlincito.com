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
    HoldPass: 'holdpass',
    iBukku: 'ibukku',
    ImAsking: 'imasking',
    ImWriting: 'imwriting',
    Jokelet: 'jokelet',
    Quotely: 'quotely',
    Support: 'support',
  }[siteName];

  if (!buckets) throwAppError(`bucket: ${siteName}, not found in cdn`);

  return buckets;
};
