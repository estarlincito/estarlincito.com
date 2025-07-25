import type { DefaultProcessEnv } from '@repo/types/environment.d.ts';

declare namespace NodeJS {
  export interface ProcessEnv extends DefaultProcessEnv {
    readonly SECRET: string;
    readonly MAIL_PASSWORD: string;
    readonly MAIL_ADDRESS: string;
  }
}
