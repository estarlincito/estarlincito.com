import { Button } from '@repo/ui/components/button';
import { Link } from '@repo/ui/components/link';

interface ButtonProps {
  label: string;
  subject: string;
  lng: string;
}

export const ServiceButton = async ({ lng, label, subject }: ButtonProps) => (
  <Button asChild variant='default'>
    <Link route={`/${lng}/contact?subject=${subject}`} variant='default'>
      {label}
    </Link>
  </Button>
);
