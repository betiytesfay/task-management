const taskService = require('../data/taskService.js');


const getTasks = (req, res) => {
  const tasks = taskService.getAllTasks();
  res.json(tasks);
};


const createTask = (req, res) => {
  const { title, description, dueDate, status } = req.body;
  const newTask = taskService.createTask({ title, description, dueDate, status });
  res.status(201).json(newTask);
};


const deleteTask = (req, res) => {
  const deletedTask = taskService.deleteTask(req.params.id);
  if (!deletedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json({ message: "Task deleted", task: deletedTask });
};


const getTasksById = (req, res) => {
  const task = taskService.getTaskById(req.params.id);
  if (!task) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(task);
};




const updateTask = (req, res) => {
  const updatedTask = taskService.updateTask(req.params.id, req.body);
  if (!updatedTask) {
    return res.status(404).json({ message: "Task not found" });
  }
  res.json(updatedTask);
};

module.exports = {
  getTasks,
  createTask,
  deleteTask,
  getTasksById,
  updateTask
};