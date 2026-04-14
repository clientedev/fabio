FROM node:22-slim

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install --no-frozen-lockfile

RUN BASE_PATH=/ pnpm --filter @workspace/famajo-site run build

ENV PORT=3000
ENV BASE_PATH=/

EXPOSE 3000

CMD ["pnpm", "--filter", "@workspace/famajo-site", "run", "serve"]
