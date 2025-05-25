const hireme = [
  { label: 'contact', route: '/contact' },
  {
    label: 'github',
    route:
      'https://github.com/estarlincito/estarlincito.com/blob/main/apps/carly/README.md',
  },
  { label: 'ko-fi', route: 'https://ko-fi.com/estarlincito' },
  { label: 'x', route: 'https://x.com/estarlincito' },
] as const;

const endpoint = { chat: '/api/chat' } as const;

export const LINKS = { endpoint, hireme };
