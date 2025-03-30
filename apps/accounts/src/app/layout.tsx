import '@/styles/themes-config.css';
import '@radix-ui/themes/styles.css';
import '@/styles/globals.css';

import { Theme } from '@radix-ui/themes';
import { Toaster } from '@repo/ui';

import AppThemeProvider from '@/context/theme';
import Children from '@/types/children';

const Layout = ({ children }: Children) => {
  return (
    <html lang='en' suppressHydrationWarning>
      <body>
        <Theme accentColor='indigo'>
          <AppThemeProvider />
          {children}
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
