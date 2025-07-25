import { deepinfra } from '@ai-sdk/deepinfra';
import { type Message, streamText } from 'ai';

export const POST = async (req: Request) => {
  const { messages } = (await req.json()) as { messages: Message[] };

  const prompt = messages
    .map((message) => `${message.role}: ${message.content}`)
    .join('\n');

  const result = streamText({
    model: deepinfra('mistralai/Mistral-7B-Instruct-v0.1'),
    prompt,
  });

  return result.toDataStreamResponse();
};
