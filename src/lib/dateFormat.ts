import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

const dateFormat = (publishedAt: string) => {
  return format(parseISO(publishedAt), 'dd  MMMM, yyyy', {
    locale: es,
  });
};

export default dateFormat;
