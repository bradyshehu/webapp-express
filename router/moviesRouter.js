const express = require("express");
const router = express.Router();

const { index, show } = require("../controller/movieController");

// INDEX

router.get("", index);

// SHOW

router.get("/:id", show);

module.exports = router;
