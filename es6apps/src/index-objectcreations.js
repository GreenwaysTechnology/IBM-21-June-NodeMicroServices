
function Employee(id = 1, name = 'Subramanian') {
    this.id = id;
    this.name = name;
    this.calculateSalary = function () {
        return 1000;
    }
}
//emp is variable:reference variable
//new is keyword
//Employee() is constructor call
let emp = new Employee(34, 'Karthik');
console.log(`Id : ${emp.id} Name : ${emp.name} Salary :  ${emp.calculateSalary()}`)

class Customer {
    constructor(id = 0, name = 'defaultName') {
        this.id = id
        this.name = name
    }
    calculateInvoice() {
        return 1000;
    }
}
let cust = new Customer(2, 'ram');
console.log(`Id : ${cust.id} Name : ${cust.name} Invoice :  ${cust.calculateInvoice()}`)

//objects are created using literals
let profile = {
    id: 1,
    name: 'Subramanian',
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
console.log(profile)

