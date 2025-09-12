import { throwAppError } from '@estarlincito/utils';

import { client, e } from '@/lib/edgedb';

const userDb = async () => {
  try {
    const user = e.select(e.User, ({ name, email, password }) => ({
      email,
      name,
      password,
    }));

    const res = await user.run(client);

    return res[0];
  } catch (err) {
    throwAppError('Error retrieving users:', err as string);
  }

  return null;
};

export default userDb;
