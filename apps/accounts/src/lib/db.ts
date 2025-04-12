import { handleError, num } from '@estarlincito/utils';

import { client, e } from './edgedb';

const userDb = async () => {
  try {
    const user = e.select(e.User, ({ name, email, password }) => ({
      email,
      name,
      password,
    }));

    const res = await user.run(client);

    return res[num('0')];
  } catch (err) {
    handleError('Error retrieving users:', err as string);
  }

  return null;
};

export default userDb;
