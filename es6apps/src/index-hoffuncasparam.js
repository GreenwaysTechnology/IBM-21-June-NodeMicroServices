//Higher order function: function as parameter

function add(a, b) {
    return a + b;
}
add(10, 10)
let x = 100;
let y = 200;
add(x, y);


//action : is arg variable,
function connect(servertype = '', action) {
    if (typeof action === 'function') {
        action(servertype);
    } else {
        throw Error('Wrong type')
    }
}
//parameter of function can be anything -numbers,strings...
let webserver = function (server) {
    console.log(server)
}
connect('webserver starts', webserver)
//connect(100)
connect('db server starts', function (server) {
    console.log(server)
})
////////////////////////////////////////////////////////////////////////////////////

function fetchData(success, failure) {
    //biz logic
    let response = 'This is Response'
    //response=undefined
    if (response) {
        success(response)
    } else {
        failure('No data ')
    }

}

fetchData(function (res) {
    console.log(res)
}, function (err) {
    console.log(err)
})

//arrow version

let fetch = (success, failure) => {
    if (typeof success === 'function' && typeof failure === 'function') {
        //biz logic
        let response = 'This is Response'
        //response=undefined
        if (response) {
            success(response)
        } else {
            failure('No data ')
        }
    } else {
        throw Error('Wrong type')
    }

}
fetch(res => console.log(res), err => console.log(err))
//fetch(100,900)










