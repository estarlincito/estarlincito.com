import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';

export const dateFormat = (publishedAt: string) => {
  return format(parseISO(publishedAt), "dd 'de' MMMM 'del' yyyy", {
    locale: es,
  });
};
