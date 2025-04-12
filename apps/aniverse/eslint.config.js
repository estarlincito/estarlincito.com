/** @type {import("eslint").Linter.Config} */
import { nextJsConfig } from '@estarlincito/eslint';
import { restrictedImports } from '@repo/lib';

export default [...nextJsConfig, { ...restrictedImports }];
