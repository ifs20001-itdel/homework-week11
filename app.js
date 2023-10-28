const express = require('express')
const app = express()
const port = 8080
const todoRoute = require('./router/todo')
const morgan = require('morgan')

app.use(morgan('common'))

app.use(express.urlencoded({ extended: false }))
app.use('/todo', todoRoute)

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})
