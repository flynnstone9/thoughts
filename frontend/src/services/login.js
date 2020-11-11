import axios from 'axios'
const baseUrl = '/api/login'

const loginUser = async (userCredentials) => {
    const response = await axios.post(baseUrl, userCredentials)
    return response.data
}

export default { loginUser }
