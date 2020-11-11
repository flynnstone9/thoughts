const app = require('../app')
const mongoose = require('mongoose')
const User = require('../models/users')
const supertest = require('supertest')
const api = supertest(app)
const user_helper = require('../utils/user_helper')
const bcrypt = require('bcrypt')

jest.setTimeout(3 * 60 * 1000)

beforeAll(async () => {
    await User.deleteMany({})

    let updatedUsers = user_helper.users.map(async (u) => {
        const pwHash = await bcrypt.hash(u.password, 10)
        return {
            username: u.username,
            name: u.name,
            pwHash,
        }
    })

    let startingUsers = await Promise.all(updatedUsers)

    let users = await startingUsers.map((u) => new User(u))
    let promiseUsers = await users.map(async (user) => {
        await user.save()
    })
    await Promise.all(promiseUsers)
    let u = await user_helper.usersInDb()
})

describe('Adding Users', () => {
    test('add valid user successfully', async () => {
        let startingUsers = await user_helper.usersInDb()
        // console.log('TEST1')
        await api
            .post('/api/users')
            .send(user_helper.newUserGood)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        let endingUsers = await user_helper.usersInDb()

        expect(endingUsers).toHaveLength(startingUsers.length + 1)
    })

    test('handle response when adding a user missing username', async () => {
        let startingUsers = await user_helper.usersInDb()
        // console.log('TEST2')

        await api
            .post('/api/users')
            .send(user_helper.badUserMissingUN)
            .expect(401)
            .expect('Content-Type', /application\/json/)

        let endingUsers = await user_helper.usersInDb()

        expect(endingUsers).toHaveLength(startingUsers.length)
    })

    test('handle response when adding a user with a pw under 3 chars', async () => {
        let startingUsers = await user_helper.usersInDb()
        // console.log('TEST3')

        await api
            .post('/api/users')
            .send(user_helper.badUserShortPw)
            .expect(401)
            .expect('Content-Type', /application\/json/)

        let endingUsers = await user_helper.usersInDb()

        expect(endingUsers).toHaveLength(startingUsers.length)
    })
})

afterAll(() => {
    mongoose.connection.close()
})
