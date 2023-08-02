import axios from 'axios'

const API_URL = 'https://transcriptdigita-api.onrender.com/api/v1/alumnus/'

// register service
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if(response.data) {
        console.log(response.data)
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// login service
const login = async (userData) => {
    const response = await axios.post(`${API_URL}login`, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// account verfification service
const verify = async (userData) => {
    const response = await axios.patch(`${API_URL}${userData.id}/verify`, userData)

    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

// reset password service
const resetPassword = async (userData) => {
    const response = await axios.post(`${API_URL}reset-password`, userData)

    if(response.data) {
        console.log('reset link sent to email')
    }

    return response.data
}

// change user password service
const changePassword = async (userData) => {
    const response = await axios.post(`${API_URL}reset-password/${userData.token}`)

    if(response.data) {
        console.log(response.data)
    }

    return response.data
}

// logout service
const logout = async () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    verify,
    resetPassword,
    changePassword,
    logout
}

export default authService;