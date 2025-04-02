import { auth } from '@repo/auth';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/', '/contact'];

const middleware = async (req: NextRequest) => {
  return auth(req, cookies, NextResponse, {
    protectedRoutes,
    publicRoutes,
    redirectURL: '/dashboard',
    signinURL: '/',
  });
};

export default middleware;
