import { pickLng } from '@repo/utils/lng';
import { redirect } from 'next/navigation';

const HomePage = async ({ params }: PageProps<'/[lng]'>) => {
  const lng = await pickLng(params);
  redirect(`${lng}/profile`);
};

export { HomePage as default };
