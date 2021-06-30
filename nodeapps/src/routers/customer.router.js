const express = require('express');

const customerRouter = express.Router();


//Customer Resource
customerRouter.get('/list', (req, res) => {
    res.status(200).json({message:'TODO-CUSTOMER'})
})

module.exports = customerRouter
