const http = require('http')
const url = require('url')
const fs = require('./fs')

var server = http.createServer((req, res) => {
    var Path = url.parse(req.url, true)
    var page = Path.pathname

    if (page === '/Read') {

        res.writeHead(200, { contentType: 'text/html' })
        eid = Number(Path.query.eid)
        data = fs.readUsers(eid)
        res.end(JSON.stringify(data))

    } else if (page === '/Reads') {

        res.writeHead(200, { contentType: 'text' })
        data = fs.listUser()
        res.end(JSON.stringify(data))

    } else if (page === '/Remove') {

        res.writeHead(200, { contentType: 'text' })
        eid = Number(Path.query.eid)
        data = fs.RemoveUser(eid)
        res.end(JSON.stringify(data))

    } else if (page === '/Update') {

        res.writeHead(200, { contentType: 'text' })

        eid = Number(Path.query.eid)
        email = Path.query.email
        name = Path.query.name
        company = Path.query.company
        position = Path.query.position
        salary = Number(Path.query.salary)

        data = fs.updateUser(eid, email, name, salary, company, position)
        res.write(data)
        res.end()

    } else if (page === '/Add') {

        res.writeHead(201, { contentType: 'text' })

        eid = Number(Path.query.eid)
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

server.listen(8081, () => {
    console.log('Server is running on port 8081.')
})