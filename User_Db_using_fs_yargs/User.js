const fs = require('fs');
const yargs = require('yargs');
const c = require('chalk')
const User = require('./fsFunction')

yargs.command({
    command: 'add',
    describe: 'Add a new User',
    builder: {
        eid: {
            description: 'Uid',
            demandOption: true,
            type:Number
        },
        email: {
            description: 'mail',
            demandOption: true,
            type: String
        },
        name: {
            description: 'name',
            demandOption: true,
            type: String
        },
        salary: {
            description: 'salary',
            demandOption: true,
            type: Number
        },
        company: {
            description: 'company',
            demandOption: true,
            type: String
        },
        position: {
            description: 'position',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        User.addUser(argv.eid, argv.email, argv.name, argv.salary, argv.company, argv.position)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a User',
    builder: {
        eid: {
            description: 'Uid',
            demandOption: true,
            type:Number
        }
    },
    handler(argv) {
        User.RemoveUser(argv.eid)
    }
})

yargs.command({
    command: 'list',
    describe: 'List All user',
    handler() {
        User.listUser()
    }
})

yargs.command({
    command: 'read',
    describe: 'Read a User',
    builder: {
        eid: {
            description: 'Uid',
            demandOption: true,
            type:Number
        }
    },
    handler(argv) {
        User.readUsers(argv.eid)
    }
})

yargs.command({
    command: 'update',
    describe: 'Update a User',
    builder: {
        eid: {
            description: 'Uid',
            demandOption: true,
            type:Number
        },
	email: {
            description: 'mail',
            demandOption: true,
            type: String
        },
        name: {
            description: 'name',
            demandOption: true,
            type: String
        },
        salary: {
            description: 'salary',
            demandOption: true,
            type: Number
        },
        company: {
            description: 'company',
            demandOption: true,
            type: String
        },
        position: {
            description: 'position',
            demandOption: true,
            type: String
        }
    },
    handler(argv) {
        User.updateUser(argv.eid, argv.email, argv.name, argv.salary, argv.company, argv.position)
    }
})

yargs.parse()