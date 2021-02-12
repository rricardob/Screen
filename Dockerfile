FROM nginx:alpine
ENV TZ=America/Lima
COPY . /usr/share/nginx/html
