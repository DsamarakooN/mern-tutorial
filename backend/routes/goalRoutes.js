const express = require('express');
const router = express.Router();
const { getGoals, setGoal , updateGoal, deleteGoals } = require('../controllers/goalController');

// insted of using below callback function, we can use controller 

// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })

router.get('/', getGoals)

// router.post('/', (req, res) => {
//     res.status(200).json({message: 'Set goals'})
// })

router.post('/', setGoal)

// router.put('/:id', (req, res) => {
//     res.status(200).json({message: `Update goal ${req.params.id}`})
// })

router.put('/:id', updateGoal)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({message: `Delete goal ${req.params.id}`})
// })

router.delete('/:id', deleteGoals)

module.exports = router;