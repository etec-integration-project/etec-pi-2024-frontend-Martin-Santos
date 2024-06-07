FROM node
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
ENV REACT_APP_NAME=myName
ENV CHINESE_FOOD=good
EXPOSE 3000
CMD ["npm", "start"]