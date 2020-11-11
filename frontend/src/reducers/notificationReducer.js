const notificationReducer = (state = null, action) => {
    // console.log(state, ' state in notification reducers')
    switch (action.type) {
        case 'SHOW_NOTIFICATION':
            return action.data
        case 'CLEAR_NOTIFICATION':
            return null
        default:
            return state
    }
}

export const setNotification = (function () {
    let timer
    return function (msg, isError, secondsToDisplayMsg) {
        return async function (dispatch) {
            clearTimeout(timer)
            dispatch(createNotification(msg, isError))
            timer = setTimeout(function () {
                dispatch(clearNotification())
            }, secondsToDisplayMsg * 1000)
        }
    }
})()

export const createNotification = (message, isError) => {
    return {
        type: 'SHOW_NOTIFICATION',
        data: {
            message,
            isError,
        },
    }
}

export const clearNotification = () => {
    return {
        type: 'CLEAR_NOTIFICATION',
    }
}

export default notificationReducer
