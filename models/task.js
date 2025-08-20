
const { v4: uuidv4 } = require('uuid');

class Task {
  constructor(title, description, dueDate,) {
    this.id = uuidv4();
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;

  }
}

module.exports = Task;
