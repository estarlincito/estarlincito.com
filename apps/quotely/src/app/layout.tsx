import '@/styles/themes-config.css';
import '@/styles/globals.css';

import { quotely } from '@repo/constants';
import { AppThemeProvider, LayoutContainer, Theme } from '@repo/ui';
import type { ReactNode } from 'react';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Toaster } from '@/components/ui/toaster';

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html suppressHydrationWarning lang={quotely.locale}>
    <body>
      <Theme accentColor='yellow' radius='full'>
        <LayoutContainer threePart>
          <Navbar />
          {children}
          <AppThemeProvider defaultTheme={quotely.theme}>
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
