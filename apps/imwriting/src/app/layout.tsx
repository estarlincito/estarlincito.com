import '@/styles/themes-config.css';
import '@/styles/globals.css';

import { imwriting } from '@repo/constants';
import { AppThemeProvider, LayoutContainer, Theme } from '@repo/ui';
import type { ReactNode } from 'react';

import Footer from '@/components/layout//footer';
import Navbar from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/toaster';
import { CollapseProvider } from '@/context/collapse';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={imwriting.locale}>
    <body>
      <Theme accentColor='sky' radius='full'>
        <LayoutContainer threePart>
          <CollapseProvider>
            <Navbar />
          </CollapseProvider>
          {children}
          <AppThemeProvider defaultTheme={imwriting.theme}>
            <Footer />
          </AppThemeProvider>
        </LayoutContainer>
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

export default RootLayout;
