function getA() {
    return 10; // return hardcoded value
}
let value = getA()
console.log(value);
console.log(getA())
function getB() {
    let b = 10;
    return b; // return variable
}
console.log(getB());

function calculate(a = 1, b = 1) {
    return a * b; // return expression- computed value
}
console.log(calculate(4, 5))


function isValid() {
    return; // undefined
}
console.log(isValid() ? 'valid' : 'invalid')