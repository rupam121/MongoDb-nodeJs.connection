const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age: Number,
    mobile: {
        type: Number,
        default: 123456789
    }
},
    {
        versionKey: false
    })
const UserModel = mongoose.model('UserModel', UserSchema)
module.exports = UserModel 