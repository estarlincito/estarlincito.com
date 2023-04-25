declare namespace NodeJS {
  export interface ProcessEnv {
    readonly NODE_ENV: 'development' | 'production' | 'test';
    readonly REDIS_URL: string;
    readonly REDIS_TOKEN: string;
    readonly NEXT_PUBLIC_AUTH0_DOMAIN: string;
    readonly NEXT_PUBLIC_AUTH0_CLIENT_ID: string;
    readonly NEXT_PUBLIC_AUTH0_ADMIN_EMAIL: string;
  }
}
