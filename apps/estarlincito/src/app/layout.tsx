import '@/styles/themes-config.css';
import '@/styles/globals.css';

import { estarlincito } from '@repo/constants';
import { AppThemeProvider, Box, LayoutContainer, Theme } from '@repo/ui';
import type { ReactNode } from 'react';

import { Collapse, Footer, Navbar } from '@/components/layout';
import Opacity from '@/components/layout/opacity';
import { Toaster } from '@/components/ui/toaster';
import { CollapseProvider } from '@/context/collapse';

const Layout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={estarlincito.locale}>
    <body>
      <Theme accentColor='indigo'>
        <CollapseProvider>
          <LayoutContainer threePart>
            <Opacity />
            <Box height='80px' />
            <AppThemeProvider defaultTheme={estarlincito.theme}>
              <Navbar />
              <Collapse />
            </AppThemeProvider>
            {children}
            <Footer />
          </LayoutContainer>
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

export default Layout;
