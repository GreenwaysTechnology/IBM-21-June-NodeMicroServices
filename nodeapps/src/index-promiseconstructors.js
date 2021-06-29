
function login(userName, password) {
    return new Promise((resolve, reject) => {
        if (userName === 'admin' && password === 'admin') {
            //wrap timer code inside promise
            setTimeout(resolve, 1000, 'Login Success')
        } else {
            setTimeout(reject, 1000, 'Login Failed')
        }
    });
}


login('admin', 'admin')
    .then(res => console.log(res))
    .catch(err => console.log(err))