const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false)

// const commentsSchema = new Schema({ comment: String })

const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    thought: {
        type: String,
        require: true,
    },
    url: String,
    likes: Number,
    comments: [
        {
            type: String,
        },
    ],
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

blogSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    },
})

const Blog = mongoose.model('Blog', blogSchema)

module.exports = Blog
