import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { setAllUsers } from '../reducers/allUsersReducer'
import { useRouteMatch, Link } from 'react-router-dom'

import '../styles/users.scss'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'

const User = () => {
    const dispatch = useDispatch()
    const { allUsers } = useSelector((state) => state)

    useEffect(() => {
        dispatch(setAllUsers())
    }, [dispatch])

    const match = useRouteMatch('/users/:id')
    const userID = match ? match.params.id : null

    const user = allUsers ? allUsers.find((user) => user.id === userID) : null

    const userInformation = () => {
        if (user) {
            return (
                <div className="users">
                    <div>
                        <div className="users__user__usertitle">viewing user:</div>

                        <div className="users__user__currentUserHeader">
                            <AccountCircleIcon className="user__text--orange" />
                            <div className="users__user__username user__text--orange">{user.username}</div>
                        </div>
                    </div>
                    <ul className="users__informationContainer">
                        <div className="users__user__usertitle">Thoughts Submitted:</div>
                        {user.blogs.map((blog) => {
                            return (
                                <Link to={`/thoughts/${blog.id}`} className="users__link" key={blog.id}>
                                    <li className="users__user">
                                        <div className="user__text--orange">{blog.title}</div>
                                        <div className="users__user__likes">
                                            <FavoriteBorderIcon className="user__text--orange" />
                                            <div className="users__user__likesnumber user__text--orange">
                                                {blog.likes}
                                            </div>
                                        </div>
                                    </li>
                                </Link>
                            )
                        })}
                    </ul>
                </div>
            )
        }
    }

    return <div>{userID ? userInformation() : null}</div>
}

export default User
