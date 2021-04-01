const {MongoClient, ObjectID} = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db'

MongoClient.connect(connectionURL, {useNewUrlParser: true}, (error, client)=> {
    if(error){
        return console.log('Unable to Connect')
    }
    const db = client.db(databaseName)

    // db.collection('users').deleteOne({
    //     age: 20
    // }).then((result) =>{
    //         console.log(result)
    // }).catch((error) =>{
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        age: 20
    }).then((result) =>{
            console.log(result)
    }).catch((error) =>{
        console.log(error)
    })
})