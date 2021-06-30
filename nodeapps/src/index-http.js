const http = require('http')

const port = 8080;
//create WebServer

const server = http.createServer((req, res) => {
    res.write('Hello')
    res.end();
})


//start webServer
server.listen(port, () => {
    console.log(`Server is ready to accept Requests on -  ${port} `)
});