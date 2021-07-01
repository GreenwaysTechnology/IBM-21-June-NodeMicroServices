const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    nodeID: 'IBM-RemoteNode-1',
    transporter: "nats://localhost:4222",
    registry: {
        //discoverer:'Redis'
        discoverer: "redis://localhost:6379"
    }

});

broker.createService({
    name: 'remote1',
    actions: {
        async calculate(ctx) {
            const { a, b } = ctx.params
            return await ctx.call('remote2.calculate', { a, b })
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();

