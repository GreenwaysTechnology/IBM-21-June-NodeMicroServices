
function sayHello() {
    console.log('hello')
}
//invoke the function
sayHello();
//we can assign into  a variable
//way -1
let hello = sayHello;
hello();

//inline assignment : anonmous functions: function without name
//way -2
let hai = function () {
    console.log('hai')
};
hai();

//pass parameters and args

let add = function (a = 0, b = 0) {
    return a + b;
};

console.log(add(1,1))
console.log(add())

