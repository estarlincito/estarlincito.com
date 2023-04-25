import { getServerSession } from 'next-auth';
import { authOptions } from '../[…nextauth]/route';
import { NextResponse } from 'next/server';

export const GET = async (request: Request) => {
  const session = await getServerSession(authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
};
