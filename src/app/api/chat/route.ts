import { gpt } from '@/lib/gpt';
import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function POST(request: Request) {
  const { messages } = await request.json();
  return await gpt(messages);
}

export async function GET() {
  return NextResponse.json({ get: null });
}

export async function PUT() {
  return NextResponse.json({ put: null });
}

export async function DELETE() {
  return NextResponse.json({ delete: null });
}
