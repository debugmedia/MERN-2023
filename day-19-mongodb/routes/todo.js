const express = require("express");
const router = express.Router();
const Todo = require("../model/todo");

router.get("/", async (req, res) => {
   //  MongoClient.connect(process.env.ATLAS_URI, { useUnifiedTopology: true }, (err, db) => {
   //     const dbo = db.db("databaseName");
   //     dbo.collection("databaseTopic").findOne({ _id: userID }, (err, result) => {
   //        db.close();
   //     });
   //  });
   //  const todo = await Todo.findByIdAndRemove("6476283f4f846520870e2716");
   //  const todo = await Todo.findByIdAndDelete("6476283f4f846520870e2715");
   try {
      const todo = await Todo.find();
      // const todo = await Todo.where("todo");
      // const todo = await Todo.find({}, "todo isCompleted");
      //  const todo = await Todo.find().select("todo isCompleted -_id").sort({ todo: "desc" });
      // const todo = await Todo.findById("6476f3d59e371d90ef4dc6dc", { _id: 0 });
      // const todo = await Todo.findById("64774a62d7678ff069b35d4a");

      res.status(200).json(todo);
   } catch (error) {
      res.json({
         message: error.message,
      });
   }
});

router.post("/", async (req, res) => {
   try {
      // const newTodo = await Todo.create(req.body);
      await Todo.create(req.body);
      const allTodos = await Todo.findById();
      // console.log(allTodos);
      // const r = new Todo(req.body);
      // await r.save();
      // const allTodos = await Todo.find();
      res.json(allTodos);
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
      const updatedData = await Todo.findByIdAndUpdate(_id, fieldsToUpdate, { new: true });

      if (updatedData) {
         const allTodo = await Todo.find({});
         return res.json(allTodo);
      }
   } catch (error) {
      res.status(404).json({
         message: error.message,
      });
   }
});

router.delete("/", async (req, res) => {
   // try {
   //    const { _id } = req.body;

   //    const deletedField = await Todo.findByIdAndDelete(_ids);

   //    if (deletedField) {
   //       const allTodo = await Todo.find({});
   //       return res.json(allTodo);
   //    }

   //    res.status(400).json({ message: "Item does not exist" });
   // } catch (error) {
   //    res.status(404).json({ message: error.message });
   // }
   const { _id } = req.body;

   const deletedField = await Todo.findByIdAndDelete(_id);
   console.log(deletedField, "==deletedField");
   if (deletedField) {
      const allTodo = await Todo.find({});
      return res.json(allTodo);
   }

   res.status(400).json({ message: "Item does not exist" });
});

module.exports = router;
