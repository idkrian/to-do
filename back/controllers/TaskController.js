const Task = require("../models/Task");
const User = require("../models/User");

class TaskController {
  static async delete(req, res) {
    const { userId, taskId } = req.params;

    const user = await User.findById(userId).populate("tasks");
    const filteredUser = user.tasks.filter(
      (item) => item._id.toString() !== taskId
    );

    user.tasks = [];
    user.tasks = filteredUser;
    user.save();

    try {
      res.status(201).json({ message: "The task was deleted!" });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async getOne(req, res) {
    try {
      const { id } = req.params;
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
  static async edit(req, res) {
    const { userId, taskId } = req.params;
    const { title, description, done, date, list } = req.body;

    const task = {
      title,
      description,
      date,
      list,
    };

    const user = await User.findById(userId).populate("tasks");
    const filteredUser = user.tasks.filter(
      (item) => item._id.toString() === taskId
    );

    const userTask = filteredUser[0];
    userTask.title = task.title;
    userTask.description = task.description;
    userTask.list = task.list;
    userTask.date = task.date;
    await userTask.save();

    try {
      res.status(201).json({
        userTask,
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }

  static async create(req, res) {
    const { id } = req.params;
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

    const userById = await User.findById(id);
    userById.tasks.push(task);
    await userById.save();
    try {
      res.status(201).json({
        message: "The task was created!",
      });
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
  static async userByPost(req, res) {
    const { id } = req.params;
    const userByPost = await Task.findById(id).populate("user");
    try {
      res.status(201).send(userByPost);
    } catch (error) {
      res.status(500).json({ message: error });
    }
  }
}

module.exports = TaskController;
