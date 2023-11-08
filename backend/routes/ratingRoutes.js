const express = require("express");
const router = express.Router();

const {
  getAllRatings,
  getRatingById,
} = require("../controllers/ratingController");

// get all ratings
router.get("/", async (req, res) => {
  const ratings = await getAllRatings();
  res.status(200).json(ratings);
});

// get rating by id
router.get("/:id", async (req, res) => {
  const rating = await getRatingById(req.params.id);
  res.status(200).json(rating);
});

// TODO: create rating

// TODO: delete rating by id

module.exports = router;
