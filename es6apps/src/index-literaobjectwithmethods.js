
let service = {
    name: 'GreeterService',
    version: '1.0',
    actions: {
        //es 5 style
        sayHello: function () {
            return 'Hello'
        },
        //es 6 version of writing methods inside literal object
        sayHai(name) {
            return `Hai ${name}`;
        }
    }
}
console.log(service.name)
console.log(service.actions.sayHello())
console.log(service.actions.sayHai('Subramanian'))