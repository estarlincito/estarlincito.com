'use client';
import { throwAppError } from '@estarlincito/utils';
import { createTranslator } from '@repo/content/utils/translator';
import {
  TranslationContext,
  type TranslationContextValue,
} from '@repo/ui/contexts/translation';
import { useContext } from 'react';

export const useTranslation = <T>() => {
  const context = useContext(TranslationContext);
  if (!context) throwAppError('useTranslation used outside provider');

  const t = createTranslator(context.translations as T);

  return {
    ...context,
    t,
  } as TranslationContextValue<T> & { t: typeof t };
};
