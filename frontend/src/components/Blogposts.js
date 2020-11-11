import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Switch, Route, Redirect } from 'react-router-dom'

import Blog from './Blog'
import Blogform from './Blogform'
// import Togglable from './Togglable'
import Users from './Users'
import User from './User'
import Blogdisplay from './Blogdisplay'
import Nav from './Nav'

import { createNewBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'

import '../styles/thoughts.scss'
import { Tooltip } from '@material-ui/core'

const Blogposts = () => {
    const dispatch = useDispatch()
    const state = useSelector((state) => state)

    // const blogFromRef = useRef()

    const createBlog = async (newBlog) => {
        try {
            dispatch(createNewBlog(newBlog))
            // blogFromRef.current.flipHidden()
            dispatch(setNotification('BLOG POST ADDED', false, 10))
        } catch (exception) {
            dispatch(setNotification('Err Creating Blog Post', true, 5))
        }
    }

    return (
        <>
            <Nav />
            <Switch>
                <Route path="/thoughts/:id">
                    <div className="thought__display__container">
                        <Blogdisplay />
                    </div>
                </Route>
                <Route path="/users/:id">
                    <div className="main__container">
                        <User />
                    </div>
                </Route>
                <Route path="/users">
                    <div className="thought__display__container">
                        <Users />
                    </div>
                </Route>
                <Route path="/thoughts">
                    <div className="main__container">
                        <div className="thoughts__container">
                            {state.blogs
                                .sort((a, b) => b.likes - a.likes)
                                .map((blog) => (
                                    <Blog key={blog.id} blog={blog} />
                                ))}
                        </div>
                        {state.user ? (
                            <Blogform createBlog={createBlog} />
                        ) : (
                            <Tooltip title="Sign in to add thoughts" placement="top-start" arrow>
                                <div>
                                    <Blogform createBlog={createBlog} />
                                </div>
                            </Tooltip>
                        )}
                    </div>
                </Route>
                <Redirect exact from="/" to="/thoughts" />
            </Switch>
        </>
    )
}

export default Blogposts
