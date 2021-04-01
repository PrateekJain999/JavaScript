const mong = require('mongoose')
const val = require('validator')

mong.connect('mongodb://127.0.0.1:27017/db3', {
    useNewUrlParser: true,
    useCreateIndex:true
})

const User = mong.model('User', {
    name: {
        type: String,
        required : true,
        trim : true
    },
    age: {
        type: Number,
        default: 0,
        validate(value) {
            if(value < 0){
                throw new Error('Age Must Be A Positive Number')
            }
        }
    },
    email : {
        type: String,
        required: true,
        trim: true,
        lowercase: true,
        validate(value){
            if(!val.isEmail(value)){
                throw new Error('Invalid Email')
            }
        }
    }
})

const me = new User({
    name: 'prateek',
    email: 'jain22719@gmail.com'
})

me.save().then(() => {
    console.log(me)
}).catch((error) => {
    console.log(error)
})