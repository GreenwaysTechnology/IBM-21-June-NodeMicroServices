const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    // nodeID: 'IBM-RemoteNode-2',
    transporter: "nats://localhost:4222",
    registry: {
        strategy: "Random"
        //discoverer:'Redis'
        //   discoverer: "redis://localhost:6379"
    },
    requestTimeout: 5 * 1000, // in milliseconds
    circuitBreaker: {
        enabled: true,
        threshold: 0.1,
        minRequestCount: 1,
        windowTime: 60, // in seconds
        halfOpenTime: 5 * 1000, // in milliseconds
        check: err => {
            console.log('check function-service2')
            return err && err.code >= 500
        }
    }
});

broker.createService({
    name: 'remote2',
    events: {
        "$circuit-breaker.opened"(opened) {
            console.log("remote2 : CB open created -Main service:", opened.nodeID ,opened.action);
        },
        "$circuit-breaker.closed"(opened) {
            console.log("remote2 : CB closed created -Main service:", opened.nodeID ,opened.action);
        },
        "$circuit-breaker.half-opened"(opened) {
            console.log("remote2 : CB Half created -Main service:", opened.nodeID ,opened.action);
        }
       
    },
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

