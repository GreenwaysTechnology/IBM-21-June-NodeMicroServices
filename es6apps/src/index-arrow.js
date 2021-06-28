//arrow functions

//es 5 style
let hai = function () {
    console.log('hai')
};
hai();

//arrow version
hai = () => {
    console.log('hai')
};
hai();

//code refactoring in arrows

// if function has only one line of body: remove {}
hai = () => console.log('hai');
hai();

//args and parameters
let add = (a = 0, b = 0) => {
    return a + b
}
console.log(add(1, 1));

//if function has only one of body with return ; remove {} and return statement
add = (a = 0, b = 0) => a + b
console.log(add(1, 1));

//single param and no default value and return that :remove ()
let display = name => name;
console.log(display('Subramanian'));