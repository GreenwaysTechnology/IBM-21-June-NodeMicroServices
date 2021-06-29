const UserService = require('./userservice')
const { login } = require('./services/AuthService')

let service = new UserService();
console.log(service.findAll())

console.log(login('admin','admin'))