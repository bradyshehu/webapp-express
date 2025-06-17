// IMPORT

const connection = require("../data/db");
require("dotenv").config();

const APP_PORT = process.env.APP_PORT;
const APP_URL = process.env.APP_URL;

// INDEX

const index = (req, res) => {
  const sql = "SELECT * FROM movies";
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    results.map((result) => {
      result.image = `${APP_URL}:${APP_PORT}/img/${result.image}`;
    });
    res.json(results);
  });
};

// SHOW

const show = (req, res) => {
  const id = req.params.id;
  const moviesSql = "SELECT * FROM movies WHERE id=?";
  const reviewSql =
    "SELECT * FROM reviews INNER JOIN movies ON movies.id = reviews.movie_id WHERE movies.id=?";

  connection.query(moviesSql, [id], (err, moviesResults) => {
    if (err) return res.status(500).json({ error: "Internal Server Error" });
    const movie = moviesResults[0];

    connection.query(reviewSql, [id], (err, reviewResults) => {
      if (err) return res.status(500).json({ error: "Internal Server Error" });
      movie.reviews = reviewResults;
      res.json(movie);
    });
  });
};

module.exports = { index, show };
