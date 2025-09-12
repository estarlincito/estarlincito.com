import { execSync } from 'node:child_process';

type Dry = { tasks: { hash: string; package: string }[] };

export const buildHash = (() => {
  const projectName = process.env.npm_package_name ?? '';
  try {
    const output = execSync(
      `pnpm turbo run build --filter=${projectName}  --dry=json`,
      {
        encoding: 'utf-8',
        stdio: 'pipe',
      },
    );

    const dry: Dry = JSON.parse(output);
    const task = dry.tasks.find((t) => t.package === projectName);

    if (!task) {
      process.stderr.write('❌ Build hash is missing! Cannot continue.\n');
      return process.exit(1);
    }

    return task.hash;
  } catch {
    process.stderr.write('❌ Error: Could not retrieve the project hash.');
    return process.exit(1);
  }
})();
