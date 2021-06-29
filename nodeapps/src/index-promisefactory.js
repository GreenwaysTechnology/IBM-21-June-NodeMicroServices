
//factory
function block(message) {
    console.log(message)
}
function getValue() {
    return Promise.resolve('Success') // Promise Object
}
function getError() {
    return Promise.reject('error') // Promise Object
}
function login(userName, password) {
    if (userName === 'admin' && password === 'admin') {
        return Promise.resolve('login success')
    } else {
        return Promise.reject('login failed')
    }
}

block('start')
getValue().then(res => console.log(res))
getError().catch(err => console.log(err))

login('admin', 'admin')
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
login('ff', 'admin')
.then(res => console.log(res))
.catch(err => console.log(err))


block('end')
