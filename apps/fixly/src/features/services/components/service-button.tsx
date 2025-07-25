import type { Locale } from '@repo/content/utils/locales';
import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';

interface ButtonProps {
  lgn: string;
  title: string;
}

const label = {
  en: 'Order Now',
  es: 'Ordenar ahora',
};

export const ServiceButton = ({ lgn, title }: ButtonProps) => (
  <Button asChild variant='default'>
    <Link route={`/contact?subject=${title}`} variant='default'>
      {label[lgn as Locale]}
    </Link>
  </Button>
);
