const express = require('express') // function
const { findAll, create } = require('./services/TodoService')
const bodyParser = require('body-parser')
const todoRouter = require('./routers/todo.router')
const userRouter = require('./routers/user.router')
const customerRouter = require('./routers/customer.router')

const port = 3000;
const app = express();

//binding routers with application object
app.use('/api/todo',todoRouter)
app.use('/api/user',userRouter)
app.use('/api/customer',customerRouter)

// parse application/json
app.use(bodyParser.json())

//routing
app.get('/', (req, res) => {
    res.end('Home')
})

//start server
app.listen(port, () => {
    console.log(`Express Server is running on ${port}`)
})