import blogService from '../services/blogs'

const userReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USER':
            return action.data
        case 'LOGOUT_USER':
            return null
        default:
            return state
    }
}

export const setCurrentUser = (user) => {
    return async (dispatch) => {
        dispatch({
            type: 'SET_USER',
            data: user,
        })
        blogService.updateToken(user.token)
    }
}

export const removeCurrentUser = () => {
    return async (dispatch) => {
        dispatch({
            type: 'LOGOUT_USER',
        })
    }
}

export default userReducer
