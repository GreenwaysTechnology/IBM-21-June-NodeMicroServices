
//service is exported
module.exports = {
    name: 'hello',
    actions: {
        //define biz api of that service
        sayHello() {
            return 'Hello,Moleculer'
        }
    }
};
