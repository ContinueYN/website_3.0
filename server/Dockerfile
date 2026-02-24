FROM node:22-alpine AS builder

WORKDIR /app/backend

COPY . .
RUN npm install
RUN npm run build


EXPOSE 3001

CMD ["node", "dist/contact.js"]