const express = require("express");
const app = express();
const cors = require("cors");
const Todo = require("./models/Todo");

//this middleware is used so we can read incoming json data
app.use(express.json());
app.use(cors());
const createTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    const todo = await Todo.create({ title, description });
    return res.json({ success: true, todo });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};

const getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.find();
    return res.json({
      success: true,
      todos,
    });
  } catch (error) {
    return res.json({
      success: false,
      message: error.message,
    });
  }
};


app.use("/",getAllTodos)

app.get("/getAllTodos", getAllTodos);
app.post("/insertTodo", createTodo);

module.exports = app;
