FROM node:18-alpine

WORKDIR /app

COPY package.json pnpm-lock.yaml ./

RUN npm install -g pnpm

RUN pnpm install --frozen-lockfile

COPY . .

RUN pnpm run build

EXPOSE 3000

CMD ["bash"]

# docker build -t vercel-app .

# docker run --rm -it -p 3000:3000 vercel-app

# lsof -i :3000

# kill -9 $(lsof -t -i :3000)

# cd apps/accounts

# docker ps

# docker ps -a

# docker exec -it f3901fbf6f29 sh

# docker stop <container_id>

# docker rm <container_id>
