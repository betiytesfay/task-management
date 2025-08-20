const { v4: uuidv4 } = require('uuid');
const Task = require('../models/task');

let tasks = [];


function getAllTasks() {
  return tasks;
}


function getTaskById(id) {
  const task = tasks.find(task => task.id === id);
  if (!task) throw { status: 404, message: "Task not found" };
  return task;
}


function createTask({ title, description, dueDate }) {
  if (!title || !description || !dueDate) {
    throw { status: 400, message: "Title, description, and dueDate are required" };
  }
  const newTask = new Task(title, description, dueDate);
  tasks.push(newTask);
  console.log(`Task created: ${newTask.id} - ${newTask.title}`);
  return newTask;
}


function updateTask(id, { title, description, dueDate }) {
  if (!title || !description || !dueDate) {
    throw { status: 400, message: "Title, description, and dueDate are required" };
  }
  let updatedTask;
  tasks = tasks.map(task => {
    if (task.id === id) {
      updatedTask = { ...task, title, description, dueDate };
      return updatedTask;
    }
    return task;
  });
  if (!updatedTask) throw { status: 404, message: "Task not found" };
  console.log(`Task updated: ${updatedTask.id} - ${updatedTask.title}`);

  return updatedTask;
}


function deleteTask(id) {
  const task = tasks.find(task => task.id === id);
  if (!task) throw { status: 404, message: "Task not found" };
  const taskToDelete = task;
  tasks = tasks.filter(task => task.id !== id);
  console.log(`Task deleted: ${task.id} - ${task.title}`);
  return taskToDelete;
}

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  updateTask,
  deleteTask
};
