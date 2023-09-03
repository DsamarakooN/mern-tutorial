const asyncHandler = require('express-async-handler') // to handle async errors 
// befor use need to install express-async-handler

const Goal = require('../model/goalModel')
const User = require('../model/userModel')


// @desc Get all goals
// @route GET /api/goals
// @access private
// const getGoals =(req, res) => {
//     res.status(200).json({message: 'Get goals'})
// }

const getGoals = asyncHandler( async (req, res) => {

    const goals = await Goal.find( {user: req.user.id})
    //res.status(200).json({message: 'Get goals'})
    res.status(200).json(goals)
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

    const goal = await Goal.create({
        text: req.body.text,
        user: req.user.id
    })

    //res.status(200).json({message: 'Set goal'})
    res.status(200).json(goal)
})

// @desc Update goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = asyncHandler( async (req, res) => {

    // to get data which need to update
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }

    //check for user
    if(!req.user) {
        res.status(400)
        throw new Error('User not found')
    }

    // check if user is the owner of the goal
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('You are not authorized to update this goal')
    }


    const updatedGoal = await Goal.findByIdAndUpdate(req.params.id, req.
        body, {
            new: true,
        })

    
    res.status(200).json(updatedGoal)
})

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access private
const deleteGoals = asyncHandler( async (req, res) => {

    // to get data which need to delete
    const goal = await Goal.findById(req.params.id)

    if(!goal) {
        res.status(400)
        throw new Error('Goal not found')
    }


    //check for user
    if(!req.user) {
        res.status(400)
        throw new Error('User not found')
    }

    // check if user is the owner of the goal
    if(goal.user.toString() !== req.user.id) {
        res.status(401)
        throw new Error('You are not authorized to delete this goal')
    }

    //await goal.remove()
    await goal.deleteOne()

    res.status(200).json({ id: req.params.id })
})

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoals
}

