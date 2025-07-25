// node --watch node.js

import { glob } from 'glob';
import console from 'node:console';
import { join } from 'node:path';
import { cwd } from 'node:process';

const repoRoot = join(cwd(), '../../../../');

console.log(await glob('packages/ui/*/*.{ts,tsx}', { cwd: repoRoot }));
//@source "../**/*.{ts,tsx}";
// @source "../../../../apps/*/src/**/*.{ts,tsx}";
// ../../../../packages/ui/*/*.{ts,tsx}

//porque node /Users/estarlincito/iDev/estarlincito.com/apps/accounts/src/styles/node.js solo funciona si he open de consola directamente desde el forder style si lo ejecuto desde la rais muestra el array en blanco
