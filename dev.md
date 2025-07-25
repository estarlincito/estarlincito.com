```bash
pnpm why <name-of-pkg>
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
