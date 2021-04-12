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

        //================================= set experssion ===================================
        // col.aggregate(
        //     [
        //         { $match: { 'firstName': 'Prashuk' } },
        //         {
        //             $project: {
        //                 'allElementsTrue1': { $allElementsTrue: ['$array'] },
        //                 'allElementsTrue2': { $allElementsTrue: [[]] },
        //                 'allElementsTrue3': { $allElementsTrue: [[false, 0]] },
        //                 'anyElementTrue1': { $anyElementTrue: ['$array'] },
        //                 'anyElementTrue2': { $anyElementTrue: [[true, false]] },
        //                 'anyElementTrue3': { $anyElementTrue: [[false, false]] },
        //                 'setDifference': { $setDifference: [[1, 2, 3, 4], [2, 3, 7, 8]] },
        //                 'setEquals1': { $setEquals: [[1, 2, 3, 4], [2, 3, 7, 8]] },
        //                 'setIntersection': { $setIntersection: [[1, 2, 3, 4], [2, 3, 7, 8]] },
        //                 'setIsSubset': { $setIsSubset: [[1, 2, 3, 4], [1, 2]] },
        //                 'setUnion': { $setUnion: [[1, 2, 3, 4], [2, 3, 7, 8]] },
        //             }
        //         }
        //     ])


    })
})