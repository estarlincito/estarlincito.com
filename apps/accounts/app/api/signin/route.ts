import userDb from '@app/accounts/lib/db';
import { createSession } from '@app/accounts/lib/session';
import { url as accountsUrl } from '@app/accounts/settings';
import { url as budgetUrl } from '@app/budget/settings';
import { url as carlyUrl } from '@app/carly/settings';
import { url as estarlincitoUrl } from '@app/estarlincito/settings';
import { url as imwritingUrl } from '@app/imwriting/settings';
import { url as myebookUrl } from '@app/myebook/settings';
import { url as quotelyUrl } from '@app/quotely/settings';
import { resmsg } from '@estarlincito/utils';
import { compare } from 'bcrypt';
import type { NextRequest } from 'next/server';

export const allowedHosts = [
  budgetUrl as string,
  estarlincitoUrl as string,
  imwritingUrl as string,
  carlyUrl as string,
  accountsUrl as string,
  myebookUrl as string,
  quotelyUrl as string,
];

export const POST = async (req: NextRequest): Promise<Response | undefined> => {
  const body = await req.formData();
  const email = body.get('email');
  const password = body.get('password');

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

  if (!email || !password) {
    return resmsg({
      code: 400,
      message: 'Please provide both email and password',
      success: false,
    });
  }

  const user = await userDb();

  if (!user) {
    return resmsg({ code: 404, message: 'User not found', success: false });
  }

  const emailMatch = email === user.email;
  const passwordMatch = await compare(password as string, user.password);

  if (!emailMatch || !passwordMatch) {
    return resmsg({
      code: 401,
      message: 'Invalid email or password',
      success: false,
    });
  }

  if (emailMatch && passwordMatch) {
    await createSession('estarlincito');
  }
  return resmsg({
    code: 200,
    message: 'Session has been successfully created',
    success: true,
  });
};

// You must use the FormData API to parse the request body(Form-encode for thunder Client)
