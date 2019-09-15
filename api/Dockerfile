FROM node:10-alpine
WORKDIR /app
RUN mkdir /app/src
COPY ./src /app/src
COPY package.json .
COPY tsconfig.build.json .
COPY tsconfig.json .
RUN npm install && npm run build
EXPOSE 3000
CMD ["npm", "run", "start:prod"]