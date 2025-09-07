// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export const getPathname = async (headers: Function): Promise<string> => {
  const h = headers();
  const pathname = (await h).get('x-pathname') ?? '';

  return pathname;
};
