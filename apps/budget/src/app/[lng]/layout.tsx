import '@/styles/globals.css';

import { generateStaticParams } from '@repo/content/utils/locales';
import { Layout } from '@repo/ui/layouts/layout';
import { Main } from '@repo/ui/layouts/main';
import { View } from '@repo/ui/layouts/view';

export { generateStaticParams };

import type { LayoutProps } from '@repo/types/layout';

const RootLayout = async ({ children, params }: LayoutProps) => {
  const { lng } = await params;

  return (
    <Layout lng={lng}>
      <View variant='child-1'>
        <Main>{children}</Main>
      </View>
    </Layout>
  );
};

export default RootLayout;
