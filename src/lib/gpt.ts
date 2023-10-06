import Messages from '@/types/gpt';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import OpenAI from 'openai';

const isEnv = (env: string) => {
  try {
    if (env.length > 0) {
      return env;
    }
  } catch (error) {
    throw new Error('Env not fount');
  }
};

const openai = new OpenAI({
  apiKey: isEnv(process.env.GPT),
});

export const gpt = async (messages: Messages[]) => {
  const response = await openai.chat.completions.create({
    model: 'gpt-3.5-turbo',
    stream: true,
    max_tokens: 2096,
    messages: messages,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
};
