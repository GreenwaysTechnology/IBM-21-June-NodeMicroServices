
const getUser = () => {
    console.log('get User is called')
    return new Promise((resolve, reject) => {
        let user = { id: 1, name: 'admin' }
        // user = null
        if (user) {
            setTimeout(resolve, 1000, user);
        } else {
            setTimeout(reject, 1000, { err: 'User not found' });
        }
    })
}
const login = user => {
    console.log('login User is called')
    return new Promise((resolve, reject) => {
        let status = 'login success'
        let errorMessage = 'login failed'
        if (user.name === 'admin') {
            setTimeout(resolve, 1000, status);
        } else {
            setTimeout(reject, 1000, errorMessage);
        }
    })
}

const showDashboard = status => {
    console.log('showDashboard User is called')
    return new Promise((resolve, reject) => {
        let adminpage = 'Admin Page'
        let guestpage = 'Guest Page'
        if (status === 'login success') {
            setTimeout(resolve, 1000, adminpage);
        } else {
            setTimeout(reject, 1000, guestpage);
        }
    })
}

//callback hell code.

// getUser(user => {
//     login(user, status => {
//         showDashboard(status, adminPage => {
//             console.log(adminPage)
//         }, error => {
//             console.log(error)
//         })
//     }, error => {
//         console.log(error)
//     })
// }, error => {
//     console.log(error)
// })


// getUser()
//     .then(user => {
//         login(user)
//             .then(status => {
//                 showDashboard(status)
//                     .then(page => console.log(page))
//                     .catch(err => console.log(err))
//             })
//             .catch(err => console.log(err))
// })
//    .catch(err => console.log(err))

// getUser()
//     .then(user => {
//         return login(user)
//     })
//     .then(status => {
//         return showDashboard(status)
//     })
//     .then(page => console.log(page))
//     .catch(err => console.log(err))

// getUser()
//     .then(user => login(user))
//     .then(status => showDashboard(status))
//     .then(page => console.log(page))
//     .catch(err => console.log(err))

const { log } = console;
getUser()
    .then(login)
    .then(showDashboard)
    .then(log)
    .catch(log)