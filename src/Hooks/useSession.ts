'use client';
import { useSession as User } from 'next-auth/react';

export const useSession = () => {
  const { data: session } = User();

  return { session };
};
