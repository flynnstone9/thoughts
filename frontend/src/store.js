import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import notificationReducer from './reducers/notificationReducer'
import blogReducer from './reducers/blogReducer'
import userReducer from './reducers/userReducer'
import allUsersReducer from './reducers/allUsersReducer'

const reducers = combineReducers({
    notifications: notificationReducer,
    blogs: blogReducer,
    user: userReducer,
    allUsers: allUsersReducer,
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
