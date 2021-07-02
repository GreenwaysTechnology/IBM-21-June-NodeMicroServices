const { ServiceBroker } = require("moleculer");
const ApiGateWayService = require("moleculer-web");
const DbService = require("moleculer-db");

const broker = new ServiceBroker();

////url mapping;
//http://localhost:3000/api/hello/sayHello

// Load API Gateway
// broker.createService({
//     name: 'ApiGateWayService',
//     mixins: [ApiGateWayService],
//     settings: {
//         routes: [{
//             path: "/api",
//             whitelist: [
//                 // Access any actions in 'hello' service
//                 "hello.*",
//             ]
//         }]
//     }
// });


//http://localhost:3000/api/hello/

broker.createService({
    name: 'apigateway',
    mixins: [ApiGateWayService],
    settings: {
        routes: [{
            path: "/api",
            aliases: {
                "hello": "hello.sayHello",  //here GET Is default
                // "GET hello": "hello.sayHello",
                "REST users": "users"
            }
        }]
    }
});

broker.createService({
    name: 'users',
    mixins: [DbService],
    settings: {
        fields: ["_id", "username", "name"]
    },
    actions: {
        list: {
            handler(ctx) {
                return 'List'
            }
        },
        get: {
            handler(ctx) {
                return 'Get'
            }
        },
        create: {
            handler(ctx) {
                return 'create'
            }
        },
        update: {
            handler(ctx) {
                return 'update'
            }
        },
        remove: {
            handler(ctx) {
                return 'remove'
            }
        }
    }
});



broker.createService({
    name: 'hello',
    actions: {
        //define biz api of that service
        sayHello() {
            return 'Hello,Molecular'
        }
    }
});

async function init() {
    try {
        await broker.start();
    }
    catch (e) {
        log(e);
    }
}
init();

