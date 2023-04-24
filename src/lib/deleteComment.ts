import { User, Comment } from '@/types';
import { redis } from './redis';
import { getUser } from './getUser';
import { clearUrl } from './clearUrl';

export const deleteComment = async (req: Request) => {
  const url = clearUrl(req.headers.get('referer')!);
  const authorization = req.headers.get('authorization');
  const { comment }: { url: string; comment: Comment } = await req.json();

  if (!comment || !authorization) {
    return new Response('Missing parameter.', { status: 400 });
  }

  if (!redis) {
    return new Response('Failed to connect to redis.', { status: 500 });
  }

  try {
    // verify user token
    const user: User = await getUser(authorization);
    if (!user) return new Response('Invalid token.', { status: 400 });
    comment.user.email = user.email;

    const isAdmin = process.env.NEXT_PUBLIC_AUTH0_ADMIN_EMAIL === user.email;
    const isAuthor = user.sub === comment.user.sub;

    if (!isAdmin && !isAuthor) {
      return new Response('Need authorization.', { status: 400 });
    }

    // delete
    await redis.lrem(url, 0, JSON.stringify(comment));
    return new Response('end', { status: 200 });
  } catch (err) {
    return new Response('', { status: 400 });
  }
};
