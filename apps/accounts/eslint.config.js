import { nextJsConfig } from '@estarlincito/eslint';
import { restrictedImports } from '@repo/lib';
/** @type {import("eslint").Linter.Config} */
export default [
  ...nextJsConfig,
  { ignores: ['dbschema'] },
  { ...restrictedImports },
];
