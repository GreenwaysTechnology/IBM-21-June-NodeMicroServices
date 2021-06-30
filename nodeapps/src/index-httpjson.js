const http = require('http')
const TODOS = require('./mock-data/todo');

const port = 8080;
//create WebServer

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    //convert array into json string
    const todos = JSON.stringify(TODOS);
    res.write(todos)
    res.end();
})


//start webServer
server.listen(port, () => {
    console.log(`Server is ready to accept Requests on -  ${port} `)
});