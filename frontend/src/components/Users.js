import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { setAllUsers } from '../reducers/allUsersReducer'

import '../styles/users.scss'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector((state) => state.allUsers)

    useEffect(() => {
        dispatch(setAllUsers())
    }, [dispatch])

    // console.log(users, 'users in the users component')

    return (
        <div className="users">
            <div className="users__header">
                <div className="users__header__title">
                    <AccountCircleIcon className="users__icon" />
                    <div className="users__title">Users</div>
                </div>
                <div className="users__header__info"># of Thoughts</div>
            </div>

            <div className="users__informationContainer">
                {users &&
                    users.map((user) => {
                        return (
                            <Link className="users__link" to={`/users/${user.id}`} key={user.id}>
                                <div className="users__user">
                                    <div>{user.username}</div>
                                    <div className="users__bloglegnth">{user.blogs.length}</div>
                                </div>
                            </Link>
                        )
                    })}
            </div>
        </div>
    )
}

export default Users
