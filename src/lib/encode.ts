const encode = (value: string) => {
  return Buffer.from(value, 'utf-8').toString('base64');
};

export default encode;
