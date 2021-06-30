const express = require('express') // function

const port = 3000;

const app = express();

//request processing.

//routing
app.get('/', (req, res) => {
    res.end('Home')
})
app.get('/greet', (req, res) => {
    res.end('Greet')
})
app.get('/hello', (req, res) => {
    res.end('Hello')
})

//start server
app.listen(port, () => {
    console.log(`Express Server is running on ${port}`)
})