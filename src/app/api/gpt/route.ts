import gpt from '@/lib/gpt';
import Chat from '@/types/gpt';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const { question } = await request.json();
  const { answer } = await gpt(question);
  return NextResponse.json({ question, answer } as Chat);
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
