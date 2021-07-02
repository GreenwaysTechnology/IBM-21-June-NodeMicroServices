const { ServiceBroker } = require('moleculer');

const broker = new ServiceBroker({
    nodeID: 'IBM-MainServer',
    transporter: "nats://localhost:4222",
    // requestTimeout: 1000, // in milliseconds,
    circuitBreaker: {
        enabled: true,
        threshold: 0.1,
        minRequestCount: 3,
        windowTime: 60, // in seconds
        halfOpenTime: 5 * 1000, // in milliseconds
        check: err => err && err.code >= 500
    },
    registry: {
        //discoverer:'Redis'
        // discoverer: "redis://localhost:6379"
    }
});

broker.createService({
    name: 'main',
    actions: {
        // async begin(ctx) {
        //     //  const { a, b ,timeout } = ctx.params
        //     const { a, b, invocationNumber } = ctx.params
        //     // let res = await ctx.call('remote1.calculate', { a, b }, {
        //     //    // timeout: 1000,
        //     //     timeout:timeout,
        //     //     fallbackResponse() {
        //     //         //return data from caching server
        //     //         return `The Result is From cachining Server ${0}`
        //     //     }
        //     // })
        //     //which uses global timeout
        //     let res = await ctx.call('remote1.calculate', { a, b, invocationNumber })
        //     console.log(`Result Got From Remote Services ${res}`)
        // }
        begin: {
            circuitBreaker: {
                // All CB options can be overwritten from broker options.
                threshold: 0.0,
                windowTime: 30
            },
            async handler(ctx) {
                const { a, b, invocationNumber } = ctx.params
                let res = await ctx.call('remote1.calculate', { a, b, invocationNumber })
                console.log(`Result Got From Remote Services ${res}`)

            }

        }

    }
})

async function init() {
    await broker.start()
    broker.repl()
}
init();