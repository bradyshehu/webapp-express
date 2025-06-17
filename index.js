// IMPORT

const express = require("express");
const { notFound, errorHandler } = require("./middlewares/errors");
const movieRouter = require("./router/moviesRouter");
const cors = require("cors");

// CONFIG

require("dotenv").config();
const app = express();
const APP_PORT = process.env.APP_PORT;
const APP_URL = process.env.APP_URL;

// MIDDLEWARES

app.use(express.static("public"));
app.use(express.json());
app.use(
  cors({
    origin: "/http://localhost:5173/",
  })
);

// ROUTER

app.use("/movies", movieRouter);

app.get("/", (req, res) => {
  res.send("<h1>Welcome!</h1>");
});

// ERROR HANDLERS MIDDLEWARES

app.use(errorHandler);
app.use(notFound);

// LISTEN

app.listen("3000", () => {
  console.log(`Il server é in ascolto su ${APP_URL}:${APP_PORT}`);
});
