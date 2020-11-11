const bcrypt = require('bcrypt')
const userRouter = require('express').Router()
const User = require('../models/users')

userRouter.get('/', async (request, response) => {
    let users = await User.find({}).populate('blogs', {
        title: 1,
        author: 1,
        likes: 1,
        url: 1,
    })
    response.json(users)
})

userRouter.post('/', async (request, response) => {
    let userBody = request.body
    let { username, password, name } = userBody

    if (!password || !username) {
        return response.status(401).json({ error: 'username and pw are required' })
    } else if (password.length <= 3 || username.length <= 3) {
        return response.status(401).json({ error: 'un and pw must be more than 3 chars' })
    }

    const pwHash = await bcrypt.hash(password, 10)

    const user = new User({
        username,
        name,
        pwHash,
    })

    const savedUser = await user.save()
    response.json(savedUser)
})

module.exports = userRouter
