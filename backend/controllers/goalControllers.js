const asyncHandler = require('express-async-handler')

//@desc Get goals 
//@route Get /api/goals
//@access Private
const getGoals = async (req, res) => {
    res.status(200).json({message: 'Get goals'})
}

//@desc Set goals 
//@route POST /api/goals
//@access Private
const setGoals = async (req, res) => {
    if(!req.body.text) {
        res.status(400)
        throw new Error('Please add a text field')  
    }
    res.status(200).json({message: 'Set goal'})
}

//@desc update goals 
//@route PUT /api/goals/:id
//@access Private
const updateGoals = async (req, res) => {
    res.status(200).json({message: `update goal ${req.params.id}`})
}

//@desc delete goals 
//@route delete /api/goals/:id
//@access Private
const deleteGoals = async (req, res) => {
    res.status(200).json({message: `delete goal ${req.params.id}`})
}


module.exports = {
    getGoals, 
    setGoals,
    updateGoals,
    deleteGoals,
}