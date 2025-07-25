'use client';
/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, type ReactNode } from 'react';

export interface TranslationContextValue<T> {
  lng: string;
  translations: T;
}

export const TranslationContext =
  createContext<TranslationContextValue<any> | null>(null);

export const TranslationProvider = <T extends object>({
  children,
  translations,
  lng,
}: {
  children: ReactNode;
  lng: string;
  translations: T;
}) => (
  <TranslationContext.Provider value={{ lng, translations }}>
    {children}
  </TranslationContext.Provider>
);
