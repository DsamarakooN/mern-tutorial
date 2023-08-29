const asyncHandler = require('express-async-handler') // to handle async errors 
// befor use need to install express-async-handler


// @desc Get all goals
// @route GET /api/goals
// @access private
// const getGoals =(req, res) => {
//     res.status(200).json({message: 'Get goals'})
// }

const getGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: 'Get goals'})
})

// @desc set goal
// @route POST /api/goals
// @access private
const setGoal = asyncHandler( async (req, res) => {

    // to get data from body
    //console.log(req.body);
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please enter a text field')
    }

    res.status(200).json({message: 'Set goal'})
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Updated goal ${req.params.id}`})
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access private
const deleteGoals = asyncHandler( async (req, res) => {
    res.status(200).json({message: `Deleted goal ${req.params.id}`})
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoals
}

