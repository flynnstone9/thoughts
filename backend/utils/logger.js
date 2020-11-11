const error = (...params) => {
    console.error(...params)
}

const log = (...params) => {
    console.log(...params)
}

module.exports = {
    error,
    log,
}
