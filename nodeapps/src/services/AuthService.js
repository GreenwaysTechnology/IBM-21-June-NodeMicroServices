
class AuthService {
    login(userName, password) {
        return userName === 'admin' && password === 'admin'
    }
}

//module.exports = AuthService; //sharing object
module.exports = new AuthService() // sharing object