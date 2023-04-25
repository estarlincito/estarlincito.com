/* eslint-disable @next/next/no-sync-scripts */
import { Footer, Navbar, Opacity } from '@UI/organisms';
import { CollapseProvider, ThemeProvider, Auth0 } from '@/context';
import { NextAuthProvider } from '@/context';
import { Collapse } from '@/components/UI/molecules';
import { ChildrenProps } from '@/types';
import { Metadata } from 'next';
import '@/styles/globals.css';
import { isDev } from '@/lib';
import clsx from 'clsx';

export const metadata: Metadata = {
  icons: '/favicons/favicon.ico',
};

const RootLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <html lang='es'>
      {isDev && (
        <head>
          {/* React Dev Tool */}
          {/* <script type='text/javascript' src='http://localhost:8097' /> */}
        </head>
      )}

      <body
        className={clsx(
          'font-sans bg-white text-neutral-900',
          'dark:bg-black dark:text-neutral-200'
        )}
      >
        <Auth0>
          <CollapseProvider>
            <Opacity />
            {/* <Header /> */}
            <ThemeProvider>
              <Navbar />
              <Collapse />
            </ThemeProvider>
            {children}
            <Footer />
          </CollapseProvider>
        </Auth0>
      </body>
    </html>
  );
};

export default RootLayout;
