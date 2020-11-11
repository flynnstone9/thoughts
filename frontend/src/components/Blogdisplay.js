import React, { useState } from 'react'
import { useRouteMatch, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { likeBlog, addUserComment, deleteUsersBlog } from '../reducers/blogReducer'

import { setNotification } from '../reducers/notificationReducer'

import { Link } from 'react-router-dom'

import { TextField, Button } from '@material-ui/core'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import DeleteIcon from '@material-ui/icons/Delete'
import '../styles/thought__display.scss'

const Blogdisplay = () => {
    const dispatch = useDispatch()
    const { blogs, user } = useSelector((state) => state)

    const [newComment, setNewComment] = useState('')

    const history = useHistory()
    const match = useRouteMatch('/thoughts/:id')
    const blogID = match ? match.params.id : null
    const signedInUserName = user ? user.name : null

    const blog = blogs ? blogs.find((blog) => blog.id === blogID) : null

    const likePost = async () => {
        try {
            dispatch(likeBlog(blog))
        } catch (err) {
            console.log(err, 'blog like err')
        }
    }

    const deleteBlog = async (id) => {
        if (window.confirm('Are you sure you want to delete this thought?')) {
            try {
                console.log('confirmed in app.js')
                dispatch(deleteUsersBlog(id))
                history.push('/')
            } catch (err) {
                dispatch(setNotification('Unauthorized to Delete This Thought', true, 4))
            }
        }
    }

    const addComment = async (e) => {
        e.preventDefault()

        if (newComment !== null || undefined || '') {
            try {
                dispatch(addUserComment(blogID, newComment))
                dispatch(setNotification('Comment Added', false, 4))
                setNewComment('')
            } catch {
                dispatch(setNotification('Comment Failed', true, 4))
            }
        } else {
            dispatch(setNotification('comment empty', true, 4))
        }
    }

    const handleCommentChange = (e) => {
        e.preventDefault()
        setNewComment(e.target.value)
    }

    return (
        <>
            {blog ? (
                <>
                    <div className="thought">
                        <div className="thought__display">
                            <div className="maincontent">
                                <div>
                                    <h2 className="title">{blog.title}</h2>
                                    <div>
                                        <Link className="user" to={`/users/${blog.users.id}`}>
                                            /users/{blog.users.username}
                                        </Link>
                                    </div>
                                </div>
                                <div className="content">{blog.thought}</div>
                            </div>

                            <div className="actions">
                                <div className="likeaction" onClick={likePost}>
                                    <FavoriteBorderIcon className="likeicon" />
                                    <div className="likenumber">{blog.likes}</div>
                                </div>
                                {blog.users.name === signedInUserName ? (
                                    <div className="deleteaction" onClick={() => deleteBlog(blog.id)}>
                                        <DeleteIcon className="deleteicon" />
                                        <div className="deletetext">DELETE</div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>

                    <div className="comments">
                        <form className="form">
                            {/* <div className="form__title">comments:</div> */}
                            <TextField
                                id="comment"
                                className="form__input"
                                placeholder="comment"
                                type="text"
                                name="comment"
                                // ref={comment}
                                value={newComment}
                                onChange={handleCommentChange}
                                multiline
                                rows={3}
                                variant="filled"
                                color="secondary"
                            />
                            <Button className="form__btn" type="submit" onClick={addComment}>
                                Add Comment
                            </Button>
                        </form>

                        {blog.comments[0] ? (
                            <ul className="commentsection">
                                <div className="commentsection__title">comments:</div>
                                {blog.comments.map((c, i) => {
                                    return (
                                        <li className="commentsection__comment" key={i}>
                                            {c}
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : (
                            <div className="commentsection">no comments yet...</div>
                        )}
                    </div>
                </>
            ) : null}
        </>
    )
}

export default Blogdisplay
