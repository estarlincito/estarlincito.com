```bash
pnpm why <name-of-pkg>
```

```bash
pnpm install --frozen-lockfile
```

```bash
npx turbo run build --filter=estarlincito
```

```bash
pnpm turbo build --filter=estarlincito... --dry-run
```

```bash
npx tsc --showConfig
```

### delete last commit

```bash
git reset --soft HEAD~1
```

### modify commit message

```bash
git commit --amend -m "new-message"
```

## To set a new repo

```bash
rm -rf .git ./packages/content
git init
printf '#!/bin/sh\nnode ./scripts/git-content.js\n' > .git/hooks/pre-push && chmod +x .git/hooks/pre-push
cd packages
git submodule add https://github.com/estarlincito/content.estarlincito.com ./content
cd ..
git add .
git commit -m "estarlincito.com@0.0.1"
git branch -M main
git remote add origin https://github.com/estarlincito/estarlincito.com.git
git push -u origin main
```

<!-- # git reset --soft HEAD~1 -->

## Vercel

```bash
vercel link --repo
vercel pull
vercel build
vercel dev

VERCEL_PROJECT_ID=""
VERCEL_PROJECT_NAME=""
VERCEL_ORG_ID=""

vercel --pwc
vercel dev
vercel build --cwd ./apps/quotely
```
