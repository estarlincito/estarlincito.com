import { middlewareConfig } from '@repo/lib';
import { cookies } from 'next/headers';
import { type NextRequest, NextResponse } from 'next/server';

const protectedRoutes = ['/dashboard'];
const publicRoutes = ['/', '/contact'];
export const { config } = middlewareConfig;

const middleware = async (req: NextRequest) =>
  middlewareConfig.auth(req, cookies, NextResponse, {
    protectedRoutes,
    publicRoutes,
    redirectURL: '/dashboard',
    signinURL: '/',
  });

export default middleware;
