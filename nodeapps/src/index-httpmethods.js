const express = require('express') // function

const port = 3000;

const app = express();


//routing
app.get('/', (req, res) => {
    res.end('Home')
})

app.post('/create', (req, res) => {
    res.end('Create')
})

app.delete('/remove', (req, res) => {
    res.end('Remove')
})

app.put('/update', (req, res) => {
    res.end('Update')
})
//start server
app.listen(port, () => {
    console.log(`Express Server is running on ${port}`)
})