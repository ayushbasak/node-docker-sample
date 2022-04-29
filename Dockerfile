FROM node:12
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "./"]
RUN yarn --production
COPY . .
EXPOSE 3000
CMD ["yarn", "start"]

# FROM node:12.18.1
# ENV NODE_ENV=production

# WORKDIR /app

# COPY ["package.json", "./"]

# RUN npm install --production

# COPY . .

# CMD ["npm", "start"]

