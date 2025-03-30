import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

export const POST = async (req: Request) => {
  const { messages } = await req.json();
  const model = openai('gpt-4o-mini');

  const result = streamText({
    maxTokens: 1024,
    messages,
    model,
    temperature: 0.7,
    topP: 1,
  });

  return result.toDataStreamResponse();
};
