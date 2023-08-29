const express = require('express');
const router = express.Router();
const { 
    getGoals, 
    setGoal, 
    updateGoal, 
    deleteGoals 
} = require('../controllers/goalController');

// insted of using below callback function, we can use controller 

// router.get('/', (req, res) => {
//     res.status(200).json({message: 'Get goals'})
// })

// router.get('/', getGoals) (1)

// router.post('/', (req, res) => {
//     res.status(200).json({message: 'Set goals'})
// })

// router.post('/', setGoal) (2)

// we can set both (1) and (2) in one line as below

router.route('/').get(getGoals).post(setGoal)

// router.put('/:id', (req, res) => {
//     res.status(200).json({message: `Update goal ${req.params.id}`})
// })

// router.put('/:id', updateGoal) (3)

// router.delete('/:id', (req, res) => {
//     res.status(200).json({message: `Delete goal ${req.params.id}`})
// })

// router.delete('/:id', deleteGoals)

// we can set both (3) and (4) in one line as below
router.route('/:id').put(updateGoal).delete(deleteGoals)

module.exports = router;