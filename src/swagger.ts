const swaggerAutogen = require("swagger-autogen")();

const doc = {
  info: {
    title: "General order control",
    description: "Documentation API",
    contact: "luccawendel25@gmail.com - (18) 98109-1295",
    version: "1.0.0"
  },
  host: "localhost:5000",
  securityDefinitions: {
    Bearer: {
      type: "apiKey",
      name: "Authorization",
      in: "header"
    }
  },
};

const outputFile = "./swagger-output.json";
const routes = ["./routes.ts"];

swaggerAutogen(outputFile, routes, doc);
