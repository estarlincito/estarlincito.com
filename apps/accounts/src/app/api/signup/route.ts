import { resmsg } from '@estarlincito/utils';
import { NextRequest } from 'next/server';

export const POST = async (req: NextRequest): Promise<Response> => {
  await req.formData();
  return resmsg({
    code: 500,
    message: 'Unavailable at the moment',
    success: false,
  });

  // const body = await req.formData();
  // const name = body.get('name') as string;
  // const email = body.get('email') as string;
  // const password = body.get('password');

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
