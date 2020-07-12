# BUILD
FROM node:12.16-slim as builder
WORKDIR /rokket-app
ENV PATH /rokket-app/node_modules/.bin:$PATH
ADD package.json yarn.lock /rokket-app/

RUN yarn install --silent
COPY . /rokket-app
RUN yarn build

# SETUP
FROM nginx:1.16.0-alpine
RUN rm -rf /usr/share/nginx/html/*
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/conf.d/nginx-custom.conf
COPY --from=builder /rokket-app/build /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
