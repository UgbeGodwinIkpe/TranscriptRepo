import axios from 'axios'

const API_URL = 'https://transcriptdigita-api.onrender.com/api/v1/alumnus/'

const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

const verify = async (userData) => {
    const response = await axios.patch(`${API_URL}${userData.id}/verify`, userData)

    if(response.data) {
        alert('verified')
    }

    return response.data
}

const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    verify,
    logout
}

export default authService;