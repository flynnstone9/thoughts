import blogService from '../services/blogs'

const blogReducer = (state = [], action) => {
    // console.log(state, ' state in notification reducers')
    switch (action.type) {
        case 'CREATE_BLOG':
            return state.concat(action.data)
        case 'UPDATE_BLOG':
            return state.map((blog) => (blog.id === action.data.id ? action.data : blog))
        case 'DELETE_BLOG':
            return state.filter((blog) => blog.id !== action.data)
        case 'INIT_BLOGS':
            return action.data
        default:
            return state
    }
}

export const initBlogs = () => {
    return async (dispatch) => {
        const content = await blogService.getAll()
        dispatch({
            type: 'INIT_BLOGS',
            data: content,
        })
    }
}

export const createNewBlog = (newBlog) => {
    return async (dispatch) => {
        let blog = await blogService.create(newBlog)
        dispatch({
            type: 'CREATE_BLOG',
            data: blog,
        })
    }
}

export const likeBlog = (blogToLike) => {
    return async (dispatch) => {
        const updatedBlog = await blogService.like(blogToLike)
        dispatch({
            type: 'UPDATE_BLOG',
            data: updatedBlog,
        })
    }
}

export const addUserComment = (blogToLike, comment) => {
    return async (dispatch) => {
        const updatedBlog = await blogService.comment(blogToLike, comment)
        dispatch({
            type: 'UPDATE_BLOG',
            data: updatedBlog,
        })
    }
}

export const deleteUsersBlog = (id) => {
    // if (window.confirm('Are you sure you want to delete this blog?')) {
    return async (dispatch) => {
        console.log(id, 'id to delete + running dispatch delete fn')
        await blogService.deleteBlog(id)
        dispatch({
            type: 'DELETE_BLOG',
            data: id,
        })
    }
    // }
}

export default blogReducer
