const dotenv = require('dotenv')
dotenv.config();
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = 3000

const Todo = require('./models/Todo.js')
const dbname = 'Todo-react-lab-testing'




mongoose.connect(process.env.MONGODB_URL)

mongoose.connection.on('connected', () => {
    console.log(`connected to mongo db ${mongoose.connection.name}.`);
})

app.use(express.json())

//routes


app.post(`${dbname}`, async (req, res) => {
    const createdTodo = await Todo.create(req.body)
    res.json(createdTodo)
})




app.listen(PORT, () => {
    console.log(`The express app is ready! listening on port ${PORT}`);
  });