import '@/styles/themes-config.css';
import '@/styles/globals.css';

import { carly } from '@repo/constants';
import { AppThemeProvider, LayoutContainer, Theme } from '@repo/ui';
import type { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/toaster';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={carly.locale}>
    <body>
      <Theme accentColor='iris' radius='full'>
        <LayoutContainer threePart>
          <Navbar />
          {children}
          <AppThemeProvider defaultTheme={carly.theme}>
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
