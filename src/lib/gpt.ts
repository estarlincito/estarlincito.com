import Messages from '@/types/gpt';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { Configuration, OpenAIApi } from 'openai-edge';

const isEnv = (env: string) => {
  try {
    if (env.length > 0) {
      return env;
    }
  } catch (error) {
    throw new Error('Env not fount');
  }
};

// New

const configuration = new Configuration({
  apiKey: isEnv(process.env.GPT),
});

const openai = new OpenAIApi(configuration);

export const gpt = async (messages: Messages[]) => {
  const response = await openai.createChatCompletion({
    model: 'gpt-3.5-turbo',
    stream: true,
    max_tokens: 2096,
    messages: messages,
  });

  const stream = OpenAIStream(response);

  return new StreamingTextResponse(stream);
};
