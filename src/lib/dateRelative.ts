import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';
import { es } from 'date-fns/locale';

export const distanceToNow = (dateTime: number | Date) => {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
    locale: es,
  });
};
