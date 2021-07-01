const { ServiceBroker } = require('moleculer');
const { log } = console;

const broker = new ServiceBroker();

//calculator service
broker.createService({
    name: 'calculator',
    actions: {
        add: {
            params: {
                a: 'number',
                b: 'number'
            },
            async handler(ctx) {
                const { a, b } = ctx.params;
                //service call
                // ctx.call('adder.add', { a: a, b: b })
                let res = await ctx.call('adder.add', { a, b })
                return res
            }

        }
    }
})

//adder service
broker.createService({
    name: 'adder',
    actions: {
        add: {
            params: {
                a: 'number',
                b: 'number'
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
        response = await broker.call('calculator.add', { a: 10, b: 20 })
        log(response)
    }
    catch (e) {
        log(e);
    }
}
init();