#!/usr/bin/env node

import { num, throwAppError } from '@estarlincito/utils';
import { execSync } from 'child_process';
import depcheck from 'depcheck';
// ts-prune
const files = [
  'dbschema',
  'eslint.config.js',
  'middleware.ts',
  'app/*',
  // 'app/error.tsx',
  // 'app/layout.tsx',
  // 'app/not-found.tsx',
  'mdxlayer.config.ts',
  '.mdxlayer/*',
  '.next',
  'settings/index.ts',
  'constants/*',
  'Users/estarlincito/iDev/estarlincito.com/*',
  'next.config.ts',
  'next.config.mjs',
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
  // @ts-expect-error
  throwAppError('❌ Error running ts-prune:', error.message);
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
