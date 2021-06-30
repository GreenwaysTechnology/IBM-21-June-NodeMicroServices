const http = require('http')
const { findAll } = require('./services/TodoService')

const port = 8080;
//create WebServer

const server = http.createServer(async (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    // findAll(todos => {
    //     res.write(todos)
    //     res.end();
    // }, error => {
    //     res.write(error)
    //     res.end()
    // });
    // findAll()
    //     .then(todos => {
    //         res.write(todos)
    //         res.end();
    //     })
    //     .catch(error => {
    //         res.write(error)
    //         res.end()
    //     })
    try {
        const todos = await findAll()
        res.write(todos)
        res.end()
    }
    catch (error) {
        res.write(error)
        res.end();
    }

})


//start webServer
server.listen(port, () => {
    console.log(`Server is ready to accept Requests on -  ${port} `)
});