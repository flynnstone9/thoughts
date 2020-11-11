const User = require('../models/users')

const users = [
    {
        username: 'testUser',
        name: 'test 1',
        password: 'idkman',
    },
    {
        username: 'testUser2',
        name: 'test 2',
        password: 'turtle',
    },
    {
        username: 'testUser3',
        name: 'test 3',
        password: 'spacecamep',
    },
]

const newUserGood = {
    username: 'fallguy',
    name: 'fail man',
    password: 'idkman',
}

const badUserMissingUN = {
    name: 'sad boy',
    password: 'yunglean',
}

const badUserShortPw = {
    username: 'fallguy2',
    name: 'noboy gy',
    password: '123',
}

const usersInDb = async () => {
    const users = await User.find({})
    return users.map((user) => user.toJSON())
}

module.exports = {
    users,
    newUserGood,
    badUserMissingUN,
    badUserShortPw,
    usersInDb,
}
