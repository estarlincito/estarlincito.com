// import { cookies } from 'next/headers';
// import { NextRequest, NextResponse } from 'next/server';

// import { decrypt } from '@/lib/session';

// // 1. Specify protected and public routes
// const protectedRoutes = ['/budget', '/profile'];
// const publicRoutes = ['/signin', '/signup'];

// const middleware = async (req: NextRequest): Promise<NextResponse<unknown>> => {
//   // 2. Check if the current route is protected or public
//   const { pathname } = req.nextUrl; // Extract hostname and pathname

//   // // Handle Subdomain (blog)
//   // if (hostname.startsWith('blog.')) {
//   //   const newPathname = `/blog${pathname}`;
//   //   return NextResponse.rewrite(new URL(newPathname, req.nextUrl));
//   // }

//   const isProtectedRoute = protectedRoutes.includes(pathname);
//   const isPublicRoute = publicRoutes.includes(pathname);

//   // 3. Decrypt the session from the cookie
//   const cookie = (await cookies()).get('session')?.value;
//   const session = await decrypt(cookie);

//   // 4. Redirect
//   if (isProtectedRoute && !session?.userId) {
//     return NextResponse.redirect(new URL('/signin', req.nextUrl));
//   }

//   if (
//     isPublicRoute &&
//     session?.userId &&
//     !req.nextUrl.pathname.startsWith('/budget')
//   ) {
//     return NextResponse.redirect(new URL('/budget', req.nextUrl));
//   }

//   return NextResponse.next();
// };

// export default middleware;
