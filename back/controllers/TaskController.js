const Task = require("../models/Task");

class TaskController {
  static async delete(req, res) {
    const { id } = req.params;
    const deleteTask = await Task.findByIdAndRemove(id);
    res.status(201).json({ deleteTask });
  }
  static async getOne(req, res) {
    try {
      const { id } = req.params;
      console.log(id);
      const task = await Task.findById(id);
      res.status(201).json({
        task,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async getAll(req, res) {
    try {
      const allTasks = await Task.find();
      res.status(201).json({
        allTasks,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async create(req, res) {
    const { title, description, done, date, list } = req.body;

    if (!title) {
      res.status(422).json({ message: "The task name is mandatory!" });
      return;
    }
    if (!description) {
      res.status(422).json({ message: "The task description is mandatory!" });
      return;
    }

    const task = new Task({
      title,
      description,
      done,
      date,
      list,
    });
    try {
      const newTask = await task.save();
      res.status(201).json({
        message: "Task Created!",
        newTask,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = TaskController;
