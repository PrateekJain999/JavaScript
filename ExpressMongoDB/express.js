var express = require('express')
const url = require('url')
const fs = require('./Services/fs')
const joi = require('@hapi/joi')
const scheme = require('./Controler/validate')
const route = require('./route')
// const {MongoClient, connect} = require('mongodb');
// const mongoose = require('mongoose');
// const { Router } = require('express')


//\Users\'Prateek Jain'\mongodb\bin\mongod.exe --dbpath=\Users\'Prateek Jain'\mongodb-data

// mongoose.connect('mongodb://localhost:27017/ExpressDB')

// mongoose.connection.once('open',()=>{
//     db.collection('Data').insertOne()
// }).on('error',()=>{
//     console.log('error')
// })

var app = express()

app.use('/',route)

app.listen(8081, () => {
    console.log('Server Created')
})