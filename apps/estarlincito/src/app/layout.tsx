import '@/styles/themes-config.css';
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';

import { Theme } from '@radix-ui/themes';
import { Toaster } from '@repo/ui';

import { Collapse, Footer, Navbar } from '@/components/layout';
import Opacity from '@/components/layout/opacity';
import { CollapseProvider } from '@/context/collapse';
import AppThemeProvider from '@/context/theme';
import type Children from '@/types/children';

const Layout = ({ children }: Children) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Theme accentColor='indigo'>
          <CollapseProvider>
            <Opacity />
            <AppThemeProvider>
              <Navbar />
              <Collapse />
            </AppThemeProvider>
            {children}
            <Footer />
          </CollapseProvider>
        </Theme>

        <Toaster
          position='top-center'
          reverseOrder={false}
          toastOptions={{
            style: {
              background: 'black',
              color: 'white',
            },
          }}
        />
      </body>
    </html>
  );
};

export default Layout;
