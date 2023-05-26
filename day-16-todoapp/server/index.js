const express = require("express");
const app = express();
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

app.use(cors());
app.use(express.json());

const todoList = [
   {
      id: "k492dt8p1",
      todo: "test1",
      isCompleted: false,
   },
];

// GET
// ("Query Params | Path Param");

// !GET
// Body Params

// Path Params
// app.get("/api/todo/:id", (req, res) => {
//   res.json(req.params.id);
// });

app.get("/api/todo", (req, res) => {
   res.status(200).json(todoList);
});

app.post("/api/todo", (req, res) => {
   const { todo } = req.body;

   if (!("todo" in req.body)) {
      return res.status(400).json({
         message: `${JSON.stringify(req.body)}: This attribute is not accepted, Required attributes: todo`,
      });
   }

   const todoItem = {
      id: uuidv4(),
      todo: todo,
      isCompleted: false,
   };

   todoList.push(todoItem);

   res.status(200).json(todoList);
});

app.put("/api/todo", (req, res) => {
   const { id, todo, isCompleted } = req.body;

  //  Task: Make it dynamic
  //  if (!("id" in req.body) && !("todo" in req.body) && !("isComplete" in req.body)) {
  //     res.status(400).json({
  //        message: "Missing attribue: id, todo, isCompleted",
  //     });
  //  }

   const isExist = todoList.find((data) => data.id === id);

   if (isExist) {
      todoList.forEach((todoItem) => {
         if (todoItem.id === id) {
            todoItem.todo = todo;
            todoItem.isCompleted = isCompleted || false;
         }
      });

      return res.json(todoList);
   }

   res.status(404).json({
      message: `Item with id: ${id} does not exist`,
   });
});

app.delete("/api/todo", (req, res) => {
   const { id } = req.body;

   const todoIndex = todoList.findIndex((item) => item.id === id);

   if (todoIndex !== -1) {
      todoList.splice(todoIndex, 1);
      return res.json(todoList);
   }

   res.status(404).json({ message: "Item does not exist" });
});

app.all("*", (req, res) => {
   res.status(404).json("This page does not exist");
});

// app.get(["/api/todo", "/api/todo1"], (req, res) => {
//   res.status(200).json("Get Method");
// });

const PORT = 3005;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
