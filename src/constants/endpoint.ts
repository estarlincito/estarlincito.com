import isDev from '@/lib/isDev';

export default class endpoint {
  static readonly gpt =
    isDev === true
      ? 'http://localhost:3000/api/gpt'
      : 'https://estarlincito.com/api/gpt';
}
