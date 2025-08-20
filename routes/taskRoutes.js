const express = require('express')
const { getTasks, createTask, updateTask, getTasksById, deleteTask } = require("../controllers/taskController")
const router = express.Router()


router.get('/tasks', getTasks)
router.delete('/tasks/:id', deleteTask)
router.put('/tasks/:id', updateTask)
router.post('/tasks', createTask)
router.get('/tasks/:id', getTasksById)
module.exports = router;