const TODOS = require('../mock-data/todo')

class TodoService {

    //sync
    /*findAll() {
        return TODOS;
    }
    **/
    //callback style

    // findAll(success, failure) {
    //     if (TODOS) {
    //         setTimeout(success, 5000, JSON.stringify(TODOS))
    //     } else {
    //         setTimeout(failure, 1000, 'Todo not Found')
    //     }
    // }

    //promise powered
    findAll() {
        return new Promise((resolve, reject) => {
            if (TODOS) {
                setTimeout(resolve, 5000, TODOS)
            } else {
                setTimeout(reject, 1000, 'Todo not Found')
            }
        });
    }
    create(todo){
        return new Promise((resolve,reject)=>{
            TODOS.concat(todo);
            setTimeout(resolve,1000,TODOS)
        })
    }

    //other apis you can add : task

}

module.exports = new TodoService()