const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    nodeID: 'IBM-RemoteNode-2',
    transporter: "nats://localhost:4222",
    registry: {
        //discoverer:'Redis'
        discoverer: "redis://localhost:6379"
    }

});

broker.createService({
    name: 'remote2',
    actions: {
        async calculate(ctx) {
            const { a, b } = ctx.params
            return new Promise((resolve, reject) => {
                setTimeout(resolve, 5000, a + b)
            })
            // return a + b;
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();

