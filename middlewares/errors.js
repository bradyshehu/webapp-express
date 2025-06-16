// NOT FOUND

function notFound(req, res, next) {
  res.status(404).json({
    message: "Not Found",
  });
}

// ERROR HANDLER

function errorHandler(err, req, res, next) {
  res.status(500).json({
    message: "Internal Server Error",
    error: err,
  });
}

module.exports = { notFound, errorHandler };
