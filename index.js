// IMPORT

const express = require("express");
require("dotenv").config();
// const connection = require("./data/db");
const movieController = require("./controller/movieController");

// CONFIG

const app = express();
const APP_PORT = process.env.APP_PORT;
const APP_URL = process.env.APP_URL;

// MIDDLEWARES

app.use(express.static("public"));
app.use(express.json());

// ERROR HANDLERS

// CRUD

app.get("/movies", movieController.index);

// LISTEN

// app.get("/", (req, res) => {
//   res.send("<h1>Server del mio blog</h1>");
// });

app.listen("3000", () => {
  console.log(`Il server é in ascolto su ${APP_URL}:${APP_PORT}`);
});
