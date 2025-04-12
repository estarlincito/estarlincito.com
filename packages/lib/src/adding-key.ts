import { num } from '@estarlincito/utils';

let keyCount = 0;

export const addingKey = <T extends object>(topics: T[]) =>
  topics.map((item) => ({ ...item, key: (keyCount += num('1')) }));
