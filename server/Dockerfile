FROM node:22-alpine AS builder

WORKDIR /app/backend

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

FROM node:22-alpine

WORKDIR /app/backend

COPY --from=builder /app/backend/package*.json ./
RUN npm install --production

COPY --from=builder /app/backend/dist ./dist
COPY --from=builder /app/backend/data ./data

EXPOSE 3001

CMD ["node", "dist/index.js"]