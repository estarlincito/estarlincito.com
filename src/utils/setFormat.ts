import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

const setFormat = (publishedAt: string) => {
  return format(parseISO(publishedAt), 'd LLLL yyyy', { locale: es });
};

export { setFormat };
