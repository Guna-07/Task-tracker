const express = require('express');

const taskController = require('../controllers/tasks');

const router = express.Router();

router.get('/', taskController.getAllTasks);

router.post('/', taskController.postTasks);

router.put('/', taskController.putTasks);

router.delete('/:id', taskController.deleteTasks);

module.exports = router;
