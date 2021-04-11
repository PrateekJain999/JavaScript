const { MongoClient } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'db'

MongoClient.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: false }, (err, client) => {
    if (err) {
        return console.log('Unable to Connect')
    }
    const db = client.db(databaseName)

    db.collection('users', (err, col) => {
        // col.insertOne({
        //     Name:"Pk5",
        //     gender:"male",
        //     phone:9997481571,
        //     DOB: new Date(1998,5,25)
        // }

        // col.updateMany({"Name":"Pk"},{$set:{"phone":1234567890}},(err,data)=>{
        //     console.log(data)
        // })

        // data=col.find({}).explain().then((data)=>{
        //     console.log(data)
        // })

        // col.find().count().then((data)=>{
        //     console.log(data)
        // })

        // col.find().sort({"Name":-1}).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({"gender":"male",$and:{"Name":"Pk"}}).sort({ "Name": -1 }).toArray((err, data) => {
        //     console.log(data)
        // })

        // col.insertMany( [
        //     { date: new Date(2021,11,7).toLocaleDateString(), name: 'John', address: 'Highway 71', quantity: 3},
        //     { date: new Date(2019,11,17).toLocaleDateString(), name: 'Peter', address: 'Lowstreet 4', quantity: 5},
        //     { date: new Date(2009,1,19).toLocaleDateString(), name: 'Amy', address: 'Apple st 652', quantity: 3},
        //     { date: new Date(2011,8,15).toLocaleDateString(), name: 'Hannah', address: 'Mountain 21', quantity: 7},
        //     { date: new Date(2011,9,12).toLocaleDateString(), name: 'Michael', address: 'Valley 345', quantity: 1},
        //     { date: new Date(2015,10,19).toLocaleDateString(), name: 'Sandy', address: 'Ocean blvd 2', quantity: 0},
        //     { date: new Date(2010,1,18).toLocaleDateString(), name: 'Betty', address: 'Green Grass 1', quantity: 12},
        //     { date: new Date(2016,0,7).toLocaleDateString(), name: 'Richard', address: 'Sky st 331', quantity: 12},
        //     { date: new Date(2015,10,9).toLocaleDateString(), name: 'Susan', address: 'One way 98', quantity: 9},
        //     { date: new Date(2014,6,27).toLocaleDateString(), name: 'Vicky', address: 'Yellow Garden 2', quantity: 2},
        //     { date: new Date(2012,5,2).toLocaleDateString(), name: 'Ben', address: 'Park Lane 38', quantity: 1},
        //     { date: new Date(2010,5,3).toLocaleDateString(), name: 'William', address: 'Central st 954', quantity: 90},
        //     { date: new Date(2009,2,4).toLocaleDateString(), name: 'Chuck', address: 'Main Road 989', quantity: 8},
        //     { date: new Date(2019,3,7).toLocaleDateString(), name: 'Viola', address: 'Sideway 1633', quantity: 6}
        //   ], (err,data)=>{
        //       console.log(data);
        //   });

        // col.find().toArray((err, data) => {
        //     console.log(data)
        // })

        // col.findOne({},(err, data)=>{
        //     console.log(data)
        // })

        // col.updateOne({"quantity":5},{$set:{"name":"Prateek Jain"}}).then((data)=>{
        //     console.log(data)
        // })

        // col.updateMany({"quantity":3},{$set:{name:"Pk"}}).then((data)=>{
        //     console.log(data)
        // })

        // col.deleteOne({quantity:3},(err, data)=>{
        //     console.log(data)
        // })

        // col.deleteMany({quantity:3},(err, data)=>{
        //     console.log(data)
        // })

        // col.findOneAndUpdate({quantity:5},{$set:{name:"Pj"}},(err, data)=>{
        //     console.log(data)
        // })

        // col.find().limit(2).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({"name":{$eq:'Pk'}}).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({"quantity":{$gte:9}}).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({"quantity":{$lte:9}}).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({"quantity":{$ne:9}}).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({"quantity":{$in:[1,2,5,9]}}).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({"quantity":{$nin:[1,2,5,6,7,9]}}).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({
        //     $and: [
        //             {
        //                 "quantity":{
        //                     $nin:[1,2,5,6,9]
        //                 }
        //             },
        //             {
        //                 name:"Pk"
        //             } 
        //         ]
        //     }).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({
        //     $nor:{
        //         $and: [
        //                 {
        //                     "quantity":{
        //                         $nin:[1,2,5,6,9]
        //                     }
        //                 },
        //                 {
        //                     name:"Pk"
        //                 } 
        //             ]
        //         }
        //     }).toArray((err,data)=>{
        //     console.log(data)
        // })

        // col.find({
        //     "quantity": {
        //         $not: { $lt: 8 }
        //     }
        // }).toArray((err, data) => {
        //     console.log(data)
        // })

        // col.find({
        //     quantity: {
        //         $mod: [3, 1] //divided by 3 gives remainder 1
        //     }
        // }).toArray((err, data) => {
        //     console.log(data)
        // })

        // col.find({
        //     name:{
        //          $regex: 'h'
        //         }
        //  }).toArray((err,data)=>{
        //      console.log(data)
        //  })

        // col.find({
        //     $where: function () { var value = this.name == 'Pk'; return value; }
        // }).toArray((err, data) => {
        //     console.log(data)
        // })

        // col.find({
        //     name: {
        //         $regex: 'h'
        //     },
        //     $comment: "give all name that contain h char"
        // }).toArray((err, data) => {
        //     console.log(data)
        // })

    })
})