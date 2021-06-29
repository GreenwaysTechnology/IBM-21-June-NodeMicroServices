
const getUser = (success, failure) => {
    console.log('get User is called')
    let user = { id: 1, name: 'admin' }
    // user = null
    if (user) {
        setTimeout(success, 1000, user);
    } else {
        setTimeout(failure, 1000, { err: 'User not found' });
    }
}
const login = (user, success, failure) => {
    console.log('login User is called')

    let status = 'login success'
    let errorMessage = 'login failed'

    if (user.name === 'admin') {
        setTimeout(success, 1000, status);
    } else {
        setTimeout(failure, 1000, errorMessage);
    }

}

const showDashboard = (status, success, failure) => {
    console.log('showDashboard User is called')

    let adminpage = 'Admin Page'
    let guestpage = 'Guest Page'

    if (status === 'login success') {
        setTimeout(success, 1000, adminpage);
    } else {
        setTimeout(failure, 1000, guestpage);
    }

}
getUser(user => {
    login(user, status => {
        showDashboard(status, adminPage => {
            console.log(adminPage)
        }, error => {
            console.log(error)
        })
    }, error => {
        console.log(error)
    })
}, error => {
    console.log(error)
})