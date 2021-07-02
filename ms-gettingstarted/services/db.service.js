const { ServiceBroker } = require("moleculer");
const DbService = require("moleculer-db");

const broker = new ServiceBroker();

// Create a DB service for `user` entities
broker.createService({
    name: "users",
    mixins: [DbService],

    settings: {
        fields: ["_id", "username", "name"]
    },

    afterConnected() {
        // Seed the DB with ˙this.create`
    }
});

async function init() {
    try {
        await broker.start();
        await broker.call("users.create", {
            username: "john",
            name: "John Doe",
            status: 1
        })
        const users = await broker.call("users.find");
        console.log(users);
    }
    catch (e) {
        log(e);
    }
}
init();

