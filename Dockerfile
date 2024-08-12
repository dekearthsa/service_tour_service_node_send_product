FROM node:17.8-alpine

# RUN apk add --no-cache tini && mkdir -p /usr/src/app
# RUN mkdir -p /usr/src/app
WORKDIR /usr/src

COPY package.json .
COPY package-lock.json .

RUN npm install && npm cache clean --force

COPY . .

EXPOSE 7073

CMD ["node", "./dist/index.js"]