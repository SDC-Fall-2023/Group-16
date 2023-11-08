const pool = require("../database");

// get all ratings from database
const getAllRatings = async () => {
  const [ratings] = await pool.query("SELECT * FROM ratings");
  return ratings;
};

// get a single rating by it's id
const getRatingById = async (id) => {
  const [rating] = await pool.query("SELECT * FROM ratings WHERE id = ?", [id]);
  return rating;
};

// TODO: Create rating
const createRating = async (rating) => {};

// TODO: Delete rating by id. Make sure to update review stats as well for the dining hall
const deleteRatingById = async (id) => {};

module.exports = {
  getAllRatings,
  getRatingById,
};
