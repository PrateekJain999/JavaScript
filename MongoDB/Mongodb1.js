const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db'
const id = new ObjectID()
console.log(id)

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=> {
    if(error){
        return console.log('Unable to Connect')
    }
    const db = client.db(databaseName)

    // db.collection('users').insertOne({
    //     name:'Prateek jain',
    //     age: 21
    // },(error, result) =>{
    //         if(error){
    //             return console.log('Unable to insert data')
    //         }
    //         console.log(result.ops)
    // })

    // db.collection('users').insertMany([
    // {
    //     name:'Prateek jain',
    //     age: 21
    // },{
    //     name:'Prasuk Jain',
    //     age: 20
    // }
    // ],(error, result) =>{
    //         if(error){
    //             return console.log('Unable to insert data')
    //         }
    //         console.log(result.ops)
    // })
})