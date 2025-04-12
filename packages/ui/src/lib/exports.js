import { readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

//node --watch src/exports.js

export const toExports = (rootDir) => {
  // eslint-disable-next-line no-undef
  const dir = path.resolve(process.cwd(), rootDir);
  const filePaths = readdirSync(dir);

  const exports = filePaths.map((filePath) => {
    if (filePath === 'index.ts' || filePath === 'radix.ts') return;
    if (!filePath.includes('.tsx')) filePath = `${filePath}/index.jsx`;
    return `export * from './${filePath.replace('tsx', 'jsx')}';\n`;
  });

  writeFileSync(dir + '/index.ts', `${exports}`.replaceAll(',', ''));
};

toExports('src/components/ui');
