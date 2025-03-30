import { ObjectUtils } from '@estarlincito/utils';

import { url } from './settings.js';

export const endpoint = ObjectUtils.create({
  signin: `${url}/api/signin`,
  signout: `${url}/api/signout`,
  signup: `${url}/api/signup`,
});
