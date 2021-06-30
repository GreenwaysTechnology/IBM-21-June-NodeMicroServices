const express = require('express');

const userRouter = express.Router();

//User Resource
userRouter.get('/list', (req, res) => {
    res.status(200).json({message:'TODO-USER'})
})

module.exports = userRouter