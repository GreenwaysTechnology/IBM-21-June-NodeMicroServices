const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    // nodeID: 'IBM-RemoteNode-2',
    transporter: "nats://localhost:4222",
    registry: {
        strategy: "Random"
        //discoverer:'Redis'
        //   discoverer: "redis://localhost:6379"
    },
    requestTimeout: 5 * 1000 // in milliseconds

});

broker.createService({
    name: 'remote2',
    actions: {
        async calculate(ctx) {
            const { a, b, invocationNumber } = ctx.params
            // // return `${a + b} - ${broker.nodeID} `;
            return new Promise((resolve, reject) => {
                //setTimeout(resolve,4000,`${a + b} - ${broker.nodeID} `)
                if (invocationNumber === 10) {
                    setTimeout(reject, 4000, `Something went wrong`)
                } else {
                    setTimeout(resolve, 4000, `${a + b} - ${broker.nodeID} `)
                }
            })





        }
    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();

