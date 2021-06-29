//timer 

function block(message) {
    console.log(message)
}

// function delay(action) {
//     //schedule it in blocking style
//    setTimeout(action,5000,'Hello!')
// }
const delay = action => setTimeout(action, 5000, 'Hello!')

// let handler = res=>console.log(`${res}`)
block('start')
// delay(handler)
delay(res => console.log(`${res}`))
block('end')