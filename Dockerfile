# 1. Сборка фронтенда
FROM node:20-alpine AS build
WORKDIR /app

# сначала зависимости
COPY package.json package-lock.json ./
RUN npm ci

# потом весь код
COPY . .
RUN npm run build   # для Vite это соберёт в папку dist

# 2. Отдача статики через Nginx
FROM nginx:alpine

# по желанию очистить дефолтную страницу
RUN rm -rf /usr/share/nginx/html/*

# копируем собранный фронтенд
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
