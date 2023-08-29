// @desc Get all goals
// @route GET /api/goals
// @access private
const getGoals = (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

// @desc set goal
// @route POST /api/goals
// @access private
const setGoal = (req, res) => {
    res.status(200).json({message: 'Set goal'})
}

// @desc Update goal
// @route PUT /api/goals/:id
// @access private
const updateGoal = (req, res) => {
    res.status(200).json({message: `Updated goal ${req.params.id}`})
}

// @desc Delete goal
// @route DELETE /api/goals/:id
// @access private
const deleteGoals = (req, res) => {
    res.status(200).json({message: `Deleted goal ${req.params.id}`})
}

module.exports = {
    getGoals,
    setGoal,
    updateGoal,
    deleteGoals
}

