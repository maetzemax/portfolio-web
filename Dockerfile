# Dockerfile
FROM nginx:alpine
COPY ./index.html /usr/share/nginx/html/index.html
COPY ./aboutme.html /usr/share/nginx/html/aboutme.html
COPY ./links.html /usr/share/nginx/html/links.html
COPY ./style.css /usr/share/nginx/html/style.css
COPY ./main.js /usr/share/nginx/html/main.js
