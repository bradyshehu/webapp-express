// IMPORT

const express = require("express");
require("dotenv").config();
const movieController = require("./controller/movieController");
const { notFound, errorHandler } = require("./middlewares/errors");

// CONFIG

const app = express();
const APP_PORT = process.env.APP_PORT;
const APP_URL = process.env.APP_URL;

// MIDDLEWARES

app.use(express.static("public"));
app.use(express.json());

// CRUD

app.get("/movies", movieController.index);
app.get("/movies/:id", movieController.show);

app.get("/", (req, res) => {
  console.log(nbjsdv);
  res.send("<h1>Server del mio blog</h1>");
});

// ERROR HANDLERS MIDDLEWARES
app.use(errorHandler);
app.use(notFound);

// LISTEN
app.listen("3000", () => {
  console.log(`Il server é in ascolto su ${APP_URL}:${APP_PORT}`);
});
