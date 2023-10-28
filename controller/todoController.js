const { Todo } = require('../models')

class Controller {
  static async getAllTodo (req, res) {
    try {
      const allTodo = await Todo.findAll()

      res.status(200).json({
        message: 'success',
        data: allTodo
      })
    } catch {
      console.log('Error')
    }
  }

  static async postTodo (req, res) {
    try {
      const postTodo = await Todo.create({
        name: req.body.name,
        todo: req.body.todo,
        address: req.body.address
      })
      res.status(200).json(postTodo)
      console.log(postTodo)
    } catch {
      console.log('Error')
    }
  }

  static async getTodoDetail (req, res) {
    try {
      const { id } = req.params
      const todo = await Todo.findByPk(id)
      res.status(200).json(todo)
    } catch {
      console.log('Error')
    }
  }

  static async deleteTodo (req, res) {
    const { id } = req.params

    Todo.destroy({
      where: { id }
    })
      .then(() => {
        res.status(201).json({
          message: 'Delete Todo Succesfully'
        })
      }).catch(
        console.log('Error')
      )
  }

  static async editTodo (req, res) {
    const { id } = req.params
    const { name, todo, address } = req.body

    Todo.update({ name, todo, address }, {
      where: {
        id
      }
    })
      .then(() => {
        res.status(201).json({
          message: 'Update Todo Succesfully'
        })
      }).catch(
        console.log('Error')
      )
  }
}
module.exports = Controller
