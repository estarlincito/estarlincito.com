import { cookieStore, create } from '@/actions/cookies';
import { Configuration, OpenAIApi } from 'openai';

const isEnv = (env: string) => {
  try {
    if (env.length > 0) {
      return env;
    }
  } catch (error) {
    throw new Error('Env not fount');
  }
};

const configuration = new Configuration({
  apiKey: isEnv(process.env.GPT),
});

const openai = new OpenAIApi(configuration);

export class Messages {
  readonly initailsValue = (prompt: string) => {
    const initailsValue: [{ role: 'user'; content: string }] = [
      { role: 'user', content: prompt },
    ];
    return initailsValue;
  };

  readonly messagesStore = JSON.parse(
    cookieStore('GPT_CHAT_ESTARLINCITO.COM', JSON.stringify([]))
  ) as [];

  readonly updatedMessages = (prompt: string, response: any) => {
    const answer = response['data']['choices'][0]['message']?.content ?? '';

    const updated = [
      ...this.messagesStore,
      {
        role: 'user',
        content: prompt,
      },
      {
        role: 'assistant',
        content: answer,
      },
    ];
    create('GPT_CHAT_ESTARLINCITO.COM', JSON.stringify(updated));

    return updated;
  };
}

export const gpt = async (prompt: string) => {
  const { initailsValue, messagesStore, updatedMessages } = new Messages();
  const _initailsValue = initailsValue(prompt);

  try {
    const response = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages:
        messagesStore.length === 0
          ? _initailsValue
          : [...messagesStore, _initailsValue[0]],
    });

    const messages = updatedMessages(prompt, response);
    return messages;
  } catch (error) {
    throw new Error('Please check the Openai API');
  }
};
