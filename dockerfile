FROM node:16-alpine3.14
WORKDIR /app
COPY [".", "."]
EXPOSE 3000
RUN ["npm", "install"]
CMD ["npm", "start"]
