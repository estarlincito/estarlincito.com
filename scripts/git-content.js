import { exec } from 'child_process';
import path from 'node:path';
import fs from 'node:fs';

const runCmd = (cmd, cwd) => {
  return new Promise((resolve, reject) => {
    exec(cmd, { cwd }, (error, stdout, stderr) => {
      if (error) {
        reject(stderr || error.message);
      } else {
        resolve(stdout);
      }
    });
  });
};

const hasStagedChanges = async (cwd) => {
  try {
    await runCmd('git diff --staged --quiet', cwd);
    return false;
  } catch {
    return true;
  }
};

const pushContent = async () => {
  try {
    const contentDir = 'packages/content';

    let didPushSubmodule = false;

    //package.json
    const pkgPath = path.resolve(
      process.cwd(),
      'packages/content',
      'package.json'
    );
    const { version } = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    const commitM = `@repo/content@${version}`;

    // Submodule
    await runCmd('git add .', contentDir);
    if (await hasStagedChanges(contentDir)) {
      await runCmd(`git commit -m "${commitM}"`, contentDir);
      await runCmd('git push origin main', contentDir);
      console.log('✅ Submodule content pushed.');
      didPushSubmodule = true;
    } else {
      console.log('ℹ️  No changes to commit in submodule.');
    }

    // Monorepo pointer
    await runCmd(`git add ${contentDir}`, '.');
    if (await hasStagedChanges('.')) {
      await runCmd(
        `git commit -m "Update submodule pointer to ${commitM}"`,
        '.'
      );
      console.log('✅ Submodule pointer updated locally (no push).');
    } else {
      console.log('ℹ️  No changes to commit in monorepo.');
    }

    if (didPushSubmodule) {
      console.log('✅ Done! Submodule updated and pushed.');
    } else {
      console.log('🚫 Nothing was pushed.');
    }
  } catch (error) {
    console.error('❌ Error:', error);
  }
};

pushContent();

//chmod +x .git/hooks/pre-push

/**
 *  to go back to the previw commit
 * git reset --mixed HEAD~1
 */
