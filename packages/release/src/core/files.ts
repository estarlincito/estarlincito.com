/* eslint-disable @typescript-eslint/ban-ts-comment */

import fs from 'node:fs';

import { globby } from 'globby';

import { projectName } from './project.js';

const glob = (patterns: string[]) =>
  globby(patterns, {
    followSymbolicLinks: false,
    gitignore: true,
    onlyFiles: true,
  });

export const getFiles = async () => {
  try {
    const appDir = `apps/${projectName.split('.')[0]}`;

    if (!fs.existsSync(appDir)) {
      process.stderr.write(
        `❌ ${appDir} does not exist inside of apps folder\n`,
      );
      return process.exit(1);
    }

    const files = [
      ...(await glob(['packages/content/**/*'])),
      ...(await glob([
        '**/*',
        '!packages/content/**',
        '!apps/**',
        `${appDir}/**`,
      ])),
    ];

    return files;
  } catch (error) {
    // @ts-expect-error
    process.stderr.write(`❌ Error executing git ls-files: ${error.message}\n`);
    return process.exit(1);
  }
};
