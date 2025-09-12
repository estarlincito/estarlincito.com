import '@repo/ui/themes/green.css';

import { generateStaticParams } from '@repo/content/shared/locales';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';
export { default } from '@repo/ui/pages/maintenance';

export { generateStaticParams };

import { pickLng } from '@repo/utils/lng';

export const RootLayout = async ({
  children,
  params,
}: LayoutProps<'/[lng]'>) => {
  const lng = await pickLng(params);

  return (
    <Layout lng={lng}>
      <View variant='child-1'>
        <Main>{children}</Main>
      </View>
    </Layout>
  );
};

// export default RootLayout;
