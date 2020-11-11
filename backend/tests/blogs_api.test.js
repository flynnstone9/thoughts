const app = require('../app')
const mongoose = require('mongoose')
const User = require('../models/users')
const Blog = require('../models/blogs')
const supertest = require('supertest')
const api = supertest(app)
const blog_helper = require('../utils/blog_helper')

jest.setTimeout(3 * 60 * 1000)

beforeAll(async () => {
    await Blog.deleteMany({})
    let blogPost = await blog_helper.blogs.map((b) => new Blog(b))
    let promiseBlogs = await blogPost.map(async (blog) => {
        await blog.save()
    })
    await Promise.all(promiseBlogs)
})

describe('Blog Api Testing', () => {
    test('GET returns the right amount of blog post', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-type', /application\/json/)
    })

    test('first param of blog post is id', async () => {
        const blogs = await blog_helper.blogsInDb()
        const propertyName = Object.keys(blogs[0])

        expect(propertyName[propertyName.length - 1] === 'id').toBeDefined()
    })

    test('blog post is added', async () => {
        const testUserCredentials = {
            username: 'testUser',
            password: 'idkman',
        }

        const authToken = await api.post('/api/login').send(testUserCredentials)

        await api
            .post('/api/blogs')
            .set('Authorization', `Bearer ${authToken.body.token}`)
            .send(blog_helper.newBlog)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        let blogsAtEnd = await blog_helper.blogsInDb()

        expect(blogsAtEnd).toHaveLength(blog_helper.blogs.length + 1)
    })

    test('checks likes property is missing defaults to 0', async () => {
        const testUserCredentials = {
            username: 'testUser',
            password: 'idkman',
        }

        const authToken = await api.post('/api/login').send(testUserCredentials)

        let noLikesBlogPost = { title: 'idk', author: 'cmf', url: 'butt.com' }
        await api
            .post('/api/blogs')
            .set('Authorization', `Bearer ${authToken.body.token}`)
            .send(noLikesBlogPost)
            .expect(201)
            .expect('Content-Type', /application\/json/)

        let blogs = await blog_helper.blogsInDb()

        expect(blogs[blogs.length - 1].likes).toEqual(0)
    })

    test('checks for 400 on post req with missing title and author', async () => {
        let noAuthornoTitleBlogPost = { url: 'test.com', likes: 4040 }
        await api.post('/api/blogs').send(noAuthornoTitleBlogPost).expect(400)
    })
})

describe('Blog Api Testing Delete and Put Request', () => {
    test('deleting a specific blog post', async () => {
        let startingBlogs = await blog_helper.blogsInDb()
        let blogToDelete = startingBlogs[startingBlogs.length - 1]

        const testUserCredentials = {
            username: 'testUser',
            password: 'idkman',
        }

        const authToken = await api.post('/api/login').send(testUserCredentials)

        await api
            .delete(`/api/blogs/${blogToDelete.id}`)
            .set('Authorization', `Bearer ${authToken.body.token}`)
            .expect(204)

        let endingBlogs = await blog_helper.blogsInDb()

        expect(endingBlogs).toHaveLength(startingBlogs.length - 1)

        let endingBlogTitles = endingBlogs.map((b) => b.title)

        expect(endingBlogTitles).not.toContain(startingBlogs[startingBlogs.length - 1].title)
    })

    test('updating a specific blog post likes', async () => {
        let startingBlogs = await blog_helper.blogsInDb()
        let blogToUpdate = startingBlogs[0]

        await api.put(`/api/blogs/${blogToUpdate.id}`).expect(201)

        let endingBlogs = await blog_helper.blogsInDb()
        let blogUpdated = endingBlogs[0]

        expect(blogUpdated.likes).toEqual(blogToUpdate.likes + 1)
    })
})

afterAll(() => mongoose.connection.close())
