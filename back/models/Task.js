const mongoose = require("../db/conn");
const { Schema } = mongoose;

const Task = mongoose.model(
  "Task",
  new Schema(
    {
      title: {
        type: String,
        required: true,
      },
      description: {
        type: String,
      },
      done: {
        type: Boolean,
      },
      date: {
        type: Date,
      },
      list: {
        type: String,
      },
      user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
    { timestamps: true }
  )
);

module.exports = Task;
