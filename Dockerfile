# build
FROM node:20-alpine AS build
WORKDIR /app

# ставим зависимости из project/
COPY project/package*.json ./
RUN npm ci

# копируем исходники project/
COPY project/ ./
RUN npm run build

# serve
FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
EXPOSE 80