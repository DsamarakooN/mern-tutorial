import axios from 'axios';

const API_URL = '/api/users/';

//register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;

}

//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login', userData)

    if (response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }

    return response.data;

}

// logout user
const logout = () => {
    try {
      localStorage.removeItem('user');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  }

const authService = {
    register,
    logout,
    login
}

export default authService;