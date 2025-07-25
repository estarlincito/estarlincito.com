import { loadTranslations } from '@repo/content/estarlincito/locales';
import type { Locale } from '@repo/content/utils/locales';
import { Toaster } from '@repo/ui/components/sonner';
import { AppThemeProvider } from '@repo/ui/contexts/theme';
import { TranslationProvider } from '@repo/ui/contexts/translation';
// import Script from 'next/script';
import type { ReactNode } from 'react';

interface LayoutProps {
  lng: Locale;
  children: ReactNode;
}

export const Layout = async ({ children, lng }: LayoutProps) => {
  const { error } = await loadTranslations(lng);

  return (
    <html suppressHydrationWarning lang={lng}>
      <body>
        {/* <Script
          src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA}`}
          strategy='beforeInteractive'
        /> */}
        <AppThemeProvider defaultTheme='system'>
          <TranslationProvider lng={lng} translations={error}>
            {children}
          </TranslationProvider>
        </AppThemeProvider>
        <Toaster position='top-center' />
      </body>
    </html>
  );
};
