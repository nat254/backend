const express = require('express');
const router = express.Router();
const todoController = require('../controllers/todo.controller');

//POST method
router.post('/add', todoController.create);

//GET method
router.get('/read', todoController.read);

module.exports = router;