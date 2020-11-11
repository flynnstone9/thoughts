const express = require('express')
const app = express()
const cors = require('cors')
require('express-async-errors')
const mongoose = require('mongoose')
const { MONGO_URI } = require('./utils/config')
const loginRouter = require('./controller/login')
const userRouter = require('./controller/users')
const blogRouter = require('./controller/blogs')
const middleware = require('./utils/middleware')

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

app.use(express.static('build'))
app.use(cors())
app.use(express.json())

if (process.env.NODE_ENV !== 'test') {
    app.use(middleware.requestLogger)
}

app.use(middleware.requestLogger)

app.use(middleware.tokenExtractor)
app.use('/api/login', loginRouter)
app.use('/api/blogs', blogRouter)
app.use('/api/users', userRouter)

if (process.env.NODE_ENV === 'test') {
    const testingRouter = require('./controller/testing')
    app.use('/api/testing/', testingRouter)
}

app.use(middleware.errorHandler)

module.exports = app
