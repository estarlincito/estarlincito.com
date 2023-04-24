import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict';

export const distanceToNow = (dateTime: number | Date) => {
  return formatDistanceToNowStrict(dateTime, {
    addSuffix: true,
  });
};
