const http = require('http');
const { log } = console;

const port =8080;

const server = http.createServer((req, res) => {

    let body='';
    //attach data event on request object
    req.on('data', chunk => {
        body += chunk;
        log(body);
    });

    //attach close event on response event
    res.on('close', () => {
        log('response close event is called')
    });
    res.on('finish', () => {
        log('response has been sent /committed')
    });
    res.end("Hello,Node")
});

server.listen(port, () => {
    console.log(`Http Server listens @ ${port}`)
});

server.on('request',(req,res)=>{
   log(`request is recieved on ${port} -method is ${req.method} url ${req.url}`)
 })