const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

mongoose.set('useFindAndModify', false)

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        minlength: 5,
        required: true,
    },
    name: String,
    pwHash: {
        type: String,
        required: true,
    },
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog',
        },
    ],
})

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
        //don't show pw
        delete returnedObject.passwordHash
    },
})

const User = mongoose.model('User', userSchema)

module.exports = User
