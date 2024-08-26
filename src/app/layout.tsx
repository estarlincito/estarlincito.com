/* eslint-disable @next/next/no-sync-scripts */
import Collapse from '@/components/collapse';
import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import Opacity from '@/components/opacity';
import { CollapseProvider } from '@/context/collapse';
import Toaster from '@/lib/toaster';
import '@/styles/themes-config.css';
import ChildrenProps from '@/types/children';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import dynamic from 'next/dynamic';

const AppThemeProvider = dynamic(() => import('@/context/theme'), {
  ssr: false,
});

const RootLayout = (props: ChildrenProps) => {
  return (
    <html lang='es' suppressHydrationWarning>
      <body>
        <Theme>
          <CollapseProvider>
            <Opacity />
            <AppThemeProvider>
              <Navbar />
              <Collapse />
            </AppThemeProvider>
            {props.children}
            <Footer />
          </CollapseProvider>
        </Theme>

        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{
            style: {
              color: 'white',
              background: 'black',
            },
          }}
        />
      </body>
    </html>
  );
};

export default RootLayout;
