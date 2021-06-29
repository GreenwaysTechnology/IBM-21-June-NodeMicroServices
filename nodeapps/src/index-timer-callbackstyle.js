//timer 

function block(message) {
    console.log(message)
}

function delay(action) {
    //schedule it in blocking style
    setTimeout(() => {
        action()
    }, 5000)
}

let handler = function () {
    console.log('i am delayed function')
}

block('start')
delay(handler)
block('end')