
FROM node:18-alpine  


RUN npm install -g pnpm vercel@latest  


WORKDIR /app  


COPY . .  


RUN pnpm install --no-frozen-lockfile  


RUN vercel build --prod --yes


CMD ["bash"]


# docker build -t vercel-sim .

