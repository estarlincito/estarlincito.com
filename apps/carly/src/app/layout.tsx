import '@/styles/themes-config.css';
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';

import { Theme } from '@radix-ui/themes';
import type React from 'react';

import Footer from '@/components/layout/footer';
import Navbar from '@/components/layout/navbar';
import { Toaster } from '@/components/toaster';
import AppThemeProvider from '@/context/theme';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Theme accentColor='iris' radius='full'>
          <Navbar />
          {children}
          <AppThemeProvider>
            <Footer />
          </AppThemeProvider>
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

export default RootLayout;
