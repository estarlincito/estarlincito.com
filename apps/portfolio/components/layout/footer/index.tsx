import { Copyright } from '@app/portfolio/components/layout/footer/copyright';
import { Separator } from '@repo/ui/components/separator';

export const Footer = () => (
  <footer className='p-5 flex gap-5 flex-col items-center'>
    <Separator />
    <Copyright />
  </footer>
);
