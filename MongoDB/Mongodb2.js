const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=> {
    if(error){
        return console.log('Unable to Connect')
    }
    const db = client.db(databaseName)

    // db.collection('users').findOne({
    //     age: 21
    // },(error, result) =>{
    //         if(error){
    //             return console.log('Unable to insert data')
    //         }
    //         console.log(result)
    // })

    db.collection('users').find({
        age: 21
    }).toArray((error, result) => {
        console.log(result)
    })
})