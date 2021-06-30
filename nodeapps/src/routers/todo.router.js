
const express = require('express');
const { findAll } = require('../services/TodoService')

const todoRouter = express.Router();

//Todo Resource
todoRouter.get('/list', async (req, res) => {

    try {
        const todos = await findAll();
        res.status(200).json(todos)
    }
    catch (err) {
        res.status(200).json({ message: err })

    }
})

module.exports = todoRouter;