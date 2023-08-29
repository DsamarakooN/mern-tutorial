const express = require('express');
const router = express.Router();
const { getGoals } = require('../controllers/goalController');

// insted of using below callback function, we can use controller 

// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })

router.get('/', getGoals)

router.post('/', (req, res) => {
    res.status(200).json({message: 'Set goals'})
})

router.put('/:id', (req, res) => {
    res.status(200).json({message: `Update goal ${req.params.id}`})
})

router.delete('/:id', (req, res) => {
    res.status(200).json({message: `Delete goal ${req.params.id}`})
})

module.exports = router;