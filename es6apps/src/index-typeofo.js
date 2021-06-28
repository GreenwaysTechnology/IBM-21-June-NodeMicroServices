
let a = 10;
console.log(`a type is ${typeof a}`);
a = 'Hello';
console.log(`a type is ${typeof a}`);
a = true;
console.log(`a type is ${typeof a}`);
a = undefined;
console.log(`a type is ${typeof a}`);
a = 10 * undefined; //NaN --->number type
console.log(`a type is ${typeof a}`);
a = 100 / 0;
console.log(`a type is ${typeof a}`);