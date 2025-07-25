import { exec } from 'child_process';

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

    // Submodule
    await runCmd('git add .', contentDir);
    if (await hasStagedChanges(contentDir)) {
      await runCmd('git commit -m "Update private content"', contentDir);
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
        'git commit -m "Update submodule pointer to latest content commit"',
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
