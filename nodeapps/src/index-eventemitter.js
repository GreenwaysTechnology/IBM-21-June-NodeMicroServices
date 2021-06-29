const EventEmitter = require('events')

//emiter
class CustomerService extends EventEmitter {
    constructor() {
        super();
        this.on('sales', (data) => {
            setTimeout(() => console.log('data', data), 1000)
        })
        // this.once('sales', (data) => {
        //     setTimeout(() => console.log('data', data), 1000)
        // })
    }
    buy(product) {
        this.emit('sales', product) //send /emit an event 
    }
}
let custService = new CustomerService();
custService.buy({ id: 1, name: 'Node.js In Action', category: 'book', price: 100 })
custService.buy({ id: 2, name: 'libuv.js In Action', category: 'book', price: 100 })