FROM nginx:alpine

# Создаем простую HTML страницу
RUN echo '<html><head><title>Lesson with Varvara</title></head><body><h1>Hello from Lesson with Varvara!</h1><p>This is a simple test page.</p></body></html>' > /usr/share/nginx/html/index.html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
