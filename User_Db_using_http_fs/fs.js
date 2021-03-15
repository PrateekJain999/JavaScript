const fs = require('fs')

const addUser = (eid, email, name, salary, company, position) => {
    const User = loadUser()
    const duplicateUser = User.find((a)=>{
        return (a.eid===eid || a.email===email)
    })

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
        return 'New user added!';
    } else {
        return 'please enter unique eid or email';
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
    var data;
    if(User.length>userToKeep.length){
        data='User Removed'
    }else{
        data= 'No User Found'
    }
    saveUser(userToKeep)
    return data;
}

const listUser = ()=>{
    const User = loadUser()
    return User;
}

const readUsers = (eid) => {
    const Users = loadUser()
    const User = Users.find((User)=>User.eid===eid)

    if(User){
	    return User;
    }else{
        return 'User not found'
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
        return 'User Updated'
    }else{
        return 'User not found'
    }
}

module.exports = {
    addUser: addUser,
    RemoveUser: RemoveUser,
    listUser: listUser,
    readUsers: readUsers,
    updateUser: updateUser
}