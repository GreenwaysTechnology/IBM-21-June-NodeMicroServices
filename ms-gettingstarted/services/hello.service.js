const { ServiceBroker } = require('moleculer')

//ServiceBroker is Moleculer Engine , on which only create services and deploy them.
const broker = new ServiceBroker()

//Service
broker.createService({
    name: 'hello',
    actions: {
        sayHello(ctx) {
            const { message,name } = ctx.params;
            return `${message} ${name}`
        }
    }
})

// function main() {
//     broker.start()
//         .then(() => {
//             console.log('Moleculer is ready to serve')
//             //here only we can call service methods
//             broker.call('hello.sayHello')
//                 .then(response => console.log(response))
//                 .catch(err => console.log(`Service call is failed ${err}`))
//         })
//         .catch(err => console.log(`Molculer failed to start ${err}`))
// }

async function main() {
    try {
        await broker.start()
        let response = await broker.call('hello.sayHello', { message: 'Hello' ,name:'Subramanian' })
        console.log(response)
        response =await broker.call('hello.sayHello', { message: 'Hello' ,name:'Microservices' })
        console.log(response)
    }
    catch (err) {
        console.log(err)
    }
}

main()