const mong = require('mongoose')

mong.connect('mongodb://127.0.0.1:27017/db2', {
    useNewUrlParser: true,
    useCreateIndex:true
})

// const User = mong.model('User', {
//     name: {
//         type: String
//     },
//     age: {
//         type: Number
//     }
// })

// const me = new User({
//     name: 'prateek',
//     age: 22 
// })

// me.save().then(() => {
//     console.log(me)
// }).catch((error) => {
//     console.log(error)
// })

const Task = mong.model('Task', {
    name: {
        type: String
    },
    age: {
        type: Boolean
    }
})

const task = new Task({
    name: 'prateek',
    age: true
})

task.save().then(() => {
    console.log(task)
}).catch((error) => {
    console.log(error)
})