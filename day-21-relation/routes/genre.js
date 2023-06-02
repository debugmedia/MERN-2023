const express = require("express");
const router = express.Router();

const Genres = require("../models/genreModel");

router.get("/", async (req, res) => {
  try {
    const usersList = await Genres.find();
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const isExist = await Genres.findOne({ title: req.body.title });
    if (!isExist) {
      const movieList = await Genres.create(req.body);
      return res.status(200).json(movieList);
    }

    return res.status(400).json({
      message: "Genre with this title already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
