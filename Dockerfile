FROM node:22-slim

RUN npm install -g pnpm

WORKDIR /app

COPY . .

RUN pnpm install --no-frozen-lockfile

RUN BASE_PATH=/ pnpm --filter @workspace/famajo-site run build

RUN pnpm --filter @workspace/api-server run build

ENV PORT=3000
ENV BASE_PATH=/
ENV STATIC_PATH=/app/artifacts/famajo-site/dist/public

EXPOSE 3000

CMD ["node", "--enable-source-maps", "/app/artifacts/api-server/dist/index.mjs"]
