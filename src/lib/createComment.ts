// import { NextResponse } from 'next/server';
// import { Comment } from '@/types';
// import { redis } from './redis';
// import { nanoid } from 'nanoid';
// import { getUser } from './getUser';
// import { clearUrl } from './clearUrl';

// export const createComment = async (req: Request) => {
//   const url = clearUrl(req.headers.get('referer')!);
//   const authorization = req.headers.get('authorization');
//   const { text } = await req.json();

//   if (!text || !authorization) {
//     return new Response('Missing parameter.', { status: 400 });
//   }

//   if (!redis) {
//     return new Response('Failed to connect to redis client.', { status: 400 });
//   }

//   try {
//     // verify user token
//     const user = await getUser(authorization);
//     if (!user) return new Response('Need authorization.', { status: 400 });

//     const { name, picture, sub, email } = user;

//     const comment: Comment = {
//       id: nanoid(),
//       created_at: Date.now(),
//       url,
//       text,
//       user: { name, picture, sub, email },
//     };

//     // write data
//     await redis.lpush(url, JSON.stringify(comment));

//     return NextResponse.json(comment);
//   } catch (_) {
//     return new Response('Unexpected error occurred.', { status: 400 });
//   }
// };
