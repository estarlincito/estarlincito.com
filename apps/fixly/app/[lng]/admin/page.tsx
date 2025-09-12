import { host as accountsHost } from '@repo/content/accounts/settings';
import { host } from '@repo/content/fixly/settings';
import { pickLng } from '@repo/utils/lng';
import { redirect } from 'next/navigation';

const AdminPage = async ({
  params,
  searchParams,
}: PageProps<'/[lng]/admin'>) => {
  const lng = await pickLng(params);
  const redirectUrl = (await searchParams).redirect ?? '';

  redirect(
    `${accountsHost}/${lng}/signin?redirect=${host}${String(redirectUrl)}`,
  );
};

export { AdminPage as default };
