const express = require('express');
const router = express.Router();
const {registerUser, getUserProfile , loginUser} = require('../controllers/userController');

router.post('/' , registerUser);
router.post('/login' , loginUser);
router.get('/profile' , getUserProfile);

module.exports = router;