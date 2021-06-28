
//numerical computation against undefined
let qty; //undefined
let price = 100;
let totalPrice = qty * price;
console.log(`Totatl Price is ${totalPrice}`)

//type conversion:implicit
let x = "10";
let y = 10;
let c = x * y;
console.log(`C ${c}`)

//explicit
let d = parseFloat(x) * y;
console.log(`D ${d}`)

//Nan and type conviersion
x = "$20";
c = x * y;
console.log(`C ${c}`)

d = parseFloat(x) * y;
console.log(`D ${d}`)