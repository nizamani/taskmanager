FROM node:18

WORKDIR /api

COPY package*.json ./

RUN npm install -g @nestjs/cli \
    && npm install

COPY . .

RUN npm install

CMD ["npm", "run", "start:debug"]

