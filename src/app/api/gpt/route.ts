import { gpt } from '@/lib/gpt';
import Messages from '@/types/gpt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { prompt } = await request.json();
  const messages = (await gpt(prompt)) as unknown as Messages;
  return NextResponse.json({ messages });
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
