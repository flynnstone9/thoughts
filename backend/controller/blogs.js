const jwt = require('jsonwebtoken')
const blogRouter = require('express').Router()
const Blog = require('../models/blogs')
const User = require('../models/users')

blogRouter.get('/', async (request, response) => {
    let blogs = await Blog.find({}).populate('users', {
        username: 1,
        name: 1,
        pwHash: 1,
    })
    response.json(blogs)
})

blogRouter.post('/', async (request, response) => {
    const blogBody = request.body

    if (!blogBody.title || !blogBody.thought) {
        response.status(400).end()
    } else {
        const decodeToken = jwt.verify(request.token, process.env.SECRET)

        if (!request.token || !decodeToken.id) {
            return response.status(401).json({ error: 'token is missing or is invalid' })
        }

        const user = await User.findById(decodeToken.id)

        const blog = new Blog({
            title: blogBody.title,
            thought: blogBody.thought,
            url: blogBody.url,
            likes: blogBody.likes || 0,
            comments: [],
            users: user.id,
        })

        let savedBlog = await blog.save()
        user.blogs = user.blogs.concat(savedBlog._id)
        await user.save()

        let returnBlog = await Blog.find({ _id: savedBlog.id }).populate('users', {
            username: 1,
            name: 1,
            pwHash: 1,
        })

        response.status(201).json(returnBlog)
    }
})

blogRouter.delete('/:id', async (request, response) => {
    const decodeToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodeToken.id) {
        return response.status(401).json({ error: 'token is missing or is invalid' })
    }

    const user = await User.findById(decodeToken.id)
    const blogToBeDeleted = await Blog.findById(request.params.id)

    if (blogToBeDeleted.users.toString() === user.id.toString()) {
        await Blog.findByIdAndDelete(request.params.id)
        response.status(204).end()
    } else {
        return response.status(401).json({ error: 'user is not blog owner' })
    }
})

blogRouter.put('/like/:id', async (request, response) => {
    let body = await Blog.findById(request.params.id)

    let blog = {
        title: body.title,
        thought: body.thought,
        url: body.url,
        likes: body.likes + 1,
        comments: body.comments || [],
    }

    let updatedBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true }).populate('users', {
        username: 1,
        name: 1,
        pwHash: 1,
    })
    response.status(201).json(updatedBlog.toJSON())
})

blogRouter.put('/comment/:id', async (request, response) => {
    let body = await Blog.findById(request.params.id)

    body.comments.push(request.body.comment)
    await body.save()

    let returnBlog = await Blog.findById(request.params.id).populate('users', {
        username: 1,
        name: 1,
        pwHash: 1,
    })

    response.status(201).json(returnBlog.toJSON())
})

module.exports = blogRouter
