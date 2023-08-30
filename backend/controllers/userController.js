// @desc register new user
// @route POST /api/users
// @access public
const registerUser = (req, res) => {
    res.json({ message: 'Register User'})
}

// @desc Authenticate a user
// @route POST /api/users/login
// @access public
const loginUser = (req, res) => {
    res.json({ message: 'Login User'})
}

// @desc get user profile
// @route POST /api/users/profile
// @access public
const getUserProfile = (req, res) => {
    res.json({ message: 'User Profile'})
}

module.exports = {
    registerUser,
    loginUser,
    getUserProfile
}