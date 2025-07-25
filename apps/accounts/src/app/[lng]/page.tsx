import type { LocalesParams } from '@repo/content/estarlincito/locales';
import { redirect } from 'next/navigation';

const HomePage = async ({ params }: LocalesParams) => {
  const { lng } = await params;
  redirect(`${lng}/profile`);
};

export default HomePage;
