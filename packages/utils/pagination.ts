/* eslint-disable @typescript-eslint/no-explicit-any */
export const pagination = <T extends any[]>(data: T) =>
  data.reduce<Record<string, T>>((acc, items, index) => {
    const pageNumber = Math.floor(index / 6) + 1;

    const existingPage = acc[pageNumber] ?? [];
    const updatedPage = [...existingPage, items];

    return {
      ...acc,
      [pageNumber]: updatedPage,
    };
  }, {});
