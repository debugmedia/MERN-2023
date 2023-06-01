const express = require("express");
const { v4: uuidv4 } = require("uuid");
const router = express.Router();
const Todo = require("../models/todoModel");

const todoList = [
  {
    id: "k492dt8p1",
    todo: "test1",
    isCompleted: false,
  },
];

router.get("/", async (req, res) => {
  const todoList = await Todo.find().select("todo isCompleted");
  //   const todoList = await Todo.findById("647776c3d8b4392ae1d4b555");
  //   const todoList = await Todo.find().sort({
  //     todo: "desc",
  //   });

  res.status(200).json(todoList);
});

router.post("/", async (req, res) => {
  try {
    const { todo } = req.body;

    const todoItem = {
      todo: todo,
      isCompleted: false,
    };

    const updatedTodo = await Todo.create(todoItem);
    // Do not use this method. Do the array manipulation from the Front End
    const allTodo = await Todo.find(); // Query 10000 // Server;

    // const newTodo = new Todo(req.body);
    // await newTodo.save();
    res.json(allTodo);
    // res.json(updatedTodo);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
});

router.put("/", async (req, res) => {
  try {
    const { _id, todo, isCompleted } = req.body;

    const fieldsToUpdate = {
      todo,
      isCompleted,
    };

    const updatedData = await Todo.findByIdAndUpdate(
      _id,
      { ...req.body },
      { new: true }
    );

    if (updatedData) {
      // Do not use this method. Do the array manipulation from the Front End
      const allTodo = await Todo.find(); // Query 10000 // Server;
      return res.json(updatedData);
    }

    res.status(404).json({
      message: `Item with id: ${id} does not exist`,
    });
  } catch (error) {
    res.status(404).json({
      message: error.message,
    });
  }
});

router.delete("/", async (req, res) => {
  try {
    const { _id } = req.body;

    const deletedField = await Todo.findByIdAndDelete(_id);

    if (deletedField) {
      // Do not use this method. Do the array manipulation from the Front End
      const allTodo = await Todo.find(); // Query 10000 // Server;
      return res.json(allTodo);
    }

    res.status(404).json({ message: "Item does not exist" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

module.exports = router;
