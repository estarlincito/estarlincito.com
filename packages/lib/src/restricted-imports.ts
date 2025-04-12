const path = (config: { name: string; message: string }) => ({
  ...config,
  message: `Please import components from ${config.message} instead to keep things consistent.`,
});

export const restrictedImports = {
  rules: {
    'no-restricted-imports': [
      'error',
      {
        paths: [
          path({
            message: '@repo/ui',
            name: 'next/link',
          }),

          path({
            message: '@repo/ui',
            name: '@radix-ui/themes',
          }),
        ],
      },
    ],
  },
};
