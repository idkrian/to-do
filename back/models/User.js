const mongoose = require("../db/conn");
const { Schema } = mongoose;

const User = mongoose.model(
  "User",
  new Schema(
    {
      email: {
        type: String,
        required: true,
      },
      password: {
        type: String,
        required: true,
      },
      confirmPassword: {
        type: String,
      },
      date: {
        type: Date,
      },
      tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: "Task" }],
    },
    { timestamps: true }
  )
);

module.exports = User;
