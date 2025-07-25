/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-console */
'use client';

import { useEffect, useState } from 'react';

interface Grecaptcha {
  ready: (callback: () => void) => void;
  execute: (siteKey: string, options: { action: string }) => Promise<string>;
}

declare global {
  interface Window {
    grecaptcha: Grecaptcha;
  }
}

/**
 * Get recaptcha token
 * @example
 * const token = useRecaptchaToken('action-name');
 */
export const useRecaptcha = (action: string): string | null => {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    if (!window.grecaptcha) return;

    window.grecaptcha.ready(() => {
      window.grecaptcha
        .execute(process.env.NEXT_PUBLIC_RECAPTCHA!, { action })
        .then(setToken)
        .catch(console.error);
    });
  }, [action]);

  return token;
};
