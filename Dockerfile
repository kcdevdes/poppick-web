# Development Stage
FROM node:22-alpine AS development

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]

# Builder Stage
FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run build

# Production Stage
FROM node:22-alpine AS production

WORKDIR /app

# 복사: Next.js standalone과 static 파일 모두 포함
COPY --from=builder /app/.next/standalone ./

COPY --from=builder /app/.next/static ./.next/static

# Public 디렉터리 복사 (정적 파일 포함)
COPY --from=builder /app/public ./public
# 필요한 Node.js 파일 복사
COPY --from=builder /app/package*.json ./

# 환경 변수 설정
ENV NODE_ENV=production

EXPOSE 3000

CMD ["node", "server.js"]
