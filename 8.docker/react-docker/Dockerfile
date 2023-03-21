# base image
FROM nginx:1.21-alpine

# copy build files
COPY build /usr/share/nginx/html

# copy nginx config file
COPY nginx.conf /etc/nginx/conf.d/default.conf

# expose port
EXPOSE 80

# start nginx server
CMD ["nginx", "-g", "daemon off;"]