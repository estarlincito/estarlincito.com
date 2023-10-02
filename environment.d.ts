declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly GPT: string;
    readonly GPT_AUTH: string;
    readonly GPT_AUTH_CLIENT: string;
  }
}
