FROM node:lts-alpine3.11

ENV PORT 5000

EXPOSE 5000

COPY package.json package.json
RUN npm install

COPY . .

CMD ["node", "server.js"]