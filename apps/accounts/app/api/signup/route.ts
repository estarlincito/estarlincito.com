import { allowedHosts } from '@app/accounts/app/api/signin/route';
import { signoutSchema } from '@app/accounts/schema/signout';
import { resmsg } from '@estarlincito/utils';
import type { NextRequest } from 'next/server';

export const POST = async (req: NextRequest): Promise<Response> => {
  const redirect = req.nextUrl.searchParams.get('redirect');

  // validating if redirect
  if (redirect) {
    const url = new URL(redirect ?? '');

    if (!allowedHosts.includes(url.origin)) {
      return resmsg({
        code: 400,
        message: 'Please provide valid host',
        success: false,
      });
    }
  }

  // validating data

  const body = await req.formData();

  const data = {
    email: body.get('email'),
    'first-name': body.get('first-name'),
    'last-name': body.get('last-name'),
    name: body.get('name'),
    password: body.get('password'),
    username: body.get('username'),
  };

  const safeData = signoutSchema.safeParse(data);
  if (!safeData.success) {
    console.log(safeData.error.format());
  }
  return resmsg({
    code: 200,
    message: 'Unavailable at the moment',
    success: true,
  });

  // const hashed_password = await bcrypt.hash(password as string, 10);

  // try {
  //   const user = e.insert(e.User, {
  //     name,
  //     email,
  //     password: hashed_password,
  //   });

  //   await user.run(client);
  // } catch (error) {
  //   return resmsg({success:false, message:JSON.stringify(error), code:404});
  // }

  // await createSession('estarlincito');

  // return resmsg({success:true, message:'User has been successfully created', code:200});
};
