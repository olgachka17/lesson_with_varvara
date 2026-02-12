# 1. Сборка фронтенда
FROM node:20-alpine AS build
WORKDIR /app

# сначала зависимости
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# потом весь код
COPY . .
RUN npm run build   # для Vite это соберёт в папку dist

# 2. Отдача статики через Nginx
FROM nginx:alpine

# по желанию очистить дефолтную страницу
RUN rm -rf /usr/share/nginx/html/*

# копируем конфигурацию nginx для SPA
COPY nginx.conf /etc/nginx/conf.d/default.conf

# копируем собранный фронтенд
COPY --from=build /app/dist /usr/share/nginx/html

# копируем public папку с фото и дипломами
COPY --from=build /app/public /usr/share/nginx/html/public

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
