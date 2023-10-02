const decode = (value: string) => {
  return Buffer.from(value, 'base64').toString('utf-8');
};

export default decode;
