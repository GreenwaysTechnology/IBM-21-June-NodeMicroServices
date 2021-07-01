const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    nodeID: 'IBM-MainServer',
    transporter: "nats://localhost:4222"
});

broker.createService({
    name: 'main',
    actions: {
        async begin(ctx) {
            const { a, b } = ctx.params
            let res = await ctx.call('remote1.calculate', { a, b })
            console.log(`Result Got From Remote Services ${res}`)
        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();