//

function counter() {
    console.log('outer function')
    return function () {
        return 'innerfunction'
    }
}
let func = counter()
console.log(func());

const outer = () => {
    console.log('outer function')
    return () => 'innerfunction'
};
console.log(outer()())