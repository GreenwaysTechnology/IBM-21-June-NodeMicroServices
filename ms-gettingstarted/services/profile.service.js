const { ServiceBroker } = require('moleculer');
const { log } = console;

const broker = new ServiceBroker();

//multiple service methods
broker.createService({
    name: 'profile',
    actions: {
        findAll() {
            return 'Profile findall'
        },
        save() {
            return 'profile save'
        },
        remove() {
            return 'profile remove'
        }

    }
});


async function init() {
    try {
        await broker.start();
        let response;
        response= await broker.call('profile.findAll')
        log(`${response}`)
        response= await broker.call('profile.save')
        log(`${response}`)
        response= await broker.call('profile.remove')
        log(`${response}`)
    }
    catch (e) {
        log(e);
    }
}
init();