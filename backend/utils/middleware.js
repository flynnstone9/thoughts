const logger = require('./logger')

const requestLogger = (request, response, next) => {
    logger.log('Method:', request.method)
    logger.log('Path:  ', request.path)
    logger.log('Body:  ', request.body)
    logger.log('---')
    next()
}

const tokenExtractor = (request, response, next) => {
    const auth = request.header('Authorization')

    if (auth && auth.toLowerCase().startsWith('bearer ')) {
        request.token = auth.substring(7)
    }

    next()
}

const errorHandler = (error, request, response, next) => {
    logger.error(error.message)
    if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }

    next(error)
}

module.exports = {
    requestLogger,
    tokenExtractor,
    errorHandler,
}
