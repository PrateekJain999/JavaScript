const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=> {
    if(error){
        return console.log('Unable to Connect')
    }
    const db = client.db(databaseName)

    // const updatePromise = db.collection('users').updateMany({
    //     age: 21
    // },{
    //     $set:{
    //         name: 'Ram',
    //         age:22
    //     }
    // })

    // updatePromise.then((result) =>{
    //         console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('users').findOne({
    //     age: 21
    // },(error, result) =>{
    //         if(error){
    //             return console.log('Unable to insert data')
    //         }
    //         console.log(result)
    // })

    // db.collection('users').find({
    //     age: 21
    // }).toArray((error, result) => {
    //     console.log(result)
    // })

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

    // db.collection('users').deleteOne({
    //     age: 20
    // }).then((result) =>{
    //         console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    // db.collection('users').deleteMany({
    //     age: 20
    // }).then((result) =>{
    //         console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })
})