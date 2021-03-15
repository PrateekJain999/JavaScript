const fs = require('fs')
const c = require('chalk')

const addUser = (eid, email, name, salary, company, position) => {
    const User = loadUser()
    const duplicateUser = User.find((a)=>{
        return (a.eid===eid || a.email===email)
    })
    //console.log(duplicateUser)

    if (!duplicateUser) {
        User.push({
            eid: eid,
            name: name,
            email, email,
            salary: salary,
            company: company,
            position: position
        })
        saveUser(User)
        console.log('New user added!')
    } else {
        console.log(c.red.inverse('please enter unique eid or email'))
    }
}

const saveUser = (User) => {
    const dataJSON = JSON.stringify(User)
    fs.writeFileSync('User.json', dataJSON)
}

const loadUser = () => {
    try {
        const dataBuffer = fs.readFileSync('User.json')
        const dataJSON = dataBuffer.toString()
	//console.log(dataJSON)
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const RemoveUser = (eid) =>{
    const User = loadUser()
    const userToKeep = User.filter((a)=>{
        return a.eid !== eid
    })
    if(User.length>userToKeep.length){
        console.log(c.green.inverse('User Removed'))
    }else{
        console.log(c.red.inverse('No User Found'))
    }
    saveUser(userToKeep)
}

const listUser = ()=>{
    const User = loadUser()
    console.table(User)

    // console.log(c.inverse('Users'))

    // User.forEach((User)=> {
	//     console.log(c.blue.inverse('//////////////////////'))
    //     console.log(User.eid)
	//     console.log(User.name)
    //     console.log(User.email)
    //     console.log(User.salary)
    //     console.log(User.company)
    //     console.log(User.position)
	//     console.log(c.blue.inverse('//////////////////////'))   
    // });
}

const readUsers = (eid) => {
    const Users = loadUser()
    const User = Users.find((User)=>User.eid===eid)

    if(User){
        console.log(c.blue.inverse('//////////////////////'))
        console.table(User)
        // console.log(c.inverse(User.eid))
        // console.log(User.name)
        // console.log(User.email)
        // console.log(User.salary)
        // console.log(User.company)
        // console.log(User.position)
	    console.log(c.blue.inverse('//////////////////////'))
    }else{
        console.log(c.red.inverse('User not found'))
    }
}

const updateUser = (eid, email, name, salary, company, position) => {
    const Users = loadUser()
    const User = Users.find((User)=>User.eid===eid)

    if(User){
        User.name=name,
        User.email=email,
        User.salary=salary,
        User.company=company,
        User.position=position
        saveUser(User)
        console.log('User Updated')
    }else{
        console.log(c.red.inverse('User not found'))
    }
}

module.exports = {
    addUser: addUser,
    RemoveUser: RemoveUser,
    listUser: listUser,
    readUsers: readUsers,
    updateUser: updateUser
}