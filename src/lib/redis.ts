import { Redis } from '@upstash/redis';

const fixUrl = (url: string) => {
  if (!url) {
    return '';
  }
  return url;
};

export const redis = new Redis({
  url: fixUrl(process.env.REDIS_URL!),
  token: fixUrl(process.env.REDIS_TOKEN!),
});
