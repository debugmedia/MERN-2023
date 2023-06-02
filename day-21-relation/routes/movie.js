const express = require("express");
const router = express.Router();

const Movies = require("../models/movieModel");

// Get All Movies
router.get("/", async (req, res) => {
  try {
    const usersList = await Movies.find().select("title ratings genre");
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Get All Movies with Genre
router.get("/moviesWithGenre", async (req, res) => {
  try {
    const usersList = await Movies.find()
      .where("genre")
      .ne([])
      .select("title ratings genre")
      .populate("genre");
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Update Movie with Genre
router.put("/updateMovieWithGenre/:movieId", async (req, res) => {
  try {
    const movie = await Movies.findByIdAndUpdate(
      req.params.movieId,
      {
        $push: {
          genre: req.body.genreId,
        },
      },
      { new: true }
    );
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Create new Movie
router.post("/", async (req, res) => {
  try {
    const isExist = await Movies.findOne({ title: req.body.title });
    if (!isExist) {
      const movieList = await Movies.create(req.body);
      return res.status(200).json(movieList);
    }

    return res.status(400).json({
      message: "Movie with this name already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
