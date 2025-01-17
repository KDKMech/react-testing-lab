import mongoose from "mongoose";

const todoSchema = mongoose.Schema({
    name: String,
    content: String,
    completed: Boolean,
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;

