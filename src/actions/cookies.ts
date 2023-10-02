'use server';
import decode from '@/lib/decode';
import encode from '@/lib/encode';
import { cookies } from 'next/headers';

export const create = async (name: string, value: string) => {
  cookies().set(name, encode(value));
};

export const cookieStore = (name: string, value: string) => {
  const data = cookies().get(name);
  if (data === undefined) {
    create(name, encode(value));
    return value;
  }
  return decode(data.value);
};
