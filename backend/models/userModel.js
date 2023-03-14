const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name :{
        type: String,
        requires:[true, 'please add a name']
    },
    email :{
        type: String,
        requires:[true, 'please add a email'],
        unique: true
    },
    password :{
        type: String,
        requires:[true, 'please add a password']
    },
    
},
{
    timestamp:true,
}
)

module.exports = mongoose.model('User', userSchema)