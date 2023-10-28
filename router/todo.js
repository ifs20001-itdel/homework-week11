const express = require('express')
const route = express.Router()
const Controller = require('../controller/todoController')

route.get('/', Controller.getAllTodo)
route.get('/:id', Controller.getTodoDetail)
route.post('/', Controller.postTodo)
route.delete('/:id', Controller.deleteTodo)
route.put('/:id', Controller.editTodo)

module.exports = route
