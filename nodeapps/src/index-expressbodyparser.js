const express = require('express') // function
const { findAll, create } = require('./services/TodoService')
const bodyParser = require('body-parser')

const port = 3000;

const app = express();


// parse application/json
app.use(bodyParser.json())


//routing
app.get('/', (req, res) => {
    res.end('Home')
})
//todo api
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await findAll();
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})
//without middleware
app.post('/api/v1/todo', async (req, res) => {

    let todo = '';
    req.on('data', chunk => {
        todo += chunk
    })

    req.on('end', async () => {
        try {
            console.log(todo)
            const todos = await create(todo);
            res.status(201).location("/api/todo").json({ message: 'Todo Created' })
        }
        catch (error) {
            res.status(500).json({ message: error })
        }
    });

})
app.get('/api/todos', async (req, res) => {
    try {
        const todos = await findAll();
        res.status(200).json(todos);
    }
    catch (error) {
        res.status(500).json({ message: error })
    }
})

//with middleware
app.post('/api/v2/todo', async (req, res) => {
    try {
        const todo = req.body;
        console.log(todo)
        const todos = await create(todo);
        res.status(201).location("/api/todo").json({ message: 'Todo Created' })
    }
    catch (error) {
        res.status(500).json({ message: error })
    }


})

//start server
app.listen(port, () => {
    console.log(`Express Server is running on ${port}`)
})