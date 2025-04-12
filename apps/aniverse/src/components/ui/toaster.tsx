'use client';
import dynamic from 'next/dynamic';

export const Toaster = dynamic(
  async () => {
    const toast = await import('react-hot-toast');

    return toast.Toaster;
  },
  { ssr: false },
);
