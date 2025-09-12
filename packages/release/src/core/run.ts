/* eslint-disable @typescript-eslint/ban-ts-comment */

process.chdir('../..'); // back to the root

import { Vercel } from '@vercel/sdk';
import { lenv } from 'lenv';

import { getContent } from './content.js';
import { buildHash } from './hast.js';
import { getProjects, projectName } from './project.js';
lenv();

export const run = async () => {
  const vercel = new Vercel({
    bearerToken: process.env.VERCEL_ACCESS_TOKEN,
  });

  const { meta } = await vercel.deployments.getDeployment({
    idOrUrl: projectName,
  });

  if (buildHash !== meta.buildHash) {
    process.stdout.write(`🚀 Build hash changed! Starting deploy...\n`);
    const project = getProjects();
    try {
      const result = await vercel.deployments.createDeployment({
        requestBody: {
          files: await getContent(),
          meta: {
            buildHash,
          },
          name: project.name,
          project: project.name,
          projectSettings: {
            buildCommand: `pnpm turbo run build --filter=${projectName}`,
            framework: 'nextjs',
            installCommand: 'pnpm install --frozen-lockfile',
            nodeVersion: '22.x',
            outputDirectory: `apps/${project.name.split('.')[0]}/.next`,
          },
          target: 'production',
        },
      });

      if (result.status === 'QUEUED') {
        process.stderr.write(
          `🟢 Deployment is queued (ID: ${result.id}). Waiting for Vercel to process...\n`,
        );
      }

      return process.exit(0);
    } catch (error) {
      // @ts-expect-error
      process.stderr.write(`\x1b[31m${error.message}\x1b[0m\n`);
      return process.exit(1);
    }
  }

  process.stdout.write(`✨ The build hash hasn’t changed. Skipping deploy!\n`);
  return process.exit(0);
};
