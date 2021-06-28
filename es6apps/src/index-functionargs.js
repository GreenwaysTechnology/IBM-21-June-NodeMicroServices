//message is arg
function sayHello(message) {
    console.log(`Message is ${message}`)
}

//'Hello' is parameter
sayHello('Hello');
sayHello();

//default args
function multiply(a = 0, b = 0) {
    let res = a * b;
    console.log(`Result ${res}`)
}
multiply(10, 10)
multiply();

//Rest operator
function log(...message) {
    console.log(message)
}
log('app')
log('app', 'error')
log('app', 'error', 'in myfile.txt')