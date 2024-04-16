const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

//POST method
router.post('/add', todoController.create);

//GET method
router.get('/read', todoController.read);

// PUT request to update a todo by ID
router.put('/update/:id', todoController.updateTodo);

// DELETE request to delete a todo by ID
router.delete('/delete/:id', todoController.deleteTodo);

module.exports = router;