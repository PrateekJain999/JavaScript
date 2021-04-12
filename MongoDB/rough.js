const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true }, (err, client) => {
    if (err) {
        return console.log('Unable to Connect')
    }
    const db = client.db(databaseName)

    db.collection('Student', (err, col) => {

        if (err) {
            console.log("Error...");
            return;
        }
        


    })
})