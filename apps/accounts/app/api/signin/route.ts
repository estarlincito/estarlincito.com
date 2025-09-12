import { compare } from 'bcrypt';
import type { NextRequest } from 'next/server';
import { Resuponsu } from 'resuponsu';

import userDb from '@/lib/db';
import { createSession } from '@/lib/session';

export const POST = async (req: NextRequest): Promise<Response | undefined> => {
  const body = await req.formData();
  const email = body.get('email');
  const password = body.get('password');

  if (!email || !password) {
    return Resuponsu.json({
      code: 400,
      message: 'Please provide both email and password',
      success: false,
    });
  }

  const user = await userDb();

  if (!user) {
    return Resuponsu.json({
      code: 404,
      message: 'User not found',
      success: false,
    });
  }

  const emailMatch = email === user.email;
  const passwordMatch = await compare(password as string, user.password);

  if (!emailMatch || !passwordMatch) {
    return Resuponsu.json({
      code: 401,
      message: 'Invalid email or password',
      success: false,
    });
  }

  if (emailMatch && passwordMatch) {
    await createSession('estarlincito');
  }
  return Resuponsu.json({
    code: 200,
    message: 'Session has been successfully created',
    success: true,
  });
};
