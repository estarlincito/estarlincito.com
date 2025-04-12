import type Target from './target';

interface Links {
  key: number;
  route: string;
  label: string;
  target?: Target;
}

export default Links;
