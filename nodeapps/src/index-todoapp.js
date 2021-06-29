const { findAll } = require('./services/TodoService')

async function main() {
    // const todos = findAll();
    // console.log(todos)

    //findAll(todos => console.log(todos), err => console.log(err))
    //  findAll()
    //    .then(todos=>console.log(todos))
    //    .catch(err=>console.log(err))
    try {

        const todos = await findAll();
        console.log(todos);

    }
    catch (err) {
        console.log(err)
    }

}
main()