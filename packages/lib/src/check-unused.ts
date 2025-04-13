#!/usr/bin/env node

import { handleError, num } from '@estarlincito/utils';
import { execSync } from 'child_process';
import depcheck from 'depcheck';

// ts-prune
const files = [
  'dbschema',
  'eslint.config.js',
  'src/middleware.ts',
  'src/app/error.tsx',
  'src/app/layout.tsx',
  'src/app/not-found.tsx',
  '.next',
];

try {
  execSync(
    `pnpm ts-prune --ignore '${files.toString().replaceAll(',', '|')}'`,
    {
      //
      encoding: 'utf-8',
      stdio: 'inherit',
    },
  );
} catch (error) {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  handleError('❌ Error running ts-prune:', error.message);
}

// depcheck

const options = {
  ignoreBinPackage: false,
  skipMissing: true,
};

void depcheck(process.cwd(), options, ({ dependencies, devDependencies }) => {
  if (dependencies.length > num('0'))
    process.stdout.write(
      `\nUnused dependencies: ${JSON.stringify(dependencies)}`,
    );

  if (devDependencies.length > num('0'))
    process.stdout.write(
      `\n\nUnused devDependencies: ${JSON.stringify(devDependencies)}\n`,
    );
});

// pnpm exec check-unused
//  node --watch src/check-unused.ts
