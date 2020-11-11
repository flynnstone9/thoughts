import axios from 'axios'
const baseUrl = '/api/blogs'

let token = null

const updateToken = (newToken) => {
    token = `bearer ${newToken}`
}

const getAll = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

const create = async (blogpost) => {
    const config = { headers: { Authorization: token } }

    const response = await axios.post(baseUrl, blogpost, config)
    return response.data
}

const like = async (blogpost) => {
    const response = await axios.put(`${baseUrl}/like/${blogpost.id}`, blogpost)
    return response.data
}

const comment = async (blogid, comment) => {
    const newComment = {
        comment: comment,
    }
    const response = await axios.put(`${baseUrl}/comment/${blogid}`, newComment)
    return response.data
}

const deleteBlog = async (id) => {
    const config = { headers: { Authorization: token } }
    await axios.delete(`${baseUrl}/${id}`, config)
}

export default { getAll, create, like, comment, deleteBlog, updateToken }
