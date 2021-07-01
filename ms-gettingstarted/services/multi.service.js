
const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();

//Hello Service
broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service
        sayHello() {
            return 'Hello,Molecular'
        }
    }
});

broker.createService({
    name: 'hai',
    actions: {
        //define biz api of that service
        sayHai() {
            return 'Hai,Molecular'
        }
    }
});


broker.createService({
    name: 'greet',
    actions: {
        //define biz api of that service
        sayGreet() {
            return 'Greet,Molecular'
        }
    }
});

async function init() {
    try {
        await broker.start();
        let response;
        response= await broker.call('hello.sayHello')
        log(`${response}`)
        response= await broker.call('hai.sayHai')
        log(`${response}`)
        response= await broker.call('greet.sayGreet')
        log(`${response}`)
    }
    catch (e) {
        log(e);
    }
}
init();