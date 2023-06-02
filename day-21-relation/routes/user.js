const express = require("express");
const router = express.Router();

const Users = require("../models/userModel");

router.get("/", async (req, res) => {
  try {
    const usersList = await Users.find().select("name age gender movie");
    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

// Fetch Watch later Movies
router.get("/watchLater/:userId", async (req, res) => {
  try {
    // Populate
    const usersList = await Users.findById(req.params.userId)
      .select("name age movie")
      .populate("movie");

    // $match => expr=>gt
    // $group
    // $sum
    // $project => .select()
    // $lookup => .populate()

    // Aggregate
    // const usersList = await Users.aggregate([
    //   {
    //     $project: {
    //       name: 1,
    //       age: 1,
    //       gender: 1,
    //       movie: 1,
    //     },
    //   },
    //   {
    //     $lookup: {
    //       from: "movies",
    //       localField: "movie",
    //       foreignField: "_id",
    //       as: "movieDetails",
    //     },
    //   },
    // ]);

    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});
// Fetch Watch later Movies
router.get("/watchLaterDetails/:userId", async (req, res) => {
  try {
    const usersList = await Users.findById(req.params.userId)
      .select("name age movie")
      .populate({
        path: "movie",
        model: "Movies",
        populate: {
          path: "genre",
          model: "Genres",
        },
      });

    res.status(200).json(usersList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.post("/", async (req, res) => {
  try {
    const isExist = await Users.findOne({ name: req.body.name });
    if (!isExist) {
      const usersList = await Users.create(req.body);
      return res.status(200).json(usersList);
    }

    return res.status(400).json({
      message: "User with this name already exist",
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.put("/watchLater/:userId", async (req, res) => {
  // userId => params
  // movieId => body
  try {
    const userList = await Users.findByIdAndUpdate(
      req.params.userId,
      {
        $push: {
          movie: req.body.movieId,
        },
      },
      { new: true }
    );
    res.status(200).json(userList);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

module.exports = router;
