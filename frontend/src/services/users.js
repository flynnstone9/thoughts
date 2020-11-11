import axios from 'axios'
const baseUrl = '/api/users'

const signUpUser = async (userCredentials) => {
    const response = await axios.post(baseUrl, userCredentials)
    return response.data
}

const getUsers = async () => {
    const response = await axios.get(baseUrl)
    return response.data
}

export default { signUpUser, getUsers }
