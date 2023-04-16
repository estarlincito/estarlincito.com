/* eslint-disable @next/next/no-sync-scripts */
import { Footer, Header, Navbar, Opacity } from '@UI/organisms';
import '@/styles/globals.css';
import { CollapseProvider, ThemeProvider } from '@/context';
import { Children } from '@/types';
import clsx from 'clsx';
import { Collapse } from '@/components/UI/molecules';

const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <html lang="es">
      {process.env.NODE_ENV === 'development' ? (
        <head>
          {/* React Dev Tool */}
          <script type="text/javascript" src="http://localhost:8097" />
        </head>
      ) : null}

      <body
        className={clsx(
          'font-sans bg-white text-neutral-900',
          'dark:bg-black dark:text-neutral-200'
        )}
      >
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
      </body>
    </html>
  );
};

export default RootLayout;
