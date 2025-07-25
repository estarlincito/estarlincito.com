/* eslint-disable @typescript-eslint/no-explicit-any */
export const getRandomItems = <T extends any[]>(items: T, count = 4) => {
  const shuffled = [...items].sort(() => 0.5 - Math.random());

  return shuffled.slice(0, count) as T;
};
