declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly SECRET: string;
    readonly MAIL_PASSWORD: string;
    readonly MAIL_ADDRESS: string;
  }
}
//npx tsc --showConfig
