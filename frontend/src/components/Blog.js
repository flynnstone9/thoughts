import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { likeBlog } from '../reducers/blogReducer'
import { setNotification } from '../reducers/notificationReducer'
// import { Card } from '@material-ui/core'
// import FavoriteIcon from '@material-ui/icons/Favorite'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
// import PropTypes from 'prop-types'

const Blog = ({ blog }) => {
    const dispatch = useDispatch()

    const likePost = async () => {
        try {
            dispatch(likeBlog(blog))
            dispatch(setNotification('LIKED', false, 4))
        } catch (err) {
            console.log(err, 'blog like err')
        }
    }

    return (
        <div className="thought">
            <Link className="thouhgt__link" to={`/thoughts/${blog.id}`} style={{ textDecoration: 'none' }}>
                <div className="thouhgt__maincontent">
                    <div className="thouhgt__title">{blog.title}</div>
                    <div className="thouhgt__user">/user/{blog.users.username}</div>
                </div>
            </Link>
            <div className="thouhgt__action" onClick={likePost}>
                <FavoriteBorderIcon className="thouhgt__likeicon" />
                <span className="thouhgt__likenumber">{blog.likes}</span>
                {/* <div>10/29/2929</div> */}
            </div>
        </div>
    )
}

// Blog.propTypes = {
//     blog: PropTypes.object,
//     deleteBlog: PropTypes.func,
//     user: PropTypes.object,
// }

export default Blog
