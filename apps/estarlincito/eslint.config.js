import { nextJsConfig } from '@estarlincito/eslint';
/** @type {import("eslint").Linter.Config} */
export default [...nextJsConfig, { ignores: ['dbschema'] }];
