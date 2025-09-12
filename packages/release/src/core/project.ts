import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

type Repo = { orgId: string; projects: { id: string; name: string }[] };
export const projectName = process.env.npm_package_name ?? '';

export const getProjects = () => {
  const filePath = path.resolve(process.cwd(), '.vercel/repo.json');
  if (!fs.existsSync(filePath)) execSync('vercel link --repo --yes');
  const repo: Repo = JSON.parse(fs.readFileSync(filePath, 'utf8'));
  const project = repo.projects.find((p) => p.name === projectName);

  if (!project) {
    process.stderr.write(`❌ ${projectName} no found.\n`);
    process.exit(1);
  }

  return project;
};
