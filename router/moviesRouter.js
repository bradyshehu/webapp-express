// IMPORT

const express = require("express");
const router = express.Router();
const { index, show, storeReview } = require("../controller/movieController");

// INDEX

router.get("", index);

// SHOW

router.get("/:id", show);

// STORE REVIEW

router.post("/:id", storeReview);

module.exports = router;
