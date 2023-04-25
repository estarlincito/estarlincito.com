import { fetchComment, createComment, deleteComment } from '@/lib';

export const GET = async (req: Request) => {
  return fetchComment(req);
};

export const POST = async (req: Request) => {
  return createComment(req);
};

export const DELETE = async (req: Request) => {
  return deleteComment(req);
};
