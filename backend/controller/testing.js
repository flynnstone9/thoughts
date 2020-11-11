const router = require('express').Router()
const Blogs = require('../models/blogs')
const Users = require('../models/users')

router.get('/reset', () => {
    console.log('testing route working')
})

router.post('/reset', async (req, res) => {
    await Blogs.deleteMany({})
    await Users.deleteMany({})

    res.status(204).end()
})

module.exports = router
