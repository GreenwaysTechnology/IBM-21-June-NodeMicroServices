//es 6 class 

class Account {
    constructor() {
        console.log('Account')
    }
    deposit() {
        return 20;
    }
}
class SavingsAccount extends Account {
    constructor() {
        super()
        console.log('Savings Account')
    }
    deposit() {
        return 10 * super.deposit();
    }
}
let sb = new SavingsAccount()
console.log(sb.deposit())