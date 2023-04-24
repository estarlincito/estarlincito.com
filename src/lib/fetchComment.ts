import { Comment } from '@/types';
import { redis } from './redis';
import { clearUrl } from './clearUrl';
import { NextResponse } from 'next/server';

export const fetchComment = async (req: Request) => {
  const url = clearUrl(req.headers.get('referer')!);

  if (!redis) {
    return new Response('Failed to connect to redis.', { status: 500 });
  }
  try {
    // get data
    const rawComments = (await redis.lrange(url, 0, -1)) as Comment[];

    //delete user email
    const comments = rawComments.map((comment) => {
      delete comment.user.email;
      return comment;
    });

    return NextResponse.json(comments);
  } catch (_) {
    return new Response('Unexpected error occurred.', { status: 400 });
  }
};
