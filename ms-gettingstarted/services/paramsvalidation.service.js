const { ServiceBroker } = require('moleculer');
const { log } = console;
const broker = new ServiceBroker();


broker.createService({
    name: 'math',
    actions: {
        add: {
            params: {
                a: "number",
                b: "number"
            },
            handler(ctx) {
                const { a, b } = ctx.params;
                return a + b;
            }
        }
    }

})

async function init() {
    try {
        await broker.start();
        let response;
        response = await broker.call('math.add', { a: 10, b: 10 })
        log(response);
        response = await broker.call('math.add', { a: "10", b: 10 })
        log(response);
    }
    catch (e) {
        log(e);
    }
}
init();