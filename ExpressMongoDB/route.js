var express=require('express')
var url = require('url')
const scheme = require('./Controler/validate')
const fs = require('./Services/fs')

var route = express.Router()

route.use(function timeLog (req, res, next) {
    console.log('Time: ', Date.now())
    next()
  })

function CheckPath(req, res) {
    return url.parse(req.url, true)
}

route.get('/', (req, res) => {
    console.log(req)
    res.send('Home')
})

route.get('/Read', (req, res) => {
    Path = CheckPath(req, res)
    // console.log(Path.query.eid)
    res.writeHead(200, { contentType: 'text/html' })
    eid = Number(Path.query.eid)
    data = fs.readUsers(eid)
    res.end(JSON.stringify(data))
})

route.get('/Reads', (req, res) => {
    Path = CheckPath(req, res)

    res.writeHead(200, { contentType: 'text' })
    data = fs.listUser()
    res.end(JSON.stringify(data))
})

route.get('/Remove', (req, res) => {
    Path = CheckPath(req, res)

    res.writeHead(200, { contentType: 'text' })
    eid = Number(Path.query.eid)
    data = fs.RemoveUser(eid)
    res.end(JSON.stringify(data))
})

route.get('/Update', (req, res) => {
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

route.get('/Add', (req, res) => {
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

module.exports=route