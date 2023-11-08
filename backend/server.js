const express = require("express");
require("dotenv").config();
const pool = require("./database");
const ratingRoutes = require("./routes/ratingRoutes");
const foodLocationRoutes = require("./routes/foodLocationRoutes");

const app = express();

// middleware (aka runs every time a request is made)
app.use(express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method); // output path of request and method of request
  next(); // move on to next middleware
});

// add in routes from routes folder
app.use("/api/ratings", ratingRoutes);
app.use("/api/foodLocation", foodLocationRoutes);

// start server
const startServer = async () => {
  try {
    await pool.query("SELECT 1 FROM ratings");
    app.listen(process.env.PORT, () => {
      console.log(
        `Connected to database and listening on port: ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log("Likely a database connection error");
    console.log(error);
  }
};

startServer();
