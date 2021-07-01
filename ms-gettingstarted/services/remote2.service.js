const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    nodeID: 'IBM-RemoteNode-2',
    transporter: "nats://localhost:4222"

});

broker.createService({
    name: 'remote2',
    actions: {
        async calculate(ctx) {
            const { a, b } = ctx.params
            return a + b;
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();

