import { host as accountsHost } from '@repo/content/accounts/settings';
import type { LocalesParams } from '@repo/content/estarlincito/locales';
import { host } from '@repo/content/fixly/settings';
import { redirect } from 'next/navigation';

interface AdminPageProps extends LocalesParams {
  searchParams: Promise<{ redirect: string }>;
}
const AdminPage = async ({ params, searchParams }: AdminPageProps) => {
  const { lng } = await params;
  const redirectUrl = (await searchParams).redirect ?? '';

  redirect(`${accountsHost}/${lng}/signin?redirect=${host}${redirectUrl}`);
};

export default AdminPage;
