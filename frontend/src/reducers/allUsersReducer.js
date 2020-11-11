import usersService from '../services/users'

const allUsersReducer = (state = null, action) => {
    switch (action.type) {
        case 'SET_USERS':
            return action.data
        default:
            return state
    }
}

export const setAllUsers = () => {
    return async (dispatch) => {
        const users = await usersService.getUsers()
        dispatch({
            type: 'SET_USERS',
            data: users,
        })
    }
}

export default allUsersReducer
