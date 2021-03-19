var express = require('express')
const url = require('url')
const fs = require('./Services/fs')
const joi = require('@hapi/joi')
const scheme = require('./Controler/validate')

var app = express()

function CheckPath(req, res) {
    return url.parse(req.url, true)
}

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/Read', (req, res) => {
    Path = CheckPath(req, res)
    // console.log(Path.query.eid)
    res.writeHead(200, { contentType: 'text/html' })
    eid = Number(Path.query.eid)
    data = fs.readUsers(eid)
    res.end(JSON.stringify(data))
})

app.get('/Reads', (req, res) => {
    Path = CheckPath(req, res)

    res.writeHead(200, { contentType: 'text' })
    data = fs.listUser()
    res.end(JSON.stringify(data))
})

app.get('/Remove', (req, res) => {
    Path = CheckPath(req, res)

    res.writeHead(200, { contentType: 'text' })
    eid = Number(Path.query.eid)
    data = fs.RemoveUser(eid)
    res.end(JSON.stringify(data))
})

app.get('/Update', (req, res) => {
    Path = CheckPath(req, res)
    // console.log("data : ",Path.query)
    res.writeHead(200, { contentType: 'text' })

    let { checkData, error } = scheme.validate(Path.query)

    if (error) {
        res.write("Please fill data according to the mention instruction"+`${error}`)
        res.end()
    }
    else {
        eid = Path.query.eid
        email = Path.query.email
        name = Path.query.name
        company = Path.query.company
        position = Path.query.position
        salary = Number(Path.query.salary)

        data = fs.updateUser(eid, email, name, salary, company, position)
        res.write(data)
        res.end()
    }
})

app.get('/Add', (req, res) => {
    Path = CheckPath(req, res)
    console.log(req.body)

    res.writeHead(201, { contentType: 'text' })

    let { checkData, error } = scheme.validate(Path.query)

    if (error) {
        res.write("Please fill data according to the mention instruction"+`${error}`)
        res.end()
    }
    else {
        eid = Path.query.eid
        email = Path.query.email
        name = Path.query.name
        company = Path.query.company
        position = Path.query.position
        salary = Number(Path.query.salary)

        data = fs.addUser(eid, email, name, salary, company, position)
        res.write(data)
        res.end()
    }
})

app.listen(8081, () => {
    console.log('Server Created')
})