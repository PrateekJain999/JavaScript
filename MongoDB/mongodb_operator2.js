const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: false }, (err, client) => {
    if (err) {
        return console.log('Unable to Connect')
    }
    const db = client.db(databaseName)

    db.collection('users', (err, col) => {
        if (err) {
            console.log("Error...");
            return;
        }

        console.log(new ObjectID())

        // col.find({}).toArray((err, data)=>{
        //     console.log(data)
        // })

        // col.find({
        //     name:{
        //          $regex: 'a'
        //     },
        //     $comment:"give all name that contain h char"
        //  }).sort({quantity:-1}).toArray((err,data)=>{
        //      console.log(data)
        //  })

        // col.find({
        //     name:{
        //          $regex: 'a'
        //     },
        //     $comment:"give all name that contain h char"
        //  }).sort({quantity:-1}).count().then((data)=>{
        //      console.log(data)
        //  })

        // col.find({
        //     name: {
        //         $exists: true
        //     },
        //     $comment: "give all name that contain h char"
        // }).sort({ quantity: -1 }).toArray((err, data) => {
        //     console.log(data)
        // })

        // col.find({
        //     name:{
        //          $type:"string"
        //     },
        //     $comment:"give all name that contain h char"
        //  }).sort({quantity:-1}).toArray((err,data)=>{
        //      console.log(data)
        //  })

        // col.insertMany( [
        //     { date: new Date(2021, 11, 7).toLocaleDateString(), name: 'John', address: 'Highway 71', quantity: 3, category: ['A', 'B', 'C', 'D'] },
        //     { date: new Date(2019, 11, 17).toLocaleDateString(), name: 'Peter', address: 'Lowstreet 4', quantity: 5, category: ['A', 'B'] },
        //     { date: new Date(2009, 1, 19).toLocaleDateString(), name: 'Amy', address: 'Apple st 652', quantity: 3, category: ['A', 'D'] },
        //     { date: new Date(2011, 8, 15).toLocaleDateString(), name: 'Hannah', address: 'Mountain 21', quantity: 7, category: ['B', 'C', 'D'] },
        //     { date: new Date(2011, 9, 12).toLocaleDateString(), name: 'Michael', address: 'Valley 345', quantity: 1, category: ['C', 'D'] },
        //     { date: new Date(2015, 10, 19).toLocaleDateString(), name: 'Sandy', address: 'Ocean blvd 2', quantity: 0, category: ['D'] },
        //     { date: new Date(2010, 1, 18).toLocaleDateString(), name: 'Betty', address: 'Green Grass 1', quantity: 12, category: ['B', 'D'] },
        //     { date: new Date(2016, 0, 7).toLocaleDateString(), name: 'Richard', address: 'Sky st 331', quantity: 12, category: ['C', 'D'] },
        //     { date: new Date(2015, 10, 9).toLocaleDateString(), name: 'Susan', address: 'One way 98', quantity: 9, category: ['A'] },
        //     { date: new Date(2014, 6, 27).toLocaleDateString(), name: 'Vicky', address: 'Yellow Garden 2', quantity: 2, category: ['C'] },
        //     { date: new Date(2012, 5, 2).toLocaleDateString(), name: 'Ben', address: 'Park Lane 38', quantity: 1, category: ['A'] },
        //     { date: new Date(2010, 5, 3).toLocaleDateString(), name: 'William', address: 'Central st 954', quantity: 90, category: ['B', 'C'] },
        //     { date: new Date(2009, 2, 4).toLocaleDateString(), name: 'Chuck', address: 'Main Road 989', quantity: 8, category: ['A', 'D'] },
        //     { date: new Date(2019, 3, 7).toLocaleDateString(), name: 'Viola', address: 'Sideway 1633', quantity: 6, category: ['A', 'B', 'C', 'D'] }
        // ], (err, data) => {
        //     console.log(data);
        // });

        // col.find({category:{$all:['A','B','C','D']}}).toArray((err, data)=>{
        //     console.log(data)
        // })

        // col.find({category:{$size:2}}).toArray((err, data)=>{
        //         console.log(data)
        //     })

        // col.updateOne({ name: "John" }, { $currentDate: { date: true } }, (err, data) => {
        //     console.log(data)
        // })

        // col.updateOne({name:"John"},{$inc:{quantity:1}},(err,data)=>{
        //     console.log(data)
        // })

        // col.updateOne({name:"John"},{$max:{quantity:9}},(err,data)=>{
        //     console.log(data)
        // })

        // col.updateOne({name:"John"},{$mul:{quantity:2}},(err,data)=>{
        //     console.log(data)
        // })

        // col.updateOne({name:"John"},{$rename:{quantity:"size"}},(err,data)=>{
        //     console.log(data)
        // })

        // col.updateOne({name:"John"},{$unset:{"Gender":""}},(err,data)=>{
        //     console.log(data)
        // })

        // col.find({data:{$elemMatch:{"name":"Pj"}}}).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.updateOne({name:"John"},{$addToSet:{category:'E'}},(err,data)=>{
        //     console.log(data)
        // })

        // col.updateOne({name:"John"},{$push:{category:'E'}},(err,data)=>{
        //     console.log(data)
        // })

        // col.updateOne({ name: "John" }, { $pull: { category: 'E' } }, (err, data) => {
        //     console.log(data)
        // })

        // col.updateOne({name:"John"},{$pop:{category:1}},(err,data)=>{
        //     console.log(data)
        // })

        // col.updateOne({name:"John"}, {$push: { category:{ $each:['C','D'] }}}, (err,data)=>{
        //     console.log(data)
        // })
    })

})